import styles from "./SearchItem.module.scss";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
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
            <button className={styles.searchCheckButton}>
              See availability
            </button>
          </Link>
        </div>
      </div>
    );
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
          <span className={styles.searchCancelOpSubtitle}>
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <SeeAvailability />
      </div>
    </div>
  );
};

export default SearchItem;
