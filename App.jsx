import './App.css'
import Proyectos from './paginasFijas/Proyectos'
import Inicio from './paginasFijas/INICIO'
import SobreMi from './paginasFijas/Sobremi'
import Contacto from './paginasFijas/Contacto'
import NavBar from './paginasFijas/navBar'
//----



function App() {

  return (
    <>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <Proyectos></Proyectos>
      <SobreMi></SobreMi>
      <Contacto></Contacto>
    </>
  )
}

export default App
