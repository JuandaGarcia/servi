import React, { useEffect, useState } from 'react'
import Fondo from '../components/fondo'
import FicheroS from '../components/ficheropedidos'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

const App = (props) => {
	const [email, setEmail] = useState('')
	const [data, setData] = useState([])

	useEffect(() => {
		if (localStorage.prestador) {
			const token = localStorage.prestador
			const decoded = jwt_decode(token)
			setEmail(decoded.email)
			traerDatos(decoded.email)
		}
		if (localStorage.usertoken) {
			const token = localStorage.usertoken
			const decoded = jwt_decode(token)
			setEmail(decoded.email)
			traerDatos(decoded.email)
		}
	}, [])

	const traerDatos = async (e) => {
		const response = await axios.get(`http://localhost:5000/pedidos/user/${e}`)
		setData(response.data)
	}

	return (
		<div className="contenedor-miservicios">
			<div className="miservicios">
				<div className="misservicios-encabezado">
					<Link to="/user">
						<img src="/img/logo.png" alt="Sevi" />
					</Link>
				</div>

				<div className="misservicios-abajo">
					<h1>Pedidos</h1>

					<div className="linea-gris" />

					<div className="rendijasSS">
						{data.length === 0 ? <h1>Todavía no tienes pedidos.</h1> : null}
						{data.map((pedido) => {
							return (
								<FicheroS
									nombre={pedido.nombre_servicio}
									key={pedido._id}
									pedido={pedido}
									cambiar={(w) => setData(w)}
									prestador={pedido.nombre_prestador}
								/>
							)
						})}
					</div>
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

export default App
