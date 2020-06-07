import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import Fondo from '../components/fondo'

const Hub2 = () => {
	if (!localStorage.prestador) {
		return <Redirect to="/" />
	}
	return (
		<div className="contenedor-miservicios">
			<div className="miservicios">
				<div className="misservicios-encabezado">
					<Link to="/prestador">
						<img src="/img/logo.png" alt="Sevi" />
					</Link>
				</div>
				<div className="botenes-azules">
					<Link to="/prestador/CrearServicio">
						<div className="btn-azul">Crear un servicio</div>
					</Link>
					<Link to="/prestador/misservicios">
						<div className="btn-azul">Mis servicios</div>
					</Link>
				</div>
			</div>

			<Fondo boton={'pedidos'} user={'Kevin Guerrero'} clase={'fondo-azul'} />
		</div>
	)
}

export default Hub2
