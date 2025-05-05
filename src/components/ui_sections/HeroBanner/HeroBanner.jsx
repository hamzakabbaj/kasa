import styles from "./HeroBanner.module.scss";
import PropTypes from "prop-types";

function HeroBanner({ title, image, opacity = 0.6 }) {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.titleWrapper}>
        <h1>{title}</h1>
      </div>
      <div
        className={styles.imageWrapper}
        style={{ "--overlay-opacity": opacity }}
      >
        <img src={image} alt="Hero Banner" />
      </div>
    </div>
  );
}

HeroBanner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  opacity: PropTypes.number,
};

export default HeroBanner;
