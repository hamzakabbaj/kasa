import { Link } from "react-router-dom";
import styles from "./NavLink.module.scss";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function NavLink({ text, href }) {
  const active = useLocation().pathname === href;

  return (
    <div className={styles.navLink}>
      <Link
        to={href}
        className={`${styles.navLink__link} ${active ? styles.active : ""}`}
      >
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
