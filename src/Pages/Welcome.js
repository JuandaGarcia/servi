import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { Redirect, Link } from 'react-router-dom'

const Bienvenida = () => {
	const [name, setName] = useState('')

	useEffect(() => {
		if (localStorage.usertoken) {
			const token = localStorage.usertoken
			const decoded = jwt_decode(token)
			setName(decoded.nombre)
		}
		return () => {}
	}, [])

	if (!localStorage.usertoken) {
		return <Redirect to="/" />
	}

	return (
		<div className="welcome">
			<div className="img-welcome-container">
				<img src="/img/welcome.png" alt="welcome" />
			</div>
			<div className="welcome-text">
				<img src="/img/logo.png" alt="logo" />
				<div>
					<h1>Hola {name}</h1>
					<p>
						tu cuenta se creó satisfactoriamente,
						<br /> ahora puedes empezar a buscar servicos.
					</p>
					<Link to="/hub">
						<div className="welcome-btn">Continuar</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Bienvenida
