import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import styles from "./VerticallyCenteredModal.module.scss";

export const VerticallyCenteredModal = (props) => {
  const handleMove = (dir) => {
    let newSlideIndex;

    if (dir === "l") {
      newSlideIndex = props.slideIndex === 0 ? 5 : props.slideIndex - 1;
    } else {
      newSlideIndex = props.slideIndex === 5 ? 0 : props.slideIndex + 1;
    }

    props.setSlideIndex(newSlideIndex);
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
            src={props.data.photos[props.slideIndex]}
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
};
