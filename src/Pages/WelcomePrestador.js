import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { Redirect, Link } from 'react-router-dom'

const BienvenidaPrestador = () => {
	const [name, setName] = useState('')

	useEffect(() => {
		if (localStorage.prestador) {
			const token = localStorage.prestador
			console.log(token)
			const decoded = jwt_decode(token)
			setName(decoded.nombre)
		}
		return () => {}
	}, [])

	if (!localStorage.prestador) {
		return <Redirect to="/" />
	}

	return (
		<div className="welcome">
			<div className="img-welcome-container">
				<img src="/img/welcome-prestador.png" alt="welcome" />
			</div>
			<div className="welcome-text">
				<img src="/img/logo.png" alt="logo" />
				<div>
					<h1>Hola {name}</h1>
					<p>
						tu cuenta se creó satisfactoriamente,
						<br />
						Uno de nuestros asesores se pondrá en
						<br />
						contacto contigo para activar tu cuenta.
						<br />
						Este proceso puede tardar hasta 12 horas.
					</p>
					<Link to="/prestador/hub">
						<div className="welcome-btn">Aceptar</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BienvenidaPrestador
