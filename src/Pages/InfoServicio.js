import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const InfoServicio = () => {
	return <div className="InfoServicio">
				<div className="contenedor-img-servicio">
					<h1>Servi</h1>
					<h3>4:25 PM </h3>
					<div className="raya-home"></div> 
				</div>

				<div className="informacion-detallada">
					<Link to="/">
					<div className="circulo-exit">
					 	<img src="http://web.juandagarcia.com/img/x.svg" alt="X" />
				    </div>
					</Link>
					 	<h1>Cerrajeria De Urgencia</h1>
					 	<p>La cerrajería es un oficio dedicado a la reparación y mantenimiento de cerraduras, candados, cerrojos y cilindros, tanto de puertas comunes como así también de vehículos. Una cerradura es un mecanismo de metal instalada para impedir que puertas y tapas se puedan abrir sin una llave. Los cerrajeros pueden trabajar con todos los sistemas de cerraduras y cierres conocidos, aunque la gran variedad de cerraduras utilizadas —que aumenta la protección de los bienes y personas protegidos— obliga a cierto grado de especialización.</p>
					<div className="usuario">
						<p>Leonel Messi</p> 
						<p>Duraccion del servicio</p>
					</div>
					<div className="estrellitas">
						<img src="/img/5estrellas.png" alt="" />
						<p>30 min</p>
					</div>

					<Link to="/">
						<div className="btn-servicio">Pedir Servicio</div>
					</Link>

				</div>


			</div>
			
}

export default InfoServicio
