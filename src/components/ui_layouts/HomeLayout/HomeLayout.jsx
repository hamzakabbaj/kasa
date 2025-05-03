import HeroBanner from "../../ui_sections/HeroBanner/HeroBanner";
import GalleryGrid from "../../ui_sections/GalleryGrid/GalleryGrid";

function HomeLayout() {
  return (
    <div>
      <HeroBanner />
      <GalleryGrid logements={[]} />
    </div>
  );
}

export default HomeLayout;
