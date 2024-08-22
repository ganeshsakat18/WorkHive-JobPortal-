import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.mission}>
        Our mission is to bridge the gap between job seekers and employers by
        providing a seamless platform that empowers talent and fosters
        opportunities.
      </p>
      <p className={styles.description}>
        Welcome to our company! We are dedicated to providing the best services
        in the industry. Our team is composed of highly skilled professionals
        who are passionate about what they do.
      </p>

      <div className={styles.story}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p>
          Founded with the vision of connecting talent with opportunity, our
          platform has grown to become a trusted resource for job seekers and
          employers alike. From humble beginnings to industry leaders, our
          journey is driven by innovation, integrity, and a commitment to
          excellence.
        </p>
      </div>

      <div className={styles.impactSection}>
        <h2 className={styles.sectionTitle}>Our Impact</h2>
        <div className={styles.impactContent}>
          <div className={styles.impactImageWrapper}>
            <img
              src="../home/88.jpg"
              alt="Our Impact"
              className={styles.impactImage}
            />
          </div>
          <div className={styles.impactText}>
            <p>
              Over the years, we’ve made a significant impact on the careers of
              thousands of job seekers and the success of countless businesses.
              Our platform has facilitated thousands of successful job matches,
              making a real difference in the lives of our users.
            </p>
            <p>
              Our commitment to excellence and innovation drives us to continue
              enhancing our platform, ensuring that both job seekers and
              employers have the best possible experience.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Users Say</h2>
        <p className={styles.testimonial}>
          "This platform helped me find my dream job in just a few weeks. The
          application process was smooth and easy to navigate." - Job Seeker
        </p>
        <p className={styles.testimonial}>
          "As an employer, I've found the perfect candidates for my company
          through this platform. It's efficient and user-friendly." - Employer
        </p>
      </div>

      <div className={styles.callToAction}>
        <h2 className={styles.sectionTitle}>Join Us Today</h2>
        <p>
          Whether you're looking for your next career move or searching for top
          talent, our platform is here to help. Sign up now and take the next
          step in your journey.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
