import profile_mjg from "../img/profile_mjg.png";
import "../CSScomponentes/sobremi.css";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import ts from "../img/ts.png";
import sql from "../img/sql.png";
import nodejs from "../img/nodejs.png";

export default function SobreMi() {
  return (
    <section className="sectionSobreMi" id="SobreMi">
      <article className="cont_text">
        <div className="imgH2NosConocemos">
          <h2>¿Nos conocemos?</h2>
          <p>
            “El asombro es recuperar los detalles” Mi motor en la vida es la
            búsqueda constante de conocimiento, el deseo de saber más, porque al
            final, la capacidad de asombrarse se encuentra en las cosas que a
            menudo damos por sentadas, pero que siempre ofrecen algo más.
            Después de terminar la escuela secundaria, tenía un objetivo claro.
            Tras investigar y trabajar arduamente para adquirir las herramientas
            necesarias y prepararme, tuve la oportunidad de unirme como becario
            al programa de Diplomatura FullStack de la Fundación Empujar en
            colaboración con la UTN.
          </p>
          <p className="last">
            Durante este programa, no solo adquirimos habilidades técnicas y
            destrezas lógicas en diversos lenguajes de programación, sino que
            también fortalecimos nuestras habilidades blandas, como la
            comunicación y el trabajo en equipo. En la actualidad, tengo un
            firme propósito: crecer profesionalmente como desarrollador y
            resolver los desafíos que, aunque a menudo parezcan mágicos, en
            realidad se basan en la profesión y la dedicación continua."
          </p>
        </div>
        <div className="imgPerfil">
          <img src={profile_mjg} alt="perfil Marcos" />
          <span className="btn_descargar">
            <button> DESCARGAR CV</button>
          </span>
        </div>
      </article>
      <div className="herramientas">
        <h3>HERRAMIENTAS</h3>
        <div className="contenedor">
          <div className="columna">
            <div className="tarjeta">
              <img src={html} alt="HTML" />
            </div>
            <div className="tarjeta">
              <img src={css} alt="CSS" />
            </div>
            <div className="tarjeta">
              <img src={js} alt="JavaScript" />
            </div>
            <div className="tarjeta">
              <img src={react} alt="React" />
            </div>
          </div>
          <div className="columna">
            <div className="tarjeta">
              <img src={ts} alt="Typescript" />
            </div>
            <div className="tarjeta">
              <img src={sql} alt="SQL" />
            </div>
            <div className="tarjeta">
              <img src={nodejs} alt="Node Js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
