import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className="cabecera">
			<Link to="/">
				<h1>Servi</h1>
			</Link>
			<Link to="/" className="contenedor-login">
				<div className="circulo-exit">
					<img src="http://web.juandagarcia.com/img/x.svg" alt="X" />
				</div>
			</Link>
		</header>
	)
}

const Login = () => {
	return (
		<React.Fragment>
			<Header />
			<div className="login-register">
				<div className="contenedor-img-login">
					<img
						src="http://web.juandagarcia.com/img/img-login.png"
						alt="img-login"
					/>
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
								<input className="input-login-register" type="email" /> <br />
							</label>
							<label>
								Contraseña <br />
								<input className="input-login-register" type="password" />{' '}
								<br />
							</label>
							<Link className="button-submit" to="/hub">
								Iniciar sesión
							</Link>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Login
