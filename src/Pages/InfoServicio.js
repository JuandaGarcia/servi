import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hora from '../components/Hora'
import axios from 'axios'
import Swal from 'sweetalert2'

const InfoServicio = (props) => {
	const id = props.match.params.idServicio
	const [nombreServicio, setNombreServicio] = useState('')
	const [precio, setPrecio] = useState('')
	const [prestador, setPrestador] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [emailPrestador, setEmailPrestador] = useState('')
	const [categoria, setCategoria] = useState('')
	const [token, setToken] = useState('')

	useEffect(() => {
		if (localStorage.usertoken) {
			const token = localStorage.usertoken
			setToken(token)
		}
		traerDatos()
	}, [])

	const traerDatos = async () => {
		const response = await axios.get(
			`http://localhost:5000/servicios/one/${id}`
		)
		const data = response.data
		setNombreServicio(data[0].nombre)
		setPrecio(data[0].precio)
		setDescripcion(data[0].descripcion)
		setPrestador(data[0].nombre_usuario_prestador)
		setEmailPrestador(data[0].email_usuario_prestador)
		setCategoria(data[0].categoria)
	}

	const CrearPedido = async () => {
		const usuario = await axios.get(
			`http://localhost:3000/users/profile/${token}`
		)
		const data = usuario.data
		const enviarPedido = await axios.post('http://localhost:5000/pedidos/', {
			id_servicio: id,
			nombre_servicio: nombreServicio,
			nombre_prestador: prestador,
			telefono_usuario: data.telefono,
			email_usuario_comun: data.email,
			email_usuario_prestador: emailPrestador,
		})
		if (enviarPedido.data.status === 'creado') {
			Swal.fire({
				position: 'center',
				icon: 'success',
				title:
					'El servicio se solicitó con éxito, el prestador de servicio se pondrá en contacto contigo.',
				showConfirmButton: true,
			}).then((result) => {
				if (result.value) {
					props.history.push(`/user/servicio/${categoria}`)
				}
			})
		}
	}

	return (
		<div className="InfoServicio">
			<div className="contenedor-img-servicio">
				<Link to="/user">
					<h1>Servi</h1>
				</Link>
				<h3>
					<Hora />
				</h3>
				<div className="raya-home"></div>
			</div>

			<div className="informacion-detallada">
				<Link to={`/user/servicio/${categoria}`}>
					<div className="circulo-exit">
						<img src="/img/x.svg" alt="X" />
					</div>
				</Link>
				<h1>{nombreServicio}</h1>
				<p>{descripcion}</p>
				<div className="c-c">
					<div className="estrellitas">
						<p className="bold">Prestador del servicio</p>
						<p>{prestador}</p>
					</div>
					<div className="estrellitas">
						<p className="bold">Precio del servicio</p>
						<p>${precio}</p>
					</div>
				</div>

				<div
					onClick={() => {
						CrearPedido()
					}}
					className="btn-servicio"
				>
					Solicitar Servicio
				</div>
			</div>
		</div>
	)
}

export default InfoServicio
