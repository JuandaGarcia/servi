import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<header className="cabecera">
			<Link to="/">
				<img className="nav-logo" src="/img/logo.png" alt="Servi" />
			</Link>
			<nav className="nav_principal">
				<NavLink activeClassName="selected" to="/servicios">
					Servicios
				</NavLink>
				<NavLink activeClassName="selected" to="/trabaja-con-nosotros">
					Trabaja con nosotros
				</NavLink>
				<NavLink activeClassName="selected" to="/sobre-servi">
					Sobre Servi
				</NavLink>
			</nav>
			<Link to="/login" className="contenedor-login">
				<div>Iniciar sesión</div>
				<div className="raya-iniciar-sesion"></div>
			</Link>
		</header>
	)
}

export default NavBar
