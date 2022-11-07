import styles from "./Hotel.module.scss";
import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Header/Header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer.jsx";
import MailList from "../home/MailList/MailList.jsx";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/278258880.jpg?k=50cf1cdce5a9f9d0bb38948542d30be5f26a440215fa8f5a3449983278ec6bf6&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/368493395.jpg?k=daa5c59476c501c91354233c9af131698cd44f0eca13acc2795af7fc0beef731&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/266805141.jpg?k=41077195de2db580ab2346a93fbd17f58017428270784d7223ef81a6ba199d6f&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/298580245.jpg?k=f7b8eae9537d1a2758011da902ce01468c57c346d1d0d7a7f49e2e45d7a11802&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/298584148.jpg?k=830b4e0bf66eadc2b8d405d7b5e7504034dfcad83ee21bc03f7316ad1557b00e&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/319625407.jpg?k=7e730df3e6130d6772221be5642dcc3e2272801e011c70ec85245382750506cb&o=&hp=1",
    },
  ];

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
              src={photos[slideIndex].src}
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

  return (
    <div className={styles.hotel}>
      <Navbar />
      <Header type="list" />

      <MyVerticallyCenteredModal show={open} onHide={() => setOpen(false)} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <button className={styles.bookNow}>Reserve or book now!</button>
          <p className={styles.title}>Hotel Róża Wiatrów</p>
          <div className={styles.address}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>ul. Zbyszka z Bogdańca 420</span>
          </div>
          <span className={styles.distance}>
            Awesome location - 200m from center
          </span>
          <span className={styles.priceHighlight}>
            Book a stay over $90 at this property and get a free taxi
          </span>
          <div className={styles.images}>
            {photos.map((item, index) => (
              <div className={styles.imgWrapper}>
                <img
                  onClick={() => {
                    setSlideIndex(index);
                    setOpen(true);
                  }}
                  src={item.src}
                  alt="hotel room"
                  className={styles.img}
                />
              </div>
            ))}
          </div>
          <div className={styles.details}>
            <div className={styles.detailsTexts}>
              <p className={styles.title}>Come and see how you can relax</p>
              <p className={styles.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate et repellat eveniet totam quisquam! Adipisci iure
                harum ullam sint perspiciatis possimus maiores quisquam vitae,
                natus, ad nisi obcaecati velit saepe? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Explicabo tenetur sint quibusdam,
                id at et error! Facilis totam commodi tempora itaque maxime.
                Perferendis, obcaecati ea cumque quo aut reiciendis recusandae!
              </p>
            </div>
            <div className={styles.rightBar}>
              <p className={styles.rightBarTitle}>
                Perfect for a 7-night stay!
              </p>
              <span className={styles.rightBarDesc}>
                Located in the middle of Gdańsk, this offer has great location
                and excellent score!
              </span>
              <p className={styles.rightBarPrice}>
                <b>$90</b> (per night)
              </p>
              <button className={styles.rightBarButton}>
                Reserve or book now!
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
