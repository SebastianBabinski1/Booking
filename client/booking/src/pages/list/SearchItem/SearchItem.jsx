import styles from "./SearchItem.module.scss";

const SearchItem = () => {
  return (
    <div className={styles.searchItem}>
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/max500/137529268.jpg?k=e9a37c6e546f3c85b88d2a88428bf0425d8c637e3f17abdf3b51d40f28aea5e1&o=&hp=1"
        alt="room"
        className={styles.searchImage}
      />
      <div className={styles.searchDescription}>
        <p className={styles.searchTitle}>Apartamenty Róża Wiatrów</p>
        <span className={styles.searchDistance}>200m from center</span>
        <span className={styles.searchTaxiOp}>Free airport taxi</span>
        <span className={styles.searchSubtitle}>
          Studio Apartment with air conditioning
        </span>
        <span className={styles.searchFeatures}>
          1 bathroom · 25m2 · 1 full bed · wifi
        </span>
        <span className={styles.searchCancelOp}>Free cancellation</span>
        <span className={styles.searchCancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={styles.searchDetails}>
        <div className={styles.searchRating}>
          <span className={styles.searchRatingDescription}>Great</span>
          <button className={styles.searchRatingGrade}>8.6</button>
        </div>
        <div className={styles.searchDetailTexts}>
          <span className={styles.searchPrice}>$90</span>
          <span className={styles.searchTaxOp}>Includes taxes and fees</span>
          <button className={styles.searchCheckButton}>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
