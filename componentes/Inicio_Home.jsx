import "../CSScomponentes/inicio.css";
import profile_mjg from "../img/profile_mjg.png";

export default function Inicio() {
  return (
    <section id="Inicio" className="sectionInit">
      <div className="datos">
        <div className="contImg">
          <div className="inmgPerfil">
            <img src={profile_mjg} alt="foto Perfil" />
          </div>
        </div>
        <div className="contenedorTexto">
          <div className="textoNombre">
            <h1>Marcos J. Gomez E.</h1>
          </div>
          <div className="textoMarketing">
            <p>Todo lo que te puedo ofrecer, a un click de distancia</p>
          </div>
        </div>
      </div>

      <nav className="ruteo">
        <a href="#Inicio">Inicio</a>
        <a href="#Proyecto">Proyectos</a>
        <a href="#SobreMi">Sobre mi</a>
        <a href="#Contacto">Contacto</a>
      </nav>
    </section>
  );
}
