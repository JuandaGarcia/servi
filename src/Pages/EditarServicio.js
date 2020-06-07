import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Swal from 'sweetalert2'
import Hora from '../components/Hora'

const EditarServicio = (props) => {
	const id = props.match.params.id
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
			traerDatos()
		}
	}, [])

	const traerDatos = async () => {
		const response = await axios.get(
			`http://localhost:5000/servicios/one/${id}`
		)
		const data = response.data
		setNombreServicio(data[0].nombre)
		setPrecio(data[0].precio)
		setDescripcion(data[0].descripcion)
		setCategoria(data[0].categoria)
	}

	const EnviarDatos = async () => {
		const response = await axios.put('http://localhost:5000/servicios/', {
			id: id,
			nombre: nombreServicio,
			descripcion: descripcion,
			categoria: categoria,
			precio: precio,
		})
		console.log(response.data)
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'El servicio se modificó con éxito.',
			showConfirmButton: true,
		}).then((result) => {
			if (result.value) {
				props.history.push(`/prestador/misservicios`)
			}
		})
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
				<Link to="/prestador">
					<h1>Servi</h1>
				</Link>
				<h3>
					<Hora />
				</h3>
				<div className="raya-home"></div>
			</div>

			<div className="contenedor-derecho">
				<div className="texto-boton">
					<h1>Editar servicio</h1>
					<Link to="/prestador/misservicios">
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
							value={nombreServicio}
							onChange={(e) => setNombreServicio(e.target.value)}
							type="text"
						/>
					</div>
					<div>
						<select
							name="select"
							required
							className="input-crear-servicio input-select"
							onChange={(e) => setCategoria(e.target.value)}
							defaultValue={categoria}
						>
							<option value="" disabled>
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
							value={precio}
							onChange={(e) => setPrecio(e.target.value)}
							type="number"
						/>
					</div>
					<div>
						<textarea
							value={descripcion}
							className="input-crear-servicio-grande"
							placeholder="Descripcion del servicio"
							required
							type="text"
							onChange={(e) => setDescripcion(e.target.value)}
						/>
					</div>
					<div className="boton-crear-servicio">
						<button className="btn-servicio">Editar Servicio</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditarServicio
