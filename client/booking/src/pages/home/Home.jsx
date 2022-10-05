import styles from "./Home.module.scss";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
