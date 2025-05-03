import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import APropos from "./pages/APropos.jsx";
import FicheLogement from "./pages/FicheLogement.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/ui_layouts/MainLayout/MainLayout.jsx";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
