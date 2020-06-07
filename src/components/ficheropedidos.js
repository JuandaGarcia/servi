import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const App = (props) => {
	const Eliminar = async () => {
		const response = await axios.delete(
			`http://localhost:5000/pedidos/${props.pedido._id}/${props.pedido.email_usuario_prestador}`
		)
		props.cambiar(response.data)
	}

	const modal = () => {
		Swal.fire({
			title: `<i>${props.pedido.nombre_servicio}</i>`,
			html: `Email Prestador: ${props.pedido.email_usuario_prestador}<br><br>
							Email usuario: ${props.pedido.email_usuario_comun}<br>
            Teléfono usuario: ${props.pedido.telefono_usuario}<br>
            ID del pedido: ${props.pedido._id}`,
			confirmButtonText: 'Aceptar',
		})
	}

	return (
		<div className="ficheroSS">
			<div className="h2-h5S">
				<h3>{props.nombre}</h3>
				<h5>{props.prestador}</h5>
			</div>

			<div className="botonesS">
				<button onClick={() => modal()}>
					<img src="http://localhost:3000/img/correcto.png" alt="" />
				</button>
				<button onClick={() => Eliminar()}>
					<img src="http://localhost:3000/img/X.png" alt="" />
				</button>
			</div>
		</div>
	)
}

export default App
