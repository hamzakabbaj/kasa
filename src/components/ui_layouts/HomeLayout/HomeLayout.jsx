import HeroBanner from "../../ui_sections/HeroBanner/HeroBanner";
import GalleryGrid from "../../ui_sections/GalleryGrid/GalleryGrid";
import heroBanner from "@/assets/images/hero/hero-banner.jpg";

function HomeLayout({ logements, isLoading, error }) {
  return (
    <div>
      <HeroBanner title="Chez vous, partout et ailleurs" image={heroBanner} />
      <GalleryGrid logements={logements} isLoading={isLoading} error={error} />
    </div>
  );
}

export default HomeLayout;
