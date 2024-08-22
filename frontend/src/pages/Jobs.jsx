import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import styles from "./Jobs.module.css";

const Jobs = () => {
  const [city, setCity] = useState("");
  const [niche, setNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const debouncedSearch = useCallback(
    debounce((city, niche, keyword) => {
      dispatch(fetchJobs(city, niche, keyword));
    }, 300),
    [dispatch]
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    debouncedSearch(city, niche, searchKeyword);
  }, [debouncedSearch, dispatch, error, city, niche, searchKeyword]);

  const handleSearch = () => {
    dispatch(fetchJobs(city, niche, searchKeyword));
  };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  const handleNicheChange = (selectedNiche) => {
    setNiche(selectedNiche);
  };

  const cities = [
    "Ahmednagar",
    "Pune",
    "Banglore",
    "Kanpur",
    "Mumbai",
    "Kochi",
    "Hyderabad",
    "Chennai",
    "Ayodhya",
    "Indore",
    "Ludhiyana",
    "New Delhi",
    "Lucknow",
    "Gandhinagar",
    "Ahmedabad",
    "Gurgaon",
    "Shimala",
    "Manali",
    "Ladakh",
    "Dharmshala",
  ];

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className={styles.jobs}>
          <div className={styles.searchTabWrapper}>
            <input
              type="text"
              className={styles.searchInput}
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search jobs..."
            />
            <button className={styles.searchButton} onClick={handleSearch}>
              Find Job
            </button>
            <FaSearch className={styles.searchIcon} />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.filterBar}>
              <div className={styles.cities}>
                <h2 className={styles.citiesTitle}>Filter Job By City</h2>
                {cities.map((cityOption, index) => (
                  <div className={styles.cityOption} key={index}>
                    <input
                      type="radio"
                      id={cityOption}
                      name="city"
                      value={cityOption}
                      checked={city === cityOption}
                      onChange={() => handleCityChange(cityOption)}
                    />
                    <label htmlFor={cityOption}>{cityOption}</label>
                  </div>
                ))}
              </div>
              <div className={styles.niches}>
                <h2 className={styles.nichesTitle}>Filter Job By Niche</h2>
                {nichesArray.map((nicheOption, index) => (
                  <div className={styles.nicheOption} key={index}>
                    <input
                      type="radio"
                      id={nicheOption}
                      name="niche"
                      value={nicheOption}
                      checked={niche === nicheOption}
                      onChange={() => handleNicheChange(nicheOption)}
                    />
                    <label htmlFor={nicheOption}>{nicheOption}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.mobileFilter}>
                <select
                  className={styles.mobileFilterSelect}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Filter By City</option>
                  {cities.map((cityOption, index) => (
                    <option value={cityOption} key={index}>
                      {cityOption}
                    </option>
                  ))}
                </select>
                <select
                  className={styles.mobileFilterSelect}
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                >
                  <option value="">Filter By Niche</option>
                  {nichesArray.map((nicheOption, index) => (
                    <option value={nicheOption} key={index}>
                      {nicheOption}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.jobsContainer}>
                {jobs && jobs.length > 0 ? (
                  jobs.map((element) => (
                    <div className={styles.card} key={element._id}>
                      {element.hiringMultipleCandidates === "Yes" ? (
                        <p className={styles.hiringMultiple}>
                          Hiring Multiple Candidates
                        </p>
                      ) : (
                        <p className={styles.hiring}>Hiring</p>
                      )}
                      <p className={styles.cardTitle}>{element.title}</p>
                      <p className={styles.cardDetail}>{element.companyName}</p>
                      <p className={styles.cardDetail}>{element.location}</p>
                      <p className={styles.cardDetail}>
                        <span className={styles.cardDetailStrong}>Salary:</span>{" "}
                        Rs. {element.salary}
                      </p>
                      <p className={styles.cardDetail}>
                        <span className={styles.cardDetailStrong}>
                          Posted On:
                        </span>{" "}
                        {element.jobPostedOn.substring(0, 10)}
                      </p>
                      <div className={styles.btnWrapper}>
                        <Link
                          className={styles.btn}
                          to={`/post/application/${element._id}`}
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No jobs found. Try adjusting your search criteria.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;
