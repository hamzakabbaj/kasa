import { Link } from "react-router-dom";
import styles from "./NavLink.module.scss";
import PropTypes from "prop-types";
function NavLink({ text, href }) {
  return (
    <div className={styles.navLink}>
      <Link to={href} className={styles.navLink__link}>
        {text}
      </Link>
    </div>
  );
}

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavLink;
