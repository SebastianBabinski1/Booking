import styles from "./Header.module.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerItems } from "./headerItems";
import ListHeaderContent from "./ListHeaderContent/ListHeaderContent";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const PopoverBottom = ({ item }) => {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement={"bottom"}
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Body>{item.description}</Popover.Body>
          </Popover>
        }
      >
        <Button variant="outline-light">
          <FontAwesomeIcon icon={item.icon} />
          <span className={styles.buttonText}>{item.text}</span>
        </Button>
      </OverlayTrigger>
    </>
  );
};

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
            <div key={index} className={styles.item}>
              <PopoverBottom item={item} />
            </div>
          ))}
        </div>
        {type !== "list" && <ListHeaderContent />}
      </div>
    </div>
  );
};

export default Header;
