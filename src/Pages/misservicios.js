import React, { useState, useEffect } from 'react'
import FicheroS from '../components/ficheromiservicio'
import Fondo from '../components/fondo'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

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
		setData(response.data)
	}

	return (
		<div className="contenedor-miservicios">
			<div className="miservicios">
				<div className="misservicios-encabezado">
					<img src="/img/logo.png" alt="Sevi" />
					<input type="text" />
				</div>

				<div className="misservicios-abajo">
					<h1>Mis Servicios</h1>

					<div className="linea-gris" />

					<div className="rendijasS">
						{data.map((servicio) => {
							return (
								<div key={servicio._id}>
									<FicheroS
										id={servicio._id}
										setData={(e) => setData(e)}
										email={email}
										NombreServicio={servicio.nombre}
										NombrePersona={servicio.nombre_usuario_prestador}
									/>
								</div>
							)
						})}
					</div>
				</div>
			</div>

			<Fondo boton={'pedidos'} user={'Kevin Guerrero'} />
		</div>
	)
}

export default Servicio
