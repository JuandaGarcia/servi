import React, { useState, useEffect } from 'react'
import NavBar from '../components/AdminNavBar'
import Fichero from '../components/fichero'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'

const AdminUsers = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		setLoading(true)
		await axios
			.get('http://localhost:5000/prestador/todos')
			.then((res) => {
				setLoading(false)
				setData(res.data)
			})
			.catch((err) => {
				setLoading(false)
				setError(true)
			})
		setLoading(false)
	}

	const deleteData = async (id) => {
		setLoading(true)
		await axios
			.delete(`http://localhost:5000/prestador/${id}`)
			.then((res) => {
				setLoading(false)
			})
			.catch((err) => {
				setLoading(false)
				setError(true)
			})
		setLoading(false)
	}

	const putData = async (id) => {
		setLoading(true)
		await axios
			.put(`http://localhost:5000/prestador/${id}`)
			.then((res) => {
				setLoading(false)
			})
			.catch((err) => {
				setLoading(false)
				setError(true)
			})
		setLoading(false)
	}

	const Modal = (user) => {
		console.log(data[user]._id)

		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger',
			},
		})

		swalWithBootstrapButtons
			.fire({
				title: `Usuario: ${data[user].email}`,
				text: `Nombre: ${data[user].nombre} | Correo: ${data[user].email} | Teléfono: ${data[user].telefono} | ID: ${data[user]._id}`,
				icon: 'info',
				showCancelButton: true,
				confirmButtonText: 'Aceptar usuario',
				cancelButtonText: 'Rechazar usuario',
				reverseButtons: true,
			})
			.then((result) => {
				if (result.value) {
					putData(data[user]._id)
					fetchData()
					swalWithBootstrapButtons.fire(
						'Aceptado',
						'El usuario fue aceptado en la plataforma.',
						'success'
					)
				} else if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.cancel
				) {
					deleteData(data[user]._id)
					fetchData()
					swalWithBootstrapButtons.fire(
						'Rechazado',
						'El usuario fue rechazado en la plataforma.',
						'info'
					)
				}
			})
	}

	if (!localStorage.admin) {
		return <Redirect to="/admin" />
	}

	return (
		<div>
			<NavBar />
			<div className="panel_central">
				<div>
					<h1>Usuarios nuevos</h1>
				</div>
			</div>

			<div className="rendijas">
				{data.map((user, index) => {
					return (
						<div onClick={() => Modal(index)}>
							<Fichero name={user.nombre} email={user.email} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default AdminUsers
