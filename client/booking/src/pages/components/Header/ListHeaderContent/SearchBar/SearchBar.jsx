import { useContext, useState } from "react";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../../../context/SearchContext";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchItem}>
        <FontAwesomeIcon icon={faBed} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Where are you going?"
          className={styles.searchInput}
          onChange={(e) => setDestination(e.target.value)}
        ></input>
      </div>
      <div className={styles.searchItem}>
        <FontAwesomeIcon icon={faCalendarDays} className={styles.searchIcon} />
        <span
          onClick={() => setOpenDate(!openDate)}
          className={styles.searchText}
        >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
          dates[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            minDate={new Date()}
            className={styles.date}
          />
        )}
      </div>
      <div className={styles.searchItem}>
        <FontAwesomeIcon icon={faPerson} className={styles.searchIcon} />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className={styles.searchText}
        >
          {`${options.adult} adult · ${options.children} children · ${options.room} room`}
        </span>
        {openOptions && (
          <div className={styles.options}>
            <div className={styles.optionItem}>
              <span className={styles.optionText}>Adult</span>
              <div className={styles.optionCounter}>
                <button
                  disabled={options.adult <= 1}
                  className={styles.optionCounterButton}
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className={styles.optionCounterNumber}>
                  {options.adult}
                </span>
                <button
                  className={styles.optionCounterButton}
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.optionItem}>
              <span className={styles.optionText}>Children</span>
              <div className={styles.optionCounter}>
                <button
                  disabled={options.children <= 0}
                  className={styles.optionCounterButton}
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className={styles.optionCounterNumber}>
                  {options.children}
                </span>
                <button
                  className={styles.optionCounterButton}
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.optionItem}>
              <span className={styles.optionText}>Room</span>
              <div className={styles.optionCounter}>
                <button
                  disabled={options.room <= 1}
                  className={styles.optionCounterButton}
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className={styles.optionCounterNumber}>
                  {options.room}
                </span>
                <button
                  className={styles.optionCounterButton}
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.searchItem}>
        <button className={styles.headerButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
