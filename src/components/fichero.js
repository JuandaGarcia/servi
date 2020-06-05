import React from 'react'

const fichero = (props) => {
	return (
		<div className="fichero">
			<img src="http://localhost:3000/img/user.png" alt="" />
			<div>
				<h5>{props.name}</h5>
				<h6>Correo: {props.email}</h6>
			</div>
		</div>
	)
}

export default fichero
