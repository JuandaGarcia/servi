import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Categoria = props => {
	return (
		<Link className="categoria" to="/hub">
			<div>
				<span className="nombre-categoria">{props.nombreCategoria}</span> <br />
				<span>{props.catidadServicios} servicios</span>
			</div>
		</Link>
	)
}

const HubApp = () => {
	const [placeholderBusqueda, setPlaceholderBusqueda] = useState(
		'Buscar categoria'
	)

	return (
		<div className="contenedor-hub">
			<div className="infomacion-hub">
				<div className="logo-input-hub">
					<Link to="/">
						<span className="logo">Servi</span>
					</Link>
					<input placeholder={placeholderBusqueda} type="text" />
				</div>
				<div className="contenedor-componentes-hub">
					<Categoria nombreCategoria={'Fontanería'} catidadServicios={5} />
					<Categoria nombreCategoria={'Cerrajería'} catidadServicios={7} />
					<Categoria nombreCategoria={'Mantenimiento'} catidadServicios={4} />
				</div>
			</div>
			<div className="contenodor-naranja">
				<div className="nombre-foto">
					<span className="nombre-persona">Nairo Quintana</span>
					<div className="nombre-foto-img">
						<img src="http://web.juandagarcia.com/img/nairo.jpg" alt="" />
					</div>
				</div>
				<img
					className="contenodor-naranja-img"
					src="http://web.juandagarcia.com/img/corre.png"
					alt=""
				/>
			</div>
		</div>
	)
}

export default HubApp
