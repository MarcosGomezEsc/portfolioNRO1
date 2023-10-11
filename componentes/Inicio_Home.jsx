import "../CSScomponentes/inicio.css";
import profile_mg from "../img/profile_mg.png";

export default function Inicio() {
  return (
    <section className="sectionInit">
      <div className="datos">
        <div className="contImg">
          <div className="inmgPerfil">
            <img src={profile_mg} alt="foto Perfil" />
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

      <div className="ruteo">
        <a href="#Proyecto">Proyectos</a>
        <a href="#SobreMi">Sobre mi</a>
        <a href="#Contacto">Contacto</a>
      </div>
    </section>
  );
}
