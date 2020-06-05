import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const CrearServicio = () => {
	const [nombreServicio, setNombreServicio] = useState('')
	const [precio, setPrecio] = useState('')
	const [categoria, setCategoria] = useState('')
	const [descripcion, setDescripcion] = useState('')

	const [email, setEmail] = useState('')
	const [nombreUsuario, setNombreUsuario] = useState('')

	useEffect(() => {
		if (localStorage.prestador) {
			const token = localStorage.prestador
			const decoded = jwt_decode(token)
			setEmail(decoded.email)
			setNombreUsuario(decoded.nombre)
		}
		return () => {}
	}, [])

	const EnviarDatos = async () => {
		console.log(nombreServicio)
		console.log(descripcion)
		console.log(precio)
		console.log(categoria)
		console.log(email)
		console.log(nombreUsuario)
		const response = await axios.post('servicios/', {
			nombre: nombreServicio,
			descripcion: descripcion,
			categoria: categoria,
			precio: precio,
			nombre_usuario: nombreUsuario,
			email_usuario: email,
		})
		console.log(response)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		EnviarDatos()
	}

	if (!localStorage.prestador) {
		return <Redirect to="/" />
	}

	return (
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

				<form
					onSubmit={(e) => handleSubmit(e)}
					className="formulario-crear-servicio"
				>
					<div>
						<input
							className="input-crear-servicio"
							placeholder="Nombre del servicio"
							required
							onChange={(e) => setNombreServicio(e.target.value)}
							type="text"
						/>
					</div>
					<div>
						<select
							name="select"
							required
							className="input-crear-servicio"
							onChange={(e) => setCategoria(e.target.value)}
						>
							<option value="value1" selected disabled>
								Categoría
							</option>
							<option value="Fontanería">Fontanería</option>
							<option value="Cerrajería">Cerrajería</option>
							<option value="Mantenimiento">Mantenimiento</option>
						</select>
					</div>
					<div>
						<input
							className="input-crear-servicio"
							placeholder="Precio del servicio"
							required
							onChange={(e) => setPrecio(e.target.value)}
							type="number"
						/>
					</div>
					<div>
						<textarea
							className="input-crear-servicio-grande"
							placeholder="Descripcion del servicio"
							required
							type="text"
							onChange={(e) => setDescripcion(e.target.value)}
						/>
					</div>
					<div className="boton-crear-servicio">
						<button className="btn-servicio">Crear Servicio</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default CrearServicio
