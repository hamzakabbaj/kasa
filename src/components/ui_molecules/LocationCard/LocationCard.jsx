import styles from "./LocationCard.module.scss";

function LocationCard({ title, cover }) {
  return (
    <div className={styles.locationCard}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default LocationCard;
