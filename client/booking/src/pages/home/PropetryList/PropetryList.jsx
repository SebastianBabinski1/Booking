import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import styles from "./PropetryList.module.scss";

const PropetryList = () => {
  const { data, loading } = useFetch("/api/hotels/countByType");

  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o=&hp=1",
    "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://trekbaron.com/wp-content/uploads/2020/07/types-of-resorts-July282020-1-min.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/211169608.jpg?k=5ca9f33378e03697af3e2afd3ffca74272c35e71a9dc4cfbb2d9d31fe51ab50c&o=&hp=1",
    "https://www-vacasa.imgix.net/30217_Morgantown_GA_cabin.jpg?auto=format%2Ccompress&fit=crop&h=1200&ixlib=python-3.2.0&q=45&w=1600&s=0da07cb45cfd3997e683b2e49c1f2ffa",
  ];

  const { dispatch } = useContext(SearchContext);
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
  const destination = "";
  const handleSearch = (type) => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options, type },
    });
    navigate("/hotels", { state: { destination, dates, options, type } });
  };

  return (
    <div className={styles.propertyList}>
      {loading ? (
        "Loading, please wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div
                className={styles.propertyListItem}
                key={i}
                onClick={() => handleSearch(data[i]?.type)}
              >
                <img src={img} alt="gizycko" className={styles.image} />
                <div>
                  <p className={styles.title}>{data[i]?.type}</p>
                  <p className={styles.desc}>
                    {data[i]?.count} {data[i]?.type}s
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
