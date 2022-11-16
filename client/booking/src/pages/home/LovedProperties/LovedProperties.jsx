import useFetch from "../../hooks/useFetch";
import styles from "./LovedProperties.module.scss";

const LovedProperties = () => {
  const { data, loading, error } = useFetch("api/hotels?featured=true&limit=4");

  console.log(data);
  return (
    <div className={styles.lovedProperties}>
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className={styles.propertyItem} key={item._id}>
              <img
                src={item.photos[0]}
                alt="loved property"
                className={styles.image}
              />
              <span className={styles.name}>{item.name}</span>
              <span className={styles.city}>{item.city}</span>
              <span className={styles.price}>
                Starting from {item.cheapiestPrice}
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
