import "../CSScomponentes/Proyectos.css";

export default function Proyectos() {
  return (
    <section className="proyectos" id="Proyecto">
      <div className="tituloPro">
        <h3>Proyectos</h3>
      </div>
      <article>
        <div className="articleProyec">
          <h4 className="h2Pro">Proyecto 1</h4>
          <p className="pPro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi,
            temporibus officiis exercitationem neque, odio impedit, optio maxime
            qui odit magni
          </p>
        </div>
        <div className="imgPro">
          <img src="https://via.placeholder.com/100x100" alt="" />
        </div>
      </article>
      <article>
        <div className="articleProyec">
          <h4 className="h2Pro">Proyecto 2</h4>
          <p className="pPro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi,
            temporibus officiis exercitationem neque, odio impedit, optio maxime
            qui odit magni
          </p>
        </div>
        <div className="imgPro">
          <img src="https://via.placeholder.com/100x100" alt="" />
        </div>
      </article>
      <article>
        <div className="articleProyec">
          <h4 className="h2Pro">Proyecto 3</h4>
          <p className="pPro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi,
            temporibus officiis exercitationem neque, odio impedit, optio maxime
            qui odit magni quis
          </p>
        </div>
        <div className="imgPro">
          <img src="https://via.placeholder.com/100x100" alt="" />
        </div>
      </article>
    </section>
  );
}
