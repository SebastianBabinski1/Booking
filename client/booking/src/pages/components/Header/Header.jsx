import styles from "./Header.module.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerItems } from "./headerItems";
import ListHeaderContent from "./ListHeaderContent/ListHeaderContent";

const Header = ({ type }) => {
  return (
    <div className={styles.header}>
      <div
        className={`${styles.headerContainer} ${
          type === "list" && styles.listMode
        }`}
      >
        <div className={styles.itemsContainer}>
          {headerItems.map((item, index) => (
            <div className={`${styles.item} ${index === 0 && styles.active}`}>
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        {type !== "list" && <ListHeaderContent />}
      </div>
    </div>
  );
};

export default Header;
