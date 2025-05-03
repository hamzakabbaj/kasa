import Header from "../../ui_sections/Header/Header";
import Footer from "../../ui_sections/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
