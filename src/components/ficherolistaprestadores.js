import React from 'react'
import { Link } from 'react-router-dom'

const app = ({ servicio }) => {
	return (
		<Link to={`/user/servicios/${servicio._id}`} className="ficheroSSS">
			<div className="h2-h5">
				<h3>{servicio.nombre}</h3>
				<h5>{servicio.nombre_usuario_prestador}</h5>
			</div>
			{servicio.categoria === 'Cerrajería' ? (
				<div className="img-item-categoria">
					<img src="http://localhost:3000/img/ce.svg" alt="" />
				</div>
			) : null}
			{servicio.categoria === 'Fontanería' ? (
				<div className="img-item-categoria">
					<img src="http://localhost:3000/img/plomero.svg" alt="" />
				</div>
			) : null}
			{servicio.categoria === 'Mantenimiento' ? (
				<div className="img-item-categoria">
					<img src="http://localhost:3000/img/mante.svg" alt="" />
				</div>
			) : null}
		</Link>
	)
}

export default app
