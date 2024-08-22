import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorksSection}>
      <h3 className={styles.howItWorksTitle}>How does it work?</h3>
      <div
        className={`d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center ${styles.howItWorksContainer}`}
      >
        <div className={styles.howItWorksCard}>
          <div className={styles.howItWorksIconWrapper}>
            <LuUserPlus className={styles.howItWorksIcon} />
          </div>
          <h4 className={styles.howItWorksCardTitle}>Create an Account</h4>
          <p className={styles.howItWorksCardText}>
            Sign up for a free account as a job seeker or employer. Set up your
            profile in minutes to start posting jobs or applying for jobs.
            Customize your profile to highlight your skills or requirements.
          </p>
        </div>
        <div className={styles.howItWorksCard}>
          <div className={styles.howItWorksIconWrapper}>
            <VscTasklist className={styles.howItWorksIcon} />
          </div>
          <h4 className={styles.howItWorksCardTitle}>Post or Browse Jobs</h4>
          <p className={styles.howItWorksCardText}>
            Employers can post detailed job descriptions, and job seekers can
            browse a comprehensive list of available positions. Utilize filters
            to find jobs that match your skills and preferences.
          </p>
        </div>
        <div className={styles.howItWorksCard}>
          <div className={styles.howItWorksIconWrapper}>
            <BiSolidLike className={styles.howItWorksIcon} />
          </div>
          <h4 className={styles.howItWorksCardTitle}>Hire or Get Hired</h4>
          <p className={styles.howItWorksCardText}>
            Employers can shortlist candidates and extend job offers. Job
            seekers can review job offers and accept positions that align with
            their career goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
