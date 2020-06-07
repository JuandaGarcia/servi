import React from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'

const app = ({
	NombreServicio,
	NombrePersona,
	id,
	setData,
	email,
	history,
}) => {
	const Modal = (id) => {
		Swal.fire({
			title: `¿Estas seguro que quieres eliminar este servicio?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#ff9700 ',
			cancelButtonColor: '#eaeaea',
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar',
		}).then(async (result) => {
			if (result.value) {
				const response = await axios.delete(
					`http://localhost:5000/servicios/${id}/${email}`
				)
				setData(response.data)
				Swal.fire(
					'Eliminado',
					'El servicio se elimino correctamente.',
					'success'
				)
			}
		})
	}

	return (
		<div className="ficheroS">
			<div className="h2-h5">
				<h3>{NombreServicio}</h3>
				<h5>{NombrePersona}</h5>
			</div>

			<div className="botones">
				<Link to={`/prestador/EditarServicio/${id}`}>
					<button>
						<img src="http://localhost:3000/img/edit.png" alt="" />
					</button>
				</Link>
				<button onClick={() => Modal(id)}>
					<img src="http://localhost:3000/img/delete.png" alt="" />
				</button>
			</div>
		</div>
	)
}

export default app
