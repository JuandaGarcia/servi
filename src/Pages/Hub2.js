import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Hub2 = () => {
    return(
        <div className="contenedor-hub2">

            <div className="contenedor-izquierdo-hub2">
                <div className="servi_y_buscar">
                    <h1>Servi</h1>
                    <div>
                        <input className="buscar-servicio" placeholder="buscar servicios" required type="search" />
                    </div>
                </div>

                <div className="botenes-azules">
                    <Link to="/">
						<div className="btn-azul">Crear un servicio</div>
					</Link>
                    <Link to="/">
						<div className="btn-azul">Mis servicios</div>
					</Link>
                </div>
            </div>

            <div className="contenedor-derecho-hub2">
                <div className="nombre-foto-hubAzul">
                    <h2>Nairo Quintana</h2>
                    <img src="http://web.juandagarcia.com/img/nairo.jpg" alt="" />
                </div>

                <div className="imagen-contenedor-azul-hub2">
                    <img src="http://web.juandagarcia.com/img/corre.png" alt="" />
                </div>

                <div className="boton-pedidos">
                    <Link Link to="/">
						<div className="btn-pedidos-azul">Pedidos</div>
					</Link>
                </div>

                <div className="hora-azul">
                    <h2>4:25 PM</h2>
                </div>
            </div>














        </div>
    )
}

export default Hub2;