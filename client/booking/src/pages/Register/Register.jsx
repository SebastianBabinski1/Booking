import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Register.module.scss";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    username: undefined,
    password: undefined,
    repeatPassword: undefined,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (credentials.password !== credentials.repeatPassword) {
        setError("Repeated password is incorect");
      } else {
        await axios.post("/api/auth/register", {
          email: credentials.email,
          username: credentials.username,
          password: credentials.password,
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  };

  return (
    <div className={styles.registerWrapper}>
      <Navbar />
      <div className={styles.register}>
        <div className={styles.registerContainer}>
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className={styles.registerInput}
          />
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className={styles.registerInput}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className={styles.registerInput}
          />
          <input
            type="password"
            placeholder="repeat password"
            id="repeatPassword"
            onChange={handleChange}
            className={styles.registerInput}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={handleClick} className={styles.registerButton}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
