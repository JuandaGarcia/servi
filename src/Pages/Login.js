import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
	return (
		<div className="login-register">
			<div className="contenedor-img-login">
				<img src="http://localhost:3000/img/img-login.png" alt="img-login" />
			</div>
			<div className="contenedor-login-register">
				<div className="contenedor-formulario">
					<nav>
						<NavLink to="/login" activeClassName="selected">
							Iniciar sesión
						</NavLink>
						<NavLink to="/register" activeClassName="selected">
							Registrarse
						</NavLink>
					</nav>
					<form action="">
						<label>
							Correo <br />
							<input type="email" /> <br />
						</label>
						<label>
							Contraseña <br />
							<input type="password" /> <br />
						</label>
						<button onClick={''}>Iniciar sesión</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
