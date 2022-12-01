import styles from "./List.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "./SearchItem/SearchItem";
import useFetch from "../hooks/useFetch.js";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [type, setType] = useState(location.state.type);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const fetchContent = () => {
    if (destination !== "") {
      return `city=${destination}&min=${min || 0}&max=${max || 999}`;
    } else if (destination === "" && type !== undefined) {
      return `type=${type}&min=${min || 0}&max=${max || 999}`;
    } else {
      return `min=${min || 0}&max=${max || 999}`;
    }
  };

  const { data, loading, error, reFetch } = useFetch(
    `api/hotels?${fetchContent()}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <p className={styles.title}>Search</p>
            <div className={styles.item}>
              <label className={styles.itemLabel}>Destination</label>
              <input
                className={styles.itemInput}
                placeholder={destination}
                type="text"
              />
            </div>
            <div className={styles.item}>
              <label className={styles.itemLabel}>Check-in Date</label>
              <span
                className={styles.itemSpan}
                onClick={() => setOpenDate(!openDate)}
              >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                dates[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                ></DateRange>
              )}
            </div>
            <div className={styles.item}>
              <label className={styles.itemLabel}>Options</label>
              <div className={styles.optionsWrapper}>
                <div className={styles.option}>
                  <span className={styles.optionText}>Min price per night</span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className={styles.optionInput}
                  />
                </div>
                <div className={styles.option}>
                  <span className={styles.optionText}>Max price per night</span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className={styles.optionInput}
                  />
                </div>
                <div className={styles.option}>
                  <span className={styles.optionText}>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.optionInput}
                    placeholder={options.adult}
                  />
                </div>
                <div className={styles.option}>
                  <span className={styles.optionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={styles.optionInput}
                    placeholder={options.children}
                  />
                </div>
                <div className={styles.option}>
                  <span className={styles.optionText}>Room</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.optionInput}
                    placeholder={options.room}
                  />
                </div>
                <button
                  className={styles.optionsSearchButton}
                  onClick={handleClick}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className={styles.result}>
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
