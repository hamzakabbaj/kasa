import NavLink from "@/components/ui_atoms/NavLink/NavLink";
import styles from "./NavBar.module.scss";
function NavBar() {
  return (
    <div className={styles.navBar}>
      <NavLink text="Accueil" href="/" />
      <NavLink text="A Propos" href="/a-propos" />
    </div>
  );
}

export default NavBar;
