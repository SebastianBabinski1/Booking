import styles from "./Hotel.module.scss";
import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Header/Header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer.jsx";
import MailList from "../home/MailList/MailList.jsx";
import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

import Modal from "react-bootstrap/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../components/Reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading } = useFetch(`/api/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("id: ", id);
  console.log("dates in Hotel comp: ", dates);
  console.log("data in Hotel comp: ", data);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  function MyVerticallyCenteredModal(props) {
    const handleMove = (dir) => {
      let newSlideIndex;

      if (dir === "l") {
        newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
      } else {
        newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
      }

      setSlideIndex(newSlideIndex);
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="xl"
        animation={false}
      >
        <Modal.Header closeButton />
        <Modal.Body className={styles.sliderContent}>
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className={styles.arrow}
            onClick={() => handleMove("l")}
          />
          <div className={styles.sliderWrapper}>
            <img
              src={data.photos[slideIndex]}
              alt="slide"
              className={styles.sliderImg}
            />
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className={styles.arrow}
            onClick={() => handleMove("r")}
          />
        </Modal.Body>
      </Modal>
    );
  }

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.hotel}>
      <Navbar />
      <Header type="list" />

      {loading ? (
        "loading"
      ) : (
        <>
          <MyVerticallyCenteredModal
            show={open}
            onHide={() => setOpen(false)}
          />
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <button className={styles.bookNow}>Reserve or book now!</button>
              <p className={styles.title}>{data.name}</p>
              <div className={styles.address}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className={styles.distance}>
                Awesome location - {data.distance}m from center
              </span>
              <span className={styles.priceHighlight}>
                Book a stay over ${data.cheapestPrice} at this property and get
                a free taxi
              </span>
              <div className={styles.images}>
                {data.photos?.map((item, index) => (
                  <div className={styles.imgWrapper} key={index}>
                    <img
                      onClick={() => {
                        setSlideIndex(index);
                        setOpen(true);
                      }}
                      src={item}
                      alt="hotel room"
                      className={styles.img}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.details}>
                <div className={styles.detailsTexts}>
                  <p className={styles.title}>{data.title}</p>
                  <p className={styles.description}>{data.desc}</p>
                </div>
                <div className={styles.rightBar}>
                  <p className={styles.rightBarTitle}>
                    Perfect for a {days}-night stay!
                  </p>
                  <span className={styles.rightBarDesc}>
                    Located in the middle of Gdańsk, this offer has great
                    location and excellent score!
                  </span>
                  <p className={styles.rightBarPrice}>
                    <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                    nights)
                  </p>
                  <button
                    className={styles.rightBarButton}
                    onClick={handleClick}
                  >
                    Reserve or book now!
                  </button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>
        </>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
