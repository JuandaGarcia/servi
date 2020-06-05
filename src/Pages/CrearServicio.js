import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const CrearServicio = () => {
    return(
        <div className="crear-servicio">
            <div className="contenedor-izquierdo">
                <h1>Servi</h1>
                <h3>4: 25 PM </h3>
                <div className="raya-home"></div>
            </div>

            <div className="contenedor-derecho">
                <div className="texto-boton">
                    <h1>Crear un servicio</h1>
                    <Link to="/">
					    <div className="circulo-exit">
					 	    <img src="http://web.juandagarcia.com/img/x.svg" alt="X" />
				        </div>
				    </Link>
                </div>
                
                <div className="formulario-crear-servicio">
                    <div>
                        <input className="input-crear-servicio" placeholder="Nombre del servicio" required type="text" />
                    </div>
                    <div>
                        <input className="input-crear-servicio" placeholder="Precio del servicio" required type="text" />
                    </div>
                    <div>
                        <input className="input-crear-servicio" placeholder="Categoria servicio" required type="number" />
                    </div>
                    <div>
                        <input className="input-crear-servicio" placeholder="Precio del servicio" required type="text" />
                    </div>
                    <div>
                        <input className="input-crear-servicio-grande" placeholder="Descripcion del servicio" required type="text" />
                    </div>
                </div>

                <div className="boton-crear-servicio">
                    <Link to="/">
                        <div className="btn-servicio">Crear Servicio</div>
                    </Link>
                </div>
            </div>
            
            
        </div>
    )
}

export default CrearServicio;