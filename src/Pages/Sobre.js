import React from 'react'
import Navbar from '../components/NavBar'

const Sobre = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="servicios">
				<div className="contenedor-img">
					<img src="http://web.juandagarcia.com/img/sobre-servi.png" alt="" />
				</div>
				<div className="contenedor-info-servicios">
					<div>
						<h1>Sobre Servi</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
							adipisci. Repellendus labore quo quibusdam et illo nam ipsa harum
							qui! Accusantium et tenetur, dolores architecto dicta beatae sunt
							nesciunt ea.
						</p>
						<div className="contenedor-mision-vision">
							<div className="item-mision-vision">
								<h2>Misión</h2>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Quasi ipsam voluptatum odio
								</p>
							</div>
							<div className="item-mision-vision">
								<h2>Visión</h2>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Quasi ipsam voluptatum odio
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Sobre
