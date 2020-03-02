import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<header className="cabecera">
			<Link to="/">
				<h1>Servi</h1>
			</Link>
			<nav className="nav_principal">
				<Link to="/servicios">Servicios</Link>
				<Link to="/trabaja-con-nosotros">Trabaja con nosotros</Link>
				<Link to="/sobre-servi">Sobre Servi</Link>
			</nav>
			<Link to="/login" className="contenedor-login">
				<div>Iniciar sesión</div>
				<div className="raya-iniciar-sesion"></div>
			</Link>
		</header>
	)
}

export default NavBar
