import "../CSScomponentes/sobremi.css";

export default function SobreMi() {
  return (
    <section className="sectionSobreMi" id="SobreMi">
      <article className="cont_text">
        <h2>¿Nos conocemos?</h2>
        <p>
          “El asombro es recuperar los detalles” Mi motor en la vida es la
          búsqueda constante de conocimiento, el deseo de saber más, porque al
          final, la capacidad de asombrarse se encuentra en las cosas que a
          menudo damos por sentadas, pero que siempre ofrecen algo más. Después
          de terminar la escuela secundaria, tenía un objetivo claro. Tras
          investigar y trabajar arduamente para adquirir las herramientas
          necesarias y prepararme, tuve la oportunidad de unirme como becario al
          programa de Diplomatura FullStack de la Fundación Empujar en
          colaboración con la UTN.
        </p>
        <p className="last">
          Durante este programa, no solo adquirimos habilidades técnicas y
          destrezas lógicas en diversos lenguajes de programación, sino que
          también fortalecimos nuestras habilidades blandas, como la
          comunicación y el trabajo en equipo. En la actualidad, tengo un firme
          propósito: crecer profesionalmente como desarrollador y resolver los
          desafíos que, aunque a menudo parezcan mágicos, en realidad se basan
          en la profesión y la dedicación continua."
        </p>
      </article>
      <div className="imgPerfil">
        <img src="" alt="" />
      </div>
      <div className="herramientas">
        <h3>HERRAMIENTAS</h3>
        <div class="contenedor">
          <div class="columna">
            <div class="tarjeta">
              <img src="html.jpg" alt="HTML" />
            </div>
            <div class="tarjeta">
              <img src="css.jpg" alt="CSS" />
            </div>
            <div class="tarjeta">
              <img src="js.jpg" alt="JavaScript" />
            </div>
            <div class="tarjeta">
              <img src="bootstrap.jpg" alt="Bootstrap" />
            </div>
          </div>
          <div class="columna">
            <div class="tarjeta">
              <img src="react.jpg" alt="React" />
            </div>
            <div class="tarjeta">
              <img src="typescript.jpg" alt="TypeScript" />
            </div>
            <div class="tarjeta">
              <img src="sql.jpg" alt="SQL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
