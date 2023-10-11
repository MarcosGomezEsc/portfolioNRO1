import "./App.css";
// import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer";
// import { Inicio } from "./componentes/Inicio";
import Inicio from "./componentes/Inicio_Home";
import Proyectos from "./componentes/Proyectos";
import Sobremi from "./componentes/Sobremi";
import Contacto from "./componentes/Contacto";

function App() {
  return (
    <>
      {/* <Header /> */}

      <main>
        <Inicio />
        <Proyectos />
        <Sobremi />
        <Contacto />
      </main>

      <Footer />
    </>
  );
}

export default App;
