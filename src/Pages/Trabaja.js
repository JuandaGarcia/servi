import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Loader from '../components/Loader'
import Navbar from '../components/NavBar'

const Trabaja = (props) => {
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
			.post('prestador/register', {
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
						.post('prestador/login', {
							email: email.toLowerCase(),
							password: password,
						})
						.then((response) => {
							if (localStorage.usertoken) {
								localStorage.removeItem('usertoken')
							}
							localStorage.setItem('prestador', response.data)
							props.history.push(`/prestador/welcome/`)
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

	/* if (localStorage.usertoken) {
		return <Redirect to="/" />
	} */
	return (
		<React.Fragment>
			<Navbar />
			<div className="trabaja-con-nosotros">
				<div className="contenedor-info-trabaja">
					<h1>Trabaja con nosotros y deja tu huella</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
						sint autem.
					</p>
				</div>
				<div className="contenedor-formulario-trabaja">
					<form
						onSubmit={(e) => {
							handleSubmit(e)
						}}
					>
						<label>
							<input
								className="input-trabaja"
								required
								placeholder="Nombre"
								type="text"
								value={user}
								onChange={(e) => {
									setUser(e.target.value)
								}}
							/>
							<br />
						</label>
						<label>
							{alertEmail ? (
								<span className="alert-form">
									Ingresa un correo electrónico valido
								</span>
							) : null}
							<input
								className="input-trabaja"
								required
								placeholder="Correo"
								value={email}
								type="email"
								onChange={(e) => {
									setEmail(e.target.value)
								}}
							/>
							<br />
						</label>
						<label>
							<input
								className="input-trabaja"
								required
								placeholder="Telefono"
								value={telefono}
								type="number"
								onChange={(e) => {
									setTelefono(e.target.value)
								}}
							/>
							<br />
						</label>
						<label>
							<input
								className="input-trabaja"
								required
								value={password}
								placeholder="Contraseña"
								type="password"
								minLength="8"
								onChange={(e) => {
									setPassword(e.target.value)
								}}
							/>
							<br />
						</label>
						<label>
							{alertConfirmPassword ? (
								<span className="alert-form">Las contraseñas no coinciden</span>
							) : null}
							<input
								className="input-trabaja"
								required
								placeholder="Confirmar contraseña"
								value={confirmPassword}
								type="password"
								onChange={(e) => {
									setconfirmPassword(e.target.value)
								}}
							/>
							<br />
						</label>
						<input
							type="checkbox"
							id="aceptar"
							required
							name="aceptar"
							value="aceptar"
						/>
						<label for="aceptar"> Acepto los términos y condiciones </label>
						{blockButton ? (
							<div className="container-loader">
								<Loader />
							</div>
						) : (
							<input
								className="button-submit"
								type="submit"
								value="Crear cuenta"
							/>
						)}
						<Link to="/login/prestador">
							<div className="is">Iniciar seción</div>
						</Link>
					</form>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Trabaja
