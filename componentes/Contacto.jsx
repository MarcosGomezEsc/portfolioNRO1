import "../CSScomponentes/footer.css";

export default function Contacto() {
  return (
    <footer className="neumorphic-footer" id="Contacto">
      <h2 className="h2footer">CONTACTO</h2>
      <div className="contact-item">
        <span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marcos-julián-gomez-escobar-/"
          >
            LinkedIn
          </a>
          <img
            src="https://static.thenounproject.com/png/2280972-200.png"
            alt=""
          />
        </span>
      </div>
      <div className="contact-item">
        <span>
          <a target="_blank" href="https://github.com/MarcosGomezEsc">
            GitHub
          </a>
          <img
            src="https://static.thenounproject.com/png/2280972-200.png"
            alt=""
          />
        </span>
      </div>
      <div className="contact-item">
        <span>
          <a target="_blank" href="https://wa.me/1146738416">
            Teléfono
          </a>
          <img
            src="https://static.thenounproject.com/png/2280972-200.png"
            alt=""
          />
        </span>
      </div>
      <div className="contact-item">
        <span>
          <a target="_blank" href="https://drive.google.com/drive/u/1/my-drive">
            Descargar CV
          </a>
          <img
            src="https://static.thenounproject.com/png/2280972-200.png"
            alt=""
          />
        </span>
      </div>
    </footer>
  );
}
