import React, { useState, useEffect } from 'react'
import FicheroS from '../components/ficheromiservicio'
import Fondo from '../components/fondo'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

const Servicio = () => {
	const [data, setData] = useState([])
	const [email, setEmail] = useState('')

	useEffect(() => {
		if (localStorage.prestador) {
			const token = localStorage.prestador
			const decoded = jwt_decode(token)
			setEmail(decoded.email)
			traerDatos(decoded.email)
		}
	}, [])

	const traerDatos = async (email) => {
		const response = await axios.get(
			`http://localhost:5000/servicios/prestador/${email}/`
		)
		console.log(response.data)
		setData(response.data)
	}

	return (
		<div className="contenedor-miservicios">
			<div className="miservicios">
				<div className="misservicios-encabezado">
					<Link to="/prestador">
						<img src="/img/logo.png" alt="Sevi" />
					</Link>
				</div>
				<div className="misservicios-abajo">
					<h1>Mis Servicios</h1>
					<div className="linea-gris" />
					<div className="rendijasS">
						{data.length === 0 ? (
							<h1>Aun no tienes servicios disponibles.</h1>
						) : null}
						{data.map((servicio) => {
							return (
								<FicheroS
									key={servicio._id}
									id={servicio._id}
									setData={(e) => setData(e)}
									email={email}
									NombreServicio={servicio.nombre}
									NombrePersona={servicio.nombre_usuario_prestador}
								/>
							)
						})}
					</div>
				</div>
			</div>

			<Fondo boton={'pedidos'} user={'Kevin Guerrero'} clase={'fondo-azul'} />
		</div>
	)
}

export default Servicio
