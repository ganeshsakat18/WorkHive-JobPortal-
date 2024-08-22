import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, login } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaRegUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import styles from "./Login.module.css";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!role) errors.role = "Please select a role";
    if (!email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
    if (!password) errors.password = "Password is required";
    else if (password.length < 6)
      errors.password = "Password must be at least 6 characters";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("role", role);
      formData.append("email", email);
      formData.append("password", password);
      dispatch(login(formData));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, isAuthenticated, navigateTo]);

  return (
    <section className={styles.authPage}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <img src="../home/login.jpg" alt="Login Banner" />
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.header}>
            <h1>Login to your account</h1>
          </div>
          <form onSubmit={handleLogin} className={styles.form}>
            <div className={styles.inputTag}>
              <label htmlFor="role">Login As</label>
              <div>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  aria-invalid={!!formErrors.role}
                >
                  <option value="">Select Role</option>
                  <option value="Employer">Login as an Employer</option>
                  <option value="Job Seeker">Login as a Job Seeker</option>
                </select>
                <FaRegUser aria-hidden="true" />
              </div>
              {formErrors.role && (
                <span className={styles.error}>{formErrors.role}</span>
              )}
            </div>
            <div className={styles.inputTag}>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!formErrors.email}
                />
                <MdOutlineMailOutline aria-hidden="true" />
              </div>
              {formErrors.email && (
                <span className={styles.error}>{formErrors.email}</span>
              )}
            </div>
            <div className={styles.inputTag}>
              <label htmlFor="password">Password</label>
              <div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!formErrors.password}
                />
                <RiLock2Fill aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.passwordToggle}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {formErrors.password && (
                <span className={styles.error}>{formErrors.password}</span>
              )}
            </div>
            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <Link to="/register" className={styles.link}>
              Register Now
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
