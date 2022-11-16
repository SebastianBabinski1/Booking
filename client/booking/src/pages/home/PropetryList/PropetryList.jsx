import useFetch from "../../hooks/useFetch";
import styles from "./PropetryList.module.scss";

const PropetryList = () => {
  const { data, loading, error } = useFetch("/api/hotels/countByType");

  const images = [
    "https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o=",
    "https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o=",
    "https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o=",
    "https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o=",
    "https://t-cf.bstatic.com/xdata/images/city/540x270/727613.webp?k=d593c019106378dac3fb90c171123be6472efea8a0e1595f4d840c9a9971c3ca&o=",
  ];

  return (
    <div className={styles.propertyList}>
      {loading ? (
        "Loading, please wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className={styles.propertyListItem} key={i}>
                <img src={img} alt="gizycko" className={styles.image} />
                <div>
                  <p className={styles.title}>{data[i]?.type}</p>
                  <p className={styles.desc}>
                    {data[i]?.count} {data[i]?.type}
                  </p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropetryList;
