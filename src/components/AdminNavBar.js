import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'

const NavBar = () => {
	const history = useHistory()
	return (
		<header className="admincabezera">
			<nav className="admin">
				<h1>Panel Administrador</h1>
				<nav className="AdminNavBar">
					<NavLink activeClassName="a" to="/admin/users">
						<h3>Usuarios nuevos</h3>
					</NavLink>
					<div
						onClick={() => {
							localStorage.removeItem('admin')
							history.push('/')
						}}
					>
						<h3 className="nari">Cerrar sesión</h3>
					</div>
				</nav>
			</nav>
		</header>
	)
}

export default NavBar
