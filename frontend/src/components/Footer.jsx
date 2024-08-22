import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <img src="/logo1.png" alt="logo" />
        </div>
        <div className={styles.footerSupport}>
          <h4>Support</h4>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra 411057,
              India
            </li>
            <li className={styles.footerListItem}>WorkHive@gmail.com</li>
            <li className={styles.footerListItem}>+92 777777777</li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.footerListItem}>
              <Link to="/jobs" className={styles.link}>
                Jobs
              </Link>
            </li>
            {isAuthenticated && (
              <li className={styles.footerListItem}>
                <Link to="/dashboard" className={styles.link}>
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className={styles.footerFollowUs}>
          <h4>Follow Us</h4>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <Link to="/" className={styles.link}>
                <span className={styles.icon}>
                  <FaTwitter />
                </span>
                <span>Twitter</span>
              </Link>
            </li>
            <li className={styles.footerListItem}>
              <Link to="/" className={styles.link}>
                <span className={styles.icon}>
                  <FaInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li className={styles.footerListItem}>
              <Link to="/" className={styles.link}>
                <span className={styles.icon}>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </Link>
            </li>
            <li className={styles.footerListItem}>
              <Link to="/" className={styles.link}>
                <span className={styles.icon}>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <div className={styles.copyright}>
        &copy; CopyRight 2024. All Rights Reserved By WorkHive
      </div>
    </>
  );
};

export default Footer;
