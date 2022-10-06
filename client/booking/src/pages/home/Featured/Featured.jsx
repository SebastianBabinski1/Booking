import styles from "./Featured.module.scss";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <img
          className={styles.image}
          src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/161566238.webp?k=444cf363b0e6ee14ee032c13d75c7c8d072bf6b289b0fa9fd40e02bb81a0afcb&o="
          alt="featured"
        />
        <div className={styles.title}>
          <p className={styles.place}>Gdańsk</p>
          <p className={styles.properties}>10 properties</p>
        </div>
      </div>{" "}
      <div className={styles.featuredItem}>
        <img
          className={styles.image}
          src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/161566238.webp?k=444cf363b0e6ee14ee032c13d75c7c8d072bf6b289b0fa9fd40e02bb81a0afcb&o="
          alt="featured"
        />
        <div className={styles.title}>
          <p className={styles.place}>Gdańsk</p>
          <p className={styles.properties}>10 properties</p>
        </div>
      </div>{" "}
      <div className={styles.featuredItem}>
        <img
          className={styles.image}
          src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/161566238.webp?k=444cf363b0e6ee14ee032c13d75c7c8d072bf6b289b0fa9fd40e02bb81a0afcb&o="
          alt="featured"
        />
        <div className={styles.title}>
          <p className={styles.place}>Gdańsk</p>
          <p className={styles.properties}>10 properties</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Featured;
