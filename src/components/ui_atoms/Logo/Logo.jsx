import logoWhiteBg from "@/assets/images/logo/logo-white-bg.svg";
import logoDarkBg from "@/assets/images/logo/logo-dark-bg.svg";
import styles from "./Logo.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Logo({ bgColor, size }) {
  const navigate = useNavigate();
  const sizeClass = size === "small" ? styles.logo__small : styles.logo__large;

  return (
    <img
      src={bgColor === "white" ? logoWhiteBg : logoDarkBg}
      alt="Logo"
      className={sizeClass}
      onClick={() => navigate("/")}
    />
  );
}

Logo.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  bgColor: "white",
};

export default Logo;
