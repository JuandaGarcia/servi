import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

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
		<div className="contenedor-hub">
			<div className="infomacion-hub">
				<div className="logo-input-hub">
					<Link to="/">
						<span className="logo">Servi</span>
					</Link>
					<input placeholder={'Buscar categoria'} type="text" />
				</div>
				<div className="contenedor-componentes-hub">
					<Categoria nombreCategoria={'Fontanería'} catidadServicios={5} />
					<Categoria nombreCategoria={'Cerrajería'} catidadServicios={7} />
					<Categoria nombreCategoria={'Mantenimiento'} catidadServicios={4} />
				</div>
			</div>
			<div className="contenodor-naranja">
				<div className="nombre-foto">
					<span className="nombre-persona">{name}</span>
					<div className="nombre-foto-img">
						<img src="/img/profile.jpg" alt="" />
					</div>
				</div>
				<img className="contenodor-naranja-img" src="/img/corre.png" alt="" />
			</div>
		</div>
	)
}

export default HubApp
