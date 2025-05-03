import NavBar from "@/components/ui_molecules/NavBar/NavBar";
import Logo from "@/components/ui_atoms/Logo/Logo";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <Logo bgColor="white" size="large" />
      <NavBar />
    </div>
  );
}

export default Header;
