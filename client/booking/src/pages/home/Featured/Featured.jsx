import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import {
  defaultGuestsDates as dates,
  defaultGuestsOptions as options,
} from "../../../utils/utils";
import useFetch from "../../hooks/useFetch";
import styles from "./Featured.module.scss";

const Featured = () => {
  const { data, loading } = useFetch(
    "/api/hotels/countByCity?cities=Berlin,Madrid,London"
  );

  const featuredData = [
    {
      name: "Berlin",
      photoSrc: "https://f4fcdn.eu/wp-content/uploads/2019/07/Berlinv2.jpg",
    },
    {
      name: "Madrid",
      photoSrc:
        "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg_604889389.jpg",
    },
    {
      name: "London",
      photoSrc:
        "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg",
    },
  ];

  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (destination) => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options },
    });
    navigate("/hotels", {
      state: { destination, dates, options },
    });
  };
  return (
    <div className={styles.featured}>
      {loading ? (
        "Loading, please wait"
      ) : (
        <>
          {featuredData.map((item, index) => {
            return (
              <div
                className={styles.featuredItem}
                onClick={() => handleSearch(item.name)}
              >
                <img
                  className={styles.image}
                  src={item.photoSrc}
                  alt="featured"
                />
                <div className={styles.title}>
                  <p className={styles.place}>{item.name}</p>
                  <p className={styles.properties}>{data[index]} properties</p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Featured;
