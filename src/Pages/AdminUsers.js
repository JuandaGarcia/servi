import React from 'react'
import NavBar from '../components/AdminNavBar'
import Fichero from '../components/fichero'
const AdminUsers = () => {
	return <div>
		<NavBar/>
		<div className="panel_central">
			<div >
				<h1>
				Usuarios nuevos
				</h1>
				<input type="text"/>
			</div>
		</div>

		<div className="rendijas">
			<Fichero name={"kevin"} fecha={"20/04/2020"}/>
			<Fichero/>
			<Fichero/>
			<Fichero/>
			<Fichero/>
			<Fichero/>
			<Fichero/>
			<Fichero/>
			<Fichero/>
		</div>
		
	</div>
}

export default AdminUsers
