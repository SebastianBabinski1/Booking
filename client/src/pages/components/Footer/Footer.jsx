import styles from "./Footer.module.scss";
import { footerData } from "./footerData";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLists}>
        {footerData.map((column, columnIndex) => (
          <ul className={styles.footerList} key={columnIndex}>
            {column.map((item, itemIndex) => (
              <li
                className={styles.listItem}
                key={`${columnIndex} ${itemIndex}`}
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className={styles.copyrightText}>Copyright © 2022 SBbooking</p>
    </div>
  );
};

export default Footer;
