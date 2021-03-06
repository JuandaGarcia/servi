import React, { useState, useEffect } from 'react'
import { NavLink, Link, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import Loader from '../components/Loader'

const Header = () => {
	return (
		<header className="cabecera">
			<Link to="/">
				<h1>Servi</h1>
			</Link>
			<Link to="/" className="contenedor-login">
				<div className="circulo-exit">
					<img src="/img/x.svg" alt="X" />
				</div>
			</Link>
		</header>
	)
}

const LoginPrestador = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [alertEmail, setAlertEmail] = useState(false)
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/
	const [blockButton, setBlockButton] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (email.match(pattern)) {
			setAlertEmail(false)
		} else {
			setAlertEmail(true)
		}

		if (email.match(pattern) && email && password) {
			PostData()
		}
	}

	const PostData = async () => {
		setBlockButton(true)
		await axios
			.post('http://localhost:5000/prestador/login', {
				email: email.toLowerCase(),
				password: password,
			})
			.then((response) => {
				const data = response.data

				if (data.error) {
					if (data.error === 'User does not exist') {
						Swal.fire({
							position: 'center',
							icon: 'warning',
							title: `El correo o la contraseña es incorrecto.`,
							showConfirmButton: false,
							timer: 1500,
						})
					} else {
						Swal.fire({
							position: 'center',
							icon: 'error',
							title: `Ocurrió un error al iniciar sesión por favor intenta mas tarde.`,
							showConfirmButton: false,
							timer: 3000,
						})
					}
				} else {
					if (localStorage.usertoken) {
						localStorage.removeItem('usertoken')
					}
					localStorage.setItem('prestador', response.data)
					props.history.push(`/prestador`)
					return response.data
				}
			})
			.catch((err) => {
				console.log(err)
				Swal.fire({
					position: 'center',
					icon: 'error',
					title: `Ocurrió un error al iniciar sesión por favor intenta mas tarde.`,
					showConfirmButton: false,
					timer: 3000,
				})
			})
		setBlockButton(false)
	}

	if (localStorage.prestador) {
		return <Redirect to="/prestador" />
	}

	return (
		<React.Fragment>
			<Header />
			<div className="login-register">
				<div className="contenedor-img-login">
					<img src="/img/sobre-servi.png" alt="img-login" />
				</div>
				<div className="contenedor-login-register">
					<div className="contenedor-formulario">
						<nav>
							<NavLink to="/login" activeClassName="selected">
								Iniciar sesión
							</NavLink>
							<NavLink to="/trabaja-con-nosotros" activeClassName="selected">
								Registrarse
							</NavLink>
						</nav>
						<form
							onSubmit={(e) => {
								handleSubmit(e)
							}}
						>
							<label>
								Correo
								{alertEmail ? (
									<span className="alert-form">
										Ingresa un correo electrónico valido
									</span>
								) : null}
								<input
									className="input-login-register"
									required
									value={email}
									type="email"
									onChange={(e) => {
										setEmail(e.target.value)
									}}
								/>
								<br />
							</label>
							<label>
								Contraseña <br />
								<input
									className="input-login-register"
									required
									value={password}
									type="password"
									onChange={(e) => {
										setPassword(e.target.value)
									}}
								/>
								<br />
							</label>
							{blockButton ? (
								<div className="container-loader">
									<Loader />
								</div>
							) : (
								<input
									className="button-submit"
									type="submit"
									value="Iniciar sesión"
								/>
							)}
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default LoginPrestador
