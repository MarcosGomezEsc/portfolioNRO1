import '../CSScomponentes/Inicio.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import menuHipercube from '../img/menuHipercube.png'
import profile_mg from '../img/profile_mg.png'
import Menu from '../componentes/menu'

export default function Inicio(){

    const [menuVisible, setMenuVisible] = useState(false);
    const [imagenGrande, setImagenGrande] = useState(false);


    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
    
    const toggleIMG = () => {
        setImagenGrande(!imagenGrande)
        console.log(menuVisible)
    }

    return (
        <>
            
            <section className="sectionInit">


               <div className="contImg">
                    <div className="inmgPerfil">
                        <img src={profile_mg} alt="foto Perfil" onClick={toggleIMG}/>

                    </div>
                    <div className="menuHiperCube">
                        <img src= {menuHipercube} alt="imagen del cubo" onClick={toggleMenu}/>
                    
                      {menuVisible && <Menu />}
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

                <div className="ruteo">
                    <a href="#">Proyectos</a>
                    <a href="#">Sobre mi</a>
                    <a href="#">Contacto</a>
                </div>
            
                
            </section>
        </>

    )
}