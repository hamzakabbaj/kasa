import Image from "@/components/ui_atoms/Image/Image";
import heroBanner from "@/assets/images/hero/hero-banner.jpg";
import styles from "./HeroBanner.module.scss";

function HeroBanner() {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.titleWrapper}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={styles.imageWrapper}>
        <img src={heroBanner} alt="Hero Banner" />
      </div>
    </div>
  );
}

export default HeroBanner;
