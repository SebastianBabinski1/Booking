import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Login.module.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <Navbar />
      <div className={styles.login}>
        <div className={styles.loginContainer}>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className={styles.loginInput}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className={styles.loginInput}
          />
          {error && <span>{error.message}</span>}
          <button
            disabled={loading}
            onClick={handleClick}
            className={styles.loginButton}
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className={styles.registerButton}
          >
            You dont have an account? <br />
            Register now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
