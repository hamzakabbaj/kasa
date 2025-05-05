import HeroBanner from "@/components/ui_sections/HeroBanner/HeroBanner";
import heroBanner from "@/assets/images/hero/hero-banner-2.png";
import DropDown from "@/components/ui_molecules/DropDown/DropDown";
import styles from "./AproposLayout.module.scss";
function AProposLayout() {
  return (
    <div className={styles.container}>
      <HeroBanner
        title=""
        image={heroBanner}
        opacity={0.3}
        className={styles.heroBanner}
      />
      <div className={styles.dropDownContainer}>
        <DropDown
          title="Fiabilité"
          content_list={[]}
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          size="large"
        />
        <DropDown
          title="Respect"
          content_list={[]}
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          size="large"
        />
        <DropDown
          title="Service"
          content_list={[]}
          content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          size="large"
        />
        <DropDown
          title="Sécurité"
          content_list={[]}
          size="large"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default AProposLayout;
