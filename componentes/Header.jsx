import React from "react";
import "../CSScomponentes/navBar.css";
import { NavBar } from "./NavBar"; // Asegúrate de proporcionar la ruta correcta al archivo NavBar

function Header() {
  const navItems = ["Inicio", "Acerca de", "Servicios", "Contacto"];
  const activeMobile = false; // Define el estado de la barra de navegación móvil
  const handleMenu = () => {};

  return (
    <div>
      <NavBar
        navItems={navItems}
        activeMovile={activeMobile}
        handleMenu={handleMenu}
      />

      <div className="content">
        <h1>Bienvenido a mi sitio</h1>
        <p>Este es el contenido principal de mi página.</p>
      </div>
    </div>
  );
}

export default Header;
