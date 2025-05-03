import Text from "@/components/ui_atoms/Text/Text";
import Logo from "@/components/ui_atoms/Logo/Logo";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <Logo bgColor="dark" size="small" />
      <p className={styles.footer__text}>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
