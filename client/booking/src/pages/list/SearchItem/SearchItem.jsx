import styles from "./SearchItem.module.scss";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const SearchItem = ({ item, reservedRoom, date }) => {
  const { user, dispatch } = useContext(AuthContext);

  console.log("user", user);
  // console.log("item", item);
  // console.log("reservedRoom", reservedRoom);
  // console.log("date", date);
  const updatedUser = { ...user };

  const SeeAvailability = () => {
    return (
      <div className={styles.searchDetails}>
        {item.rating && (
          <div className={styles.searchRating}>
            <span className={styles.searchRatingDescription}>Great</span>
            <button className={styles.searchRatingGrade}>{item.rating}</button>
          </div>
        )}
        <div className={styles.searchDetailTexts}>
          <span className={styles.searchPrice}>{item.cheapestPrice}</span>
          <span className={styles.searchTaxOp}>Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className={styles.defaultButton}>See availability</button>
          </Link>
        </div>
      </div>
    );
  };

  const handleCancellation = async () => {
    try {
      const updatedBooked = user.booked.filter((i) => {
        return i.room !== reservedRoom;
      });

      updatedUser.booked = updatedBooked;

      dispatch({
        type: "UPDATE",
        payload: updatedUser,
      });
      const res = axios.put(`/api/users/${user._id}`, {
        booked: updatedBooked,
      });

      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.searchItem}>
      <div className={styles.leftSide}>
        <img src={item.photos[0]} alt="room" className={styles.searchImage} />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.searchDescription}>
          <p className={styles.searchTitle}>{item.name}</p>
          <span className={styles.searchDistance}>
            {item.distance}m from center
          </span>
          <span className={styles.searchTaxiOp}>Free airport taxi</span>
          <span className={styles.searchSubtitle}>
            Studio Apartment with air conditioning
          </span>
          <span className={styles.searchFeatures}>{item.desc}</span>
          <span className={styles.searchCancelOp}>Free cancellation</span>
          {date && (
            <span className={styles.searchCancelOpSubtitle}>
              You can cancel later, so lock in this great price today!
            </span>
          )}
        </div>
        {date ? (
          <div className={styles.reservationData}>
            <p className={styles.datesOfReservation}>Dates of reservation: </p>
            <p>
              from {date.start.substr(0, 10)} to {date.end.substr(0, 10)}
            </p>
            <button
              onClick={handleCancellation}
              className={styles.defaultButton}
            >
              Cancel reservation
            </button>
          </div>
        ) : (
          <SeeAvailability />
        )}
      </div>
    </div>
  );
};

export default SearchItem;
