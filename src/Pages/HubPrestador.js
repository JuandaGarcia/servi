import React from 'react'
import { Link } from 'react-router-dom'

const HubPrestador = () => {
	return (
		<div className="hub-prestador">
			<div>
				<span>Tu cuenta está en proceso de verificación</span>
				<Link to="/prestador">
					<div className="welcome-btn">Ir al inicio</div>
				</Link>
			</div>
		</div>
	)
}

export default HubPrestador
