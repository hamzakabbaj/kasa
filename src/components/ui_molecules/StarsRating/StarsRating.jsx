import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./StarsRating.module.scss";
import PropTypes from "prop-types";
function StarsRating({ rating }) {
  return (
    <div className={styles.container}>
      {Array.from({ length: rating }).map((_, index) => (
        <FontAwesomeIcon
          icon={faStar}
          key={index}
          className={styles.container__star}
        />
      ))}

      {Array.from({ length: 5 - rating }).map((_, index) => (
        <FontAwesomeIcon
          icon={faStar}
          key={index}
          className={
            styles.container__star + " " + styles.container__star__empty
          }
        />
      ))}
    </div>
  );
}

StarsRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarsRating;
