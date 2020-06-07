import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'

const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="home">
				<div className="info-home">
					<div>
						<h1>Servi</h1>
						<div className="contenedor-informacion">
							<div className="raya-home-home"></div>
							<div className="informacion-boton">
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
									quia impedit adipisci, autem eum vitae harum molestiae,
									veritatis vel blanditiis magnam illo dolor! Eos aliquam quod
									omnis at possimus molestiae!
								</p>
								<Link to="/login">
									<div className="btn-primary">Comenzar</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="img-home">
					<img src="/img/img-home.png" alt="img-home" />
				</div>
			</div>
		</React.Fragment>
	)
}

export default Home
