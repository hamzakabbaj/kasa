import styles from "./FicheLogementLayout.module.scss";
import DropDown from "@/components/ui_molecules/DropDown/DropDown";
import { useFetchLogement } from "@/hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarsRating from "@/components/ui_molecules/StarsRating/StarsRating";
import NotFound from "@/pages/NotFound.jsx";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
function FicheLogementLayout() {
  const { id } = useParams();
  const { logement } = useFetchLogement(id);
  if (!logement) {
    return <NotFound />;
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentImage, setCurrentImage] = useState(logement.pictures[0]);
  console.log(logement);

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(logement.pictures.length - 1);
    } else if (currentIndex > logement.pictures.length - 1) {
      setCurrentIndex(0);
    }
    setCurrentImage(logement.pictures[currentIndex]);
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.container__carrousel}>
        <img src={currentImage} alt={logement.title} />
        {logement.pictures.length > 1 && (
          <div className={styles.container__carrousel__buttons}>
            <FontAwesomeIcon
              className={styles.container__carrousel__buttons__button}
              icon={faChevronLeft}
              onClick={() => setCurrentIndex(currentIndex - 1)}
            />
            <FontAwesomeIcon
              className={styles.container__carrousel__buttons__button}
              icon={faChevronRight}
              onClick={() => setCurrentIndex(currentIndex + 1)}
            />
          </div>
        )}
      </div>
      <div className={styles.container__info}>
        <div className={styles.container__info__base}>
          <div className={styles.container__info__base__title}>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className={styles.container__info__base__tags}>
            {logement.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
        <div className={styles.container__info__host}>
          <div className={styles.container__info__host__identity}>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className={styles.container__info__host__rating}>
            <StarsRating rating={logement.rating} />
          </div>
        </div>
      </div>

      <div className={styles.container__dropdowns}>
        <div className={styles.container__dropdowns__description}>
          <DropDown
            title="Description"
            content={logement.description}
            content_list={[]}
            size="medium"
          />
        </div>
        <div className={styles.container__dropdowns__equipments}>
          <DropDown
            title="Equipements"
            content=""
            content_list={logement.equipments}
            size="medium"
          />
        </div>
      </div>
    </div>
  );
}

export default FicheLogementLayout;
