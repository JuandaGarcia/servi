import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'

const Servicios = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="servicios">
				<div className="contenedor-img">
					<img src="/img/servicios.png" alt="" />
				</div>
				<div className="contenedor-info-servicios">
					<div>
						<h1>Servicios</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
							adipisci. Repellendus labore quo quibusdam et illo nam ipsa harum
							qui! Accusantium et tenetur, dolores architecto dicta beatae sunt
							nesciunt ea.
						</p>
						<Link to="register">Registrate</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Servicios
