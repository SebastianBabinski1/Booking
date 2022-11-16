import useFetch from "../../hooks/useFetch";
import styles from "./Featured.module.scss";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className={styles.featured}>
      {loading ? (
        "Loading, please wait"
      ) : (
        <>
          <div className={styles.featuredItem}>
            <img
              className={styles.image}
              src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/161566238.webp?k=444cf363b0e6ee14ee032c13d75c7c8d072bf6b289b0fa9fd40e02bb81a0afcb&o="
              alt="featured"
            />
            <div className={styles.title}>
              <p className={styles.place}>Berlin</p>
              <p className={styles.properties}>{data[0]} properties</p>
            </div>
          </div>
          <div className={styles.featuredItem}>
            <img
              className={styles.image}
              src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/161566238.webp?k=444cf363b0e6ee14ee032c13d75c7c8d072bf6b289b0fa9fd40e02bb81a0afcb&o="
              alt="featured"
            />
            <div className={styles.title}>
              <p className={styles.place}>Madrid</p>
              <p className={styles.properties}>{data[1]} properties</p>
            </div>
          </div>
          <div className={styles.featuredItem}>
            <img
              className={styles.image}
              src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/161566238.webp?k=444cf363b0e6ee14ee032c13d75c7c8d072bf6b289b0fa9fd40e02bb81a0afcb&o="
              alt="featured"
            />
            <div className={styles.title}>
              <p className={styles.place}>London</p>
              <p className={styles.properties}>{data[2]} properties</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
