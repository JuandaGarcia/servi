import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import Fondo from '../components/fondo'

const Categoria = (props) => {
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
	const [name, setName] = useState('')

	useEffect(() => {
		if (localStorage.usertoken) {
			const token = localStorage.usertoken
			const decoded = jwt_decode(token)
			setName(decoded.nombre)
		}
		return () => {}
	}, [])

	if (!localStorage.usertoken) {
		return <Redirect to="/" />
	}

	return (
		<div className="contenedor-miservicios">
			<div className="miservicios">
				<div className="misservicios-encabezado">
					<Link to="/user">
						<img src="/img/logo.png" alt="Sevi" />
					</Link>
				</div>
				<div className="botenes-azules">
					<Link to="/user/servicio/Fontanería">
						<div className="btn-naranja">Fontanería</div>
					</Link>
					<Link to="/user/servicio/Cerrajería">
						<div className="btn-naranja">Cerrajería</div>
					</Link>
					<Link to="/user/servicio/Mantenimiento">
						<div className="btn-naranja">Mantenimiento</div>
					</Link>
				</div>
			</div>
			<Fondo
				boton={'Servicios solicitados'}
				user={'Kevin Guerrero'}
				clase={'fondo-naranja'}
			/>
		</div>
	)
}

export default HubApp
