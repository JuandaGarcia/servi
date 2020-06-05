import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<header className="admincabezera">
			<nav className="admin">
            <h1>
                Panel Administrador
            </h1>
            <nav className="AdminNavBar">
            <NavLink activeClassName="a" to="/admin/users">
                    <h3>
                        Usuarios nuevos
                    </h3>
                </NavLink>
                <NavLink activeClassName="a" to="a">
                    <h3>
                        Servicios Nuevos
                    </h3>
                </NavLink>
                <NavLink activeClassName="a" to="a">
                    <h3 className="nari">
                        Cerrar sesión
                    </h3>
                </NavLink>
            </nav>
            </nav>

		</header>
	)
}

export default NavBar

