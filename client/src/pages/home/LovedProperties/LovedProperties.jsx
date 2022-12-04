import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from "./LovedProperties.module.scss";

const LovedProperties = () => {
  const { data, loading } = useFetch(
    `api/hotels?featured=false&limit=${window.screen.width > 1200 ? 4 : 2}`
  );

  const navigate = useNavigate();

  const options = {
    adult: 1,
    children: 0,
    room: 1,
  };

  const today = new Date();
  const tommorow = new Date();
  tommorow.setDate(tommorow.getDate() + 1);

  const dates = [
    {
      startDate: today,
      endDate: tommorow,
      key: "selection",
    },
  ];

  const handleClick = (id) => {
    navigate(`/hotels/${id}`, { state: { dates, options } });
  };

  return (
    <div className={styles.lovedProperties}>
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div
              className={styles.propertyItem}
              key={item._id}
              onClick={() => handleClick(item._id)}
            >
              <img
                src={item.photos[0]}
                alt="loved property"
                className={styles.image}
              />
              <span className={styles.name}>{item.name}</span>
              <span className={styles.city}>{item.city}</span>
              <span className={styles.price}>
                Starting from {item.cheapestPrice}
              </span>
              {item.rating && (
                <div className={styles.ratingWrapper}>
                  <button className={styles.ratingButton}>{item.rating}</button>
                  <span className={styles.ratingDesc}>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LovedProperties;
