import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout, clearAllUserErrors } from "../store/slices/userSlice";
import { LuMoveRight } from "react-icons/lu";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";
import MyJobs from "../components/MyJobs";
import JobPost from "../components/JobPost";
import Applications from "../components/Applications";
import MyApplications from "../components/MyApplications";
import styles from "./Dashboard.module.css"; // Import CSS module

const componentMap = {
  "My Profile": MyProfile,
  "Update Profile": UpdateProfile,
  "Update Password": UpdatePassword,
  "Job Post": JobPost,
  "My Jobs": MyJobs,
  Applications: Applications,
  "My Applications": MyApplications,
};

const useDashboardState = () => {
  const [show, setShow] = useState(false);
  const [componentName, setComponentName] = useState("My Profile");

  const toggleSidebar = useCallback(() => setShow((prev) => !prev), []);
  const changeComponent = useCallback((name) => {
    setComponentName(name);
    setShow(false);
  }, []);

  return { show, componentName, toggleSidebar, changeComponent };
};

const Dashboard = () => {
  const { show, componentName, toggleSidebar, changeComponent } =
    useDashboardState();
  const { loading, isAuthenticated, error, user } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    toast.success("Logged out successfully.");
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, isAuthenticated, navigateTo]);

  const sidebarLinks = useMemo(
    () => [
      { name: "My Profile", role: "all" },
      { name: "Update Profile", role: "all" },
      { name: "Update Password", role: "all" },
      { name: "Job Post", role: "Employer" },
      { name: "My Jobs", role: "Employer" },
      { name: "Applications", role: "Employer" },
      { name: "My Applications", role: "Job Seeker" },
    ],
    []
  );

  const ActiveComponent = componentMap[componentName] || MyProfile;

  return (
    <section className={styles.account}>
      <div className={styles.componentHeader}>
        <p>Dashboard</p>
        <p>
          Welcome! <span>{user?.name}</span>
        </p>
      </div>
      <div className={styles.container}>
        <div className={`${styles.sidebar} ${show ? styles.showSidebar : ""}`}>
          <ul className={styles.sidebarLinks}>
            <h4 className={styles.sidebarTitle}>Manage Account</h4>
            {sidebarLinks.map(
              (link) =>
                (link.role === "all" || link.role === user?.role) && (
                  <li key={link.name}>
                    <button
                      onClick={() => changeComponent(link.name)}
                      className={
                        componentName === link.name
                          ? styles.activeLink
                          : styles.sidebarLinkButton
                      }
                    >
                      {link.name}
                    </button>
                  </li>
                )
            )}
            <li>
              <button
                onClick={handleLogout}
                className={styles.sidebarLinkButton}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.banner}>
          <div
            className={`${styles.sidebarIcon} ${
              show ? styles.moveRight : styles.moveLeft
            }`}
          >
            <LuMoveRight
              onClick={toggleSidebar}
              className={show ? styles.leftArrow : styles.rightArrow}
              aria-label={show ? "Hide sidebar" : "Show sidebar"}
            />
          </div>
          <ActiveComponent />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
