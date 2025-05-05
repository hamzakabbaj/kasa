import Header from "../../ui_sections/Header/Header";
import Footer from "../../ui_sections/Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
