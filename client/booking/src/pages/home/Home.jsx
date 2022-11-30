import styles from "./Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Featured from "./Featured/Featured";
import Header from "../components/Header/Header";
import PropetryList from "./PropetryList/PropetryList";
import LovedProperties from "./LovedProperties/LovedProperties";
import MailList from "./MailList/MailList";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Header />
      <div className={styles.homeContainer}>
        <Featured />
        <p className={styles.homeTitle}>Browse by property type</p>
        <PropetryList />
        <p className={styles.homeTitle}>Homes guests love</p>
        <LovedProperties />
        {/* <MailList /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
