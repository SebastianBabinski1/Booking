import styles from "./MailList.module.scss";

const MailList = () => {
  return (
    <div className={styles.mail}>
      <p className={styles.title}>Save time, save money!</p>
      <p className={styles.desc}>
        Sign up and we'll send the best deals to you
      </p>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Your Email" className={styles.input} />
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
