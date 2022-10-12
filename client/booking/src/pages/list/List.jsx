import styles from "./List.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

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
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                ></DateRange>
              )}
            </div>
            <div className={styles.item}>
              <label className={styles.itemLabel}>Options</label>.
              <div className={styles.itemOption}>
                <span className={styles.optionText}>Min price per night</span>
                <input type="number" className={styles.itemInput} />
              </div>
              <div className={styles.itemOption}>
                <span className={styles.optionText}>Max price per night</span>
                <input type="number" className={styles.itemInput} />
              </div>
              <div className={styles.itemOption}>
                <span className={styles.optionText}>Adult</span>
                <input
                  type="number"
                  className={styles.itemInput}
                  placeholder={options.adult}
                />
              </div>
              <div className={styles.itemOption}>
                <span className={styles.optionText}>Children</span>
                <input
                  type="number"
                  className={styles.itemInput}
                  placeholder={options.children}
                />
              </div>
              <div className={styles.itemOption}>
                <span className={styles.optionText}>Room</span>
                <input
                  type="number"
                  className={styles.itemInput}
                  placeholder={options.room}
                />
              </div>
            </div>
          </div>
          <div className={styles.result}></div>
        </div>
      </div>
    </div>
  );
};

export default List;
