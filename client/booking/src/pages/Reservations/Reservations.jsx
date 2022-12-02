import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import useFetch from "../hooks/useFetch";
import SearchItem from "../list/SearchItem/SearchItem";
import styles from "./Reservations.module.scss";

const Reservations = () => {
  const { user, dispatch } = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      <Navbar />
      <div>
        {user.booked.map((item) => {
          return <SearchItem item={item.hotel} />;
        })}
      </div>
    </div>
  );
};

export default Reservations;
