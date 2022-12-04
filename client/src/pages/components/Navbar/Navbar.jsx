import styles from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className={styles.logo}>Booking SB</span>
        </Link>
        {user ? (
          <div className={styles.logoutWrapper}>
            <p className={styles.username}>Welcome {user.username}!</p>
            <button
              className={styles.navButton}
              onClick={() => navigate("/reservations")}
            >
              Your reservations
            </button>
            <button className={styles.navButton} onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.navItems}>
            <button
              className={styles.navButton}
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              onClick={() => navigate("/login")}
              className={styles.navButton}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
