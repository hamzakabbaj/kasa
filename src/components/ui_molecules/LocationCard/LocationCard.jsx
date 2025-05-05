import styles from "./LocationCard.module.scss";
import { useNavigate } from "react-router-dom";
function LocationCard({ title, cover, id }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.locationCard}
      onClick={() => navigate(`/logement/${id}`)}
    >
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default LocationCard;
