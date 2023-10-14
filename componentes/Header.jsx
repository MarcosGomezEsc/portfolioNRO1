import "../CSScomponentes/navBar.css";
import React, { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div>
      {isScrolled && (
        <nav className="navegadorHeader">
          <ul className="NavUl">
            <li className="liA">
              <a href="#Inicio">Inicio</a>
            </li>
            <li className="liA">
              <a href="#Proyecto">Proyectos</a>
            </li>
            <li className="liA">
              <a href="#SobreMi">Sobre Mi</a>
            </li>
            <li className="liA">
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
