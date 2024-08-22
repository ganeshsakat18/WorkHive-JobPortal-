import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import styles from "./Register.module.css"; // Import the CSS module

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

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

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated, message]);

  return (
    <section className={styles.authPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Create a new account</h3>
        </div>
        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.wrapper}>
            <div className={styles.inputTag}>
              <label>Register As</label>
              <div className={styles.inputContainer}>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Register as an Employer</option>
                  <option value="Job Seeker">Register as a Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className={styles.inputTag}>
              <label>Name</label>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaPencilAlt />
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.inputTag}>
              <label>Email Address</label>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className={styles.inputTag}>
              <label>Phone Number</label>
              <div className={styles.inputContainer}>
                <input
                  type="number"
                  placeholder="111-222-333"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FaPhoneFlip />
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.inputTag}>
              <label>Address</label>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <FaAddressBook />
              </div>
            </div>
            <div className={styles.inputTag}>
              <label>Password</label>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
          </div>
          {role === "Job Seeker" && (
            <>
              <div className={styles.wrapper}>
                <div className={styles.inputTag}>
                  <label>Your First Niche</label>
                  <div className={styles.inputContainer}>
                    <select
                      value={firstNiche}
                      onChange={(e) => setFirstNiche(e.target.value)}
                    >
                      <option value="">Your Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </select>
                    <MdCategory />
                  </div>
                </div>
                <div className={styles.inputTag}>
                  <label>Your Second Niche</label>
                  <div className={styles.inputContainer}>
                    <select
                      value={secondNiche}
                      onChange={(e) => setSecondNiche(e.target.value)}
                    >
                      <option value="">Your Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </select>
                    <MdCategory />
                  </div>
                </div>
                <div className={styles.inputTag}>
                  <label>Your Third Niche</label>
                  <div className={styles.inputContainer}>
                    <select
                      value={thirdNiche}
                      onChange={(e) => setThirdNiche(e.target.value)}
                    >
                      <option value="">Your Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </select>
                    <MdCategory />
                  </div>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.inputTag}>
                  <label>Cover Letter</label>
                  <div className={styles.inputContainer}>
                    <textarea
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      rows={10}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.inputTag}>
                  <label>Resume</label>
                  <div className={styles.inputContainer}>
                    <input
                      type="file"
                      onChange={resumeHandler}
                      className={styles.fileInput}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            type="submit"
            disabled={loading}
            className={styles.submitButton}
          >
            Register
          </button>
          <Link to="/login" className={styles.loginLink}>
            Login Now
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
