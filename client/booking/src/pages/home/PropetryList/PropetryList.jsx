import styles from "./PropetryList.module.scss";

const PropetryList = () => {
  return (
    <div className={styles.propertyList}>
      <div className={styles.propertyListItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o="
          alt="gizycko"
          className={styles.image}
        />
        <div>
          <p className={styles.title}>Hotels</p>
          <p className={styles.desc}>18</p>
        </div>
      </div>
      <div className={styles.propertyListItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o="
          alt="gizycko"
          className={styles.image}
        />
        <div>
          <p className={styles.title}>Resorts</p>
          <p className={styles.desc}>23</p>
        </div>
      </div>
      <div className={styles.propertyListItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o="
          alt="gizycko"
          className={styles.image}
        />
        <div>
          <p className={styles.title}>Cabins</p>
          <p className={styles.desc}>51</p>
        </div>
      </div>
      <div className={styles.propertyListItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o="
          alt="gizycko"
          className={styles.image}
        />
        <div>
          <p className={styles.title}>Villas</p>
          <p className={styles.desc}>63</p>
        </div>
      </div>
      <div className={styles.propertyListItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o="
          alt="gizycko"
          className={styles.image}
        />
        <div>
          <p className={styles.title}>Rooms</p>
          <p className={styles.desc}>125</p>
        </div>
      </div>
    </div>
  );
};

export default PropetryList;
