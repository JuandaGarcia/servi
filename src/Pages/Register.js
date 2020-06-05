import React, { useState } from 'react'
import { NavLink, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
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

const Login = (props) => {
	const [user, setUser] = useState('')
	const [email, setEmail] = useState('')
	const [telefono, setTelefono] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setconfirmPassword] = useState('')
	const [alertEmail, setAlertEmail] = useState(false)
	const [alertConfirmPassword, setAlertconfirmPassword] = useState(false)
	const [blockButton, setBlockButton] = useState(false)
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/

	const handleSubmit = (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			setAlertconfirmPassword(true)
		} else {
			setAlertconfirmPassword(false)
		}

		if (email.match(pattern)) {
			setAlertEmail(false)
		} else {
			setAlertEmail(true)
		}

		if (
			email.match(pattern) &&
			user &&
			email &&
			telefono &&
			password === confirmPassword
		) {
			console.log('hoal')
			PostData()
		}
	}

	const PostData = async () => {
		setBlockButton(true)
		await axios
			.post('users/register', {
				nombre: user,
				email: email.toLowerCase(),
				password: password,
				telefono: telefono,
			})
			.then((response) => {
				const data = response.data
				if (data.status === `${email} Registered!`) {
					console.log('Registered')
					axios
						.post('users/login', {
							email: email.toLowerCase(),
							password: password,
						})
						.then((response) => {
							if (localStorage.usertokenprestaodor) {
								localStorage.removeItem('usertokenprestador')
							}
							localStorage.setItem('usertoken', response.data)
							props.history.push(`/welcome`)
							return response.data
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
				}
				if (data.error) {
					if (data.error === 'User already exists') {
						Swal.fire({
							position: 'center',
							icon: 'warning',
							title: `${email} ya se encuentra registrado.`,
							showConfirmButton: false,
							timer: 3000,
						})
					} else {
						Swal.fire({
							position: 'center',
							icon: 'error',
							title: `Ocurrió un error intenta mas tarde.`,
							showConfirmButton: false,
							timer: 3000,
						})
					}
				}
			})
		setBlockButton(false)
	}

	if (localStorage.usertoken) {
		return <Redirect to="/hub" />
	}

	return (
		<React.Fragment>
			<Header />
			<div className="login-register">
				<div className="contenedor-img-login">
					<img src="/img/img-login.png" alt="img-login" />
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
						<form
							onSubmit={(e) => {
								handleSubmit(e)
							}}
						>
							<label>
								Nombre <br />
								<input
									className="input-login-register"
									required
									type="text"
									value={user}
									onChange={(e) => {
										setUser(e.target.value)
									}}
								/>
								<br />
							</label>
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
								Teléfono <br />
								<input
									className="input-login-register"
									required
									value={telefono}
									type="number"
									onChange={(e) => {
										setTelefono(e.target.value)
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
									minLength="8"
									onChange={(e) => {
										setPassword(e.target.value)
									}}
								/>
								<br />
							</label>
							<label>
								Confirmar contraseña{' '}
								{alertConfirmPassword ? (
									<span className="alert-form">
										Las contraseñas no coinciden
									</span>
								) : null}
								<input
									className="input-login-register"
									required
									value={confirmPassword}
									type="password"
									onChange={(e) => {
										setconfirmPassword(e.target.value)
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
									value="Regístrarse"
								/>
							)}
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Login
