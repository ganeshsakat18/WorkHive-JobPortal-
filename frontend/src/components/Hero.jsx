import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      id="myCarousel"
      className={`carousel slide mb-6 ${styles.carousel}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="../home/3.png" className="d-block w-100" alt="Slide 1" />
          <div className="container">
            <div
              className={`carousel-caption text-start ${styles.captionHover}`}
            >
              <h1>Unlock Your Future Career</h1>
              <p>
                Discover Top Job Opportunities Tailored to Your Skills and
                Ambitions.
              </p>
              <p>
                <a
                  className="btn btn-lg btn-primary"
                  href="http://localhost:5173/register"
                >
                  Signup
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="../home/2.png" className="d-block w-100" alt="Slide 2" />
          <div className="container">
            <div className={`carousel-caption ${styles.captionHover}`}>
              <p>
                Embark on a journey to find your ideal job with ease. Our
                platform offers a comprehensive range of job listings across
                various sectors, from entry-level positions to executive roles.
                Leverage our advanced search features and personalized
                recommendations to connect with employers who are looking for
                talent like yours. Elevate your career prospects today and take
                the next step towards achieving your professional goals.
              </p>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="../home/8.png" className="d-block w-100" alt="Slide 3" />
          <div className="container">
            <div className={`carousel-caption text-end ${styles.captionHover}`}>
              <h1>Know About Us</h1>

              <p>
                <a
                  className="btn btn-lg btn-primary"
                  href="http://localhost:5173/about-us"
                >
                  Click Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
