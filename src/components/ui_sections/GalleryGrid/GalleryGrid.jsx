import LocationCard from "@/components/ui_molecules/LocationCard/LocationCard";
import styles from "./GalleryGrid.module.scss";

function GalleryGrid({ logements, isLoading, error }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!logements || logements.length === 0) {
    return <div>No logements found</div>;
  }

  return (
    <div className={styles.galleryGrid}>
      {logements.map((logement) => (
        <LocationCard
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
          id={logement.id}
        />
      ))}
    </div>
  );
}

export default GalleryGrid;
