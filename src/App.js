import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Realisation from "./pages/Realisation";
import Atelier from "./pages/Atelier";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <Route path="/" element={<Home />} /> */
}
