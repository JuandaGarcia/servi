import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import Hora from '../components/Hora'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Fondo = (props) => {
	const history = useHistory()
	const [nombre, setNombre] = useState('')

	useEffect(() => {
		if (localStorage.prestador) {
			const token = localStorage.prestador
			const decoded = jwt_decode(token)
			setNombre(decoded.nombre)
		}
		if (localStorage.usertoken) {
			const token = localStorage.usertoken
			const decoded = jwt_decode(token)
			setNombre(decoded.nombre)
		}
	}, [])

	const cerraSesion = () => {
		if (localStorage.prestador) {
			localStorage.removeItem('prestador')
			history.push(`/`)
		}
		if (localStorage.usertoken) {
			localStorage.removeItem('usertoken')
			history.push(`/`)
		}
	}

	return (
		<div className={props.clase}>
			<div className="contenedor-nombre-imagen">
				<div className="nombre-imagen">
					<h1>{nombre}</h1>
					<img src="/img/nairo.jpg" alt="" />
				</div>
			</div>

			<img
				className="img-correr"
				src="http://localhost:3000/img/corre.png"
				alt=""
			/>

			<div className="boton-h1">
				{props.clase === 'fondo-azul' ? (
					<button onClick={() => history.push(`/prestador/pedidos`)}>
						{props.boton}
					</button>
				) : null}
				{props.clase === 'fondo-naranja' ? (
					<button onClick={() => history.push(`/user/pedidos`)}>
						{props.boton}
					</button>
				) : null}
			</div>
			<div
				className="boton-h1-2"
				onClick={() => {
					cerraSesion()
				}}
			>
				<button>Cerrar sesión</button>
			</div>

			<div className="boton-h1">
				<h1>
					<Hora />
				</h1>
			</div>
		</div>
	)
}

export default Fondo
