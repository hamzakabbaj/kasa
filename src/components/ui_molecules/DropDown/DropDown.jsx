import styles from "./DropDown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useState } from "react";
function DropDown({ title, content_list, content, size }) {
  const [isOpen, setIsOpen] = useState(false);

  // Validate that size is one of the allowed values
  if (size !== "small" && size !== "medium" && size !== "large") {
    console.warn(
      `Invalid size prop "${size}" for DropDown component. Using default "small" instead.`
    );
    size = "small";
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.dropDown} ${styles[size]}`}>
      <div className={styles.dropDown__button}>
        <h2 className={styles.dropDown__button__title}>{title}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={styles.dropDown__button__icon}
          onClick={handleClick}
        />
      </div>
      <div
        className={`${styles.dropDown__content} ${
          isOpen ? styles.dropDown__content__open : ""
        }`}
      >
        <br />
        <br />
        <br />

        {content_list.map((content, index) => (
          <p key={index} className={styles.dropDown__content__text}>
            {content}
          </p>
        ))}

        {content && <p className={styles.dropDown__content__text}>{content}</p>}
      </div>
    </div>
  );
}

DropDown.propTypes = {
  title: PropTypes.string,
  content_list: PropTypes.array,
  size: PropTypes.string,
};

DropDown.defaultProps = {
  title: "Dropdown",
  content_list: [],
  size: "small",
};

export default DropDown;
