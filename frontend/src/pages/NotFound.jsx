import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to our company! We are dedicated to providing the best services
        in the industry. Our team is composed of highly skilled professionals
        who are passionate about what they do.
      </p>
      <div className={styles.team}>
        <div className={styles.member}>
          <img
            src="/images/home/3.png"
            alt="Portrait of John Doe, CEO"
            className={styles.memberImage}
            onError={(e) => {
              e.target.src = "/images/default.png";
            }}
          />
          <h3 className={styles.memberName}>John Doe</h3>
          <p className={styles.memberRole}>CEO</p>
        </div>
        <div className={styles.member}>
          <img
            src="/images/member2.jpg"
            alt="Portrait of Jane Smith, CTO"
            className={styles.memberImage}
            onError={(e) => {
              e.target.src = "/images/default.png";
            }}
          />
          <h3 className={styles.memberName}>Jane Smith</h3>
          <p className={styles.memberRole}>CTO</p>
        </div>
        <div className={styles.member}>
          <img
            src="/images/member3.jpg"
            alt="Portrait of Emily Johnson, CFO"
            className={styles.memberImage}
            onError={(e) => {
              e.target.src = "/images/default.png";
            }}
          />
          <h3 className={styles.memberName}>Emily Johnson</h3>
          <p className={styles.memberRole}>CFO</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
