import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { SearchContext } from "../../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import styles from "./Reserve.module.scss";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`);
  const { user, dispatch } = useContext(AuthContext);
  const { dates } = useContext(SearchContext);

  const hotelData = useFetch(`/api/hotels/find/${hotelId}`);

  const updatedBooking = useFetch(`/api/users/${user._id}`).data.booked;
  const updatedUser = { ...user };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const navigate = useNavigate();

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          updatedBooking.push({
            hotel: hotelData.data,
            room: roomId,
            date: allDates,
          });

          updatedUser.booked = updatedBooking;

          dispatch({
            type: "UPDATE",
            payload: updatedUser,
          });
          const res = axios.put(`/api/rooms/availability/${roomId}`, {
            dates: allDates,
          });

          const res2 = axios.put(`/api/users/${user._id}`, {
            booked: updatedBooking,
          });

          return [res.data, res2.data];
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className={styles.reserve}>
      <div className={styles.reserveContainer}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.close}
          onClick={() => {
            setOpen(false);
          }}
        />
        <span>Select your rooms:</span>
        {data.map((item) => {
          return (
            <div className={styles.item}>
              <div className={styles.itemInfo}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemDesc}>{item.desc}</div>
                <div className={styles.itemMax}>
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className={styles.itemPrice}>{item.price}</div>
              </div>
              <div className={styles.selectRooms}>
                {item.roomNumbers.map((roomNumber) => (
                  <div className={styles.room}>
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <button onClick={handleClick} className={styles.reserveButton}>
          Reserve now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
