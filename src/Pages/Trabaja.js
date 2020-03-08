import React from 'react'
import Navbar from '../components/NavBar'

const Trabaja = () => {
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
					<form action="">
						<label>
							<input
								className="input-trabaja"
								placeholder="Nombre completo"
								required
								type="text"
							/>{' '}
							<br />
						</label>
						<label>
							<input
								className="input-trabaja"
								placeholder="Correo"
								required
								type="email"
							/>{' '}
							<br />
						</label>
						<label>
							<input
								className="input-trabaja"
								placeholder="Servicio que desea ofrecer"
								required
								type="text"
							/>{' '}
							<br />
						</label>
						<label>
							<input
								className="input-trabaja"
								placeholder="Ciudad"
								required
								type="text"
							/>{' '}
							<br />
						</label>
						<label>
							<input
								className="input-trabaja"
								placeholder="Telefono"
								required
								type="number"
							/>{' '}
							<br />
						</label>
						<input
							type="checkbox"
							id="aceptar"
							name="aceptar"
							value="aceptar"
						/>
						<label for="aceptar"> Acepto los términos y condiciones </label>
						<button className="button-submit" onClick={''}>
							Enviar información
						</button>
					</form>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Trabaja
