import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [navstyle, setNavstyle] = useState("");
  const resetmenu = () => {
    setNavstyle("");
    document.removeEventListener("click", resetmenu);
  };

  return (
    <div className="navigation">
      <div id="side-bar">
        <div
          className="toggle-btn"
          id="btn"
          onClick={() => {
            setNavstyle("block");

            setTimeout(() => {
              document.addEventListener("click", resetmenu);
            }, 50);
          }}
        >
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </div>
      </div>
      <ul style={{ display: navstyle }}>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/realisation"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Nos Réalisations</li>
        </NavLink>
        <NavLink
          to="/atelier"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Qui sommes nous?</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
