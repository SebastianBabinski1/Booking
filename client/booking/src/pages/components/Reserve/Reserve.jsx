import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Reserve.module.scss";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  console.log(selectedRooms);
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
                <div className={styles.price}>{item.price}</div>
                {item.roomNumbers.map((roomNumber) => (
                  <div className={styles.room}>
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reserve;
