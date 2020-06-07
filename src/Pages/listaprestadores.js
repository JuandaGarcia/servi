import React, { useEffect, useState } from 'react'
import Fondo from '../components/fondo'
import Fichero from '../components/ficherolistaprestadores'
import { Link } from 'react-router-dom'
import axios from 'axios'

const App = (props) => {
	const categoria = props.match.params.categoria
	const [data, setData] = useState([])

	useEffect(() => {
		traerDatos()
	}, [])

	const traerDatos = async () => {
		const resposnse = await axios.get(
			`http://localhost:5000/servicios/categoria/${categoria}`
		)
		setData(resposnse.data)
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
					<h1>{categoria}</h1>

					<div className="linea-gris" />

					<div className="rendijas">
						{data.map((servicio) => {
							return <Fichero key={servicio._id} servicio={servicio} />
						})}
					</div>
				</div>
			</div>

			<Fondo
				user={'kevin guerrero'}
				boton={'Servicios solicitados'}
				clase={'fondo-naranja'}
			/>
		</div>
	)
}

export default App
