import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    username: undefined,
    password: undefined,
    repeatPassword: undefined,
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (credentials.password !== credentials.repeatPassword) {
        console.log("Repeated password is incorect");
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
    }

    // if (credentials.password !== credentials.repeatPassword) {
    //   setError(true);
    // } else {
    //   console.log("Git");
  };
  // dispatch({ type: "LOGIN_START" });
  // try {
  //   const res = await axios.post("/api/auth/login", credentials);
  //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //   navigate("/");
  // } catch (err) {
  //   dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  // }

  return (
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
        <button
          // disabled={loading}
          onClick={handleClick}
          className={styles.registerButton}
        >
          Register
        </button>
      </div>
      {error && <p>Repeated password is incorrect</p>}
    </div>
  );
};

export default Register;
