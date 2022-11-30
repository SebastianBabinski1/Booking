import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import styles from "./Featured.module.scss";

const Featured = () => {
  const { data, loading } = useFetch(
    "/api/hotels/countByCity?cities=Berlin,Madrid,London"
  );

  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const options = {
    adult: 1,
    children: 0,
    room: 1,
  };

  const dates = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];

  const handleSearch = (destination) => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className={styles.featured}>
      {loading ? (
        "Loading, please wait"
      ) : (
        <>
          <div
            className={styles.featuredItem}
            onClick={() => handleSearch("Berlin")}
          >
            <img
              className={styles.image}
              src="https://f4fcdn.eu/wp-content/uploads/2019/07/Berlinv2.jpg"
              alt="featured"
            />
            <div className={styles.title}>
              <p className={styles.place}>Berlin</p>
              <p className={styles.properties}>{data[0]} properties</p>
            </div>
          </div>
          <div
            className={styles.featuredItem}
            onClick={() => handleSearch("Madrid")}
          >
            <img
              className={styles.image}
              src="https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg_604889389.jpg"
              alt="featured"
            />
            <div className={styles.title}>
              <p className={styles.place}>Madrid</p>
              <p className={styles.properties}>{data[1]} properties</p>
            </div>
          </div>
          <div
            className={styles.featuredItem}
            onClick={() => handleSearch("London")}
          >
            <img
              className={styles.image}
              src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
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
