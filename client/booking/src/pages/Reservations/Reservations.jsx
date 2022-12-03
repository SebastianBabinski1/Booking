import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import useFetch from "../hooks/useFetch";
import SearchItem from "../list/SearchItem/SearchItem";
import styles from "./Reservations.module.scss";

const Reservations = () => {
  const { user, dispatch } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <div className={styles.reservedHotelsWrapper}>
        {user.booked.map((item) => {
          console.log("item");
          console.log(item);

          return (
            <SearchItem
              item={item.hotel}
              reservedRoom={item.room}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reservations;
