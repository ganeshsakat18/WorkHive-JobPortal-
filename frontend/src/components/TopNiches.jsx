import React from "react";
import styles from "./TopNiches.module.css";

const TopNiches = () => {
  return (
    <div className={`container marketing ${styles.topNichesContainer}`}>
      <h1 className={`text-center mb-5 ${styles.leadingSectorsHeading}`}>
        Leading Sectors
      </h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="../home/9.png"
            alt="First niche"
            className={`${styles.nicheImage} rounded-circle`}
            width="140"
            height="140"
          />
          <h2 className="fw-normal r">WebDeveloper</h2>
          <p>
            The web development niche focuses on creating, maintaining, and
            optimizing websites and web applications. It encompasses front-end
            and back-end development, as well as web design and e-commerce. This
            niche is vital for crafting effective online experiences.
          </p>
          <p>
            <a
              className="btn btn-secondary"
              href="https://www.coursera.org/articles/web-developer"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="../home/11.jpg"
            alt="Second niche"
            className={`${styles.nicheImage} rounded-circle`}
            width="140"
            height="140"
          />
          <h2 className="fw-normal">DataAnalyst</h2>
          <p>
            The data analyst niche involves interpreting and analyzing data to
            help organizations make informed decisions. It includes data
            visualization, statistical analysis, and reporting
          </p>
          <p>
            <a
              className="btn btn-secondary"
              href="https://graduate.northeastern.edu/resources/what-does-a-data-analyst-do/"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="../home/12.png"
            alt="Third niche"
            className={`${styles.nicheImage} rounded-circle`}
            width="140"
            height="140"
          />
          <h2 className="fw-normal">AI & ML</h2>
          <p>
            Artificial Intelligence (AI) and Machine Learning (ML) enable
            systems to learn from data and improve automatically. AI performs
            tasks requiring human-like intelligence, while ML analyzes data
            patterns for predictions and insights. These technologies drive
            innovation and efficiency across various industries.
          </p>
          <p>
            <a
              className="btn btn-secondary"
              href="https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNiches;
