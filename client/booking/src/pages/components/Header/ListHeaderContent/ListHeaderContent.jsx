import styles from "./ListHeaderContent.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

import SearchBar from "./SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const ListHeaderContent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <p className={styles.title}>A lifetime of discounts? It's Genius</p>
      <p className={styles.description}>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free Booking account
      </p>
      {!user && (
        <button
          onClick={() => navigate("/login")}
          className={styles.headerButton}
        >
          Sign in / Register
        </button>
      )}
      <SearchBar />
    </>
  );
};

export default ListHeaderContent;
