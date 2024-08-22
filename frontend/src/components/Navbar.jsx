import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <nav className={`${styles.navbar} ${show ? styles.show : ""}`}>
      <NavLink to="/" className={`${styles.logo} text-decoration-none`}>
        <img src="/logo.png" alt="logo" className={styles.logoImage} />
      </NavLink>

      <GiHamburgerMenu
        className={`${styles.hamburger} d-md-none`}
        onClick={() => setShow(!show)}
      />

      <ul className={`nav nav-pills ${show ? "" : "d-none d-md-flex"}`}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setShow(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/jobs"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setShow(false)}
          >
            Jobs
          </NavLink>
        </li>
        {isAuthenticated ? (
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setShow(false)}
            >
              Dashboard
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setShow(false)}
            >
              Login
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink
            to="/about-us"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setShow(false)}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
