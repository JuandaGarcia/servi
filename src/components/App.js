import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import Servicios from '../Pages/Servicios'
import Trabaja from '../Pages/Trabaja'
import Sobre from '../Pages/Sobre'
import Login from '../Pages/Login'
import LoginPrestador from '../Pages/LoginPrestador'
import Register from '../Pages/Register'
import HubApp from '../Pages/HubApp'
import InfoServicio from '../Pages/InfoServicio'
import AdminServicios from '../Pages/AdminServicios'
import AdminUsers from '../Pages/AdminUsers'
import CrearServicio from '../Pages/CrearServicio'
import EditarServicio from '../Pages/EditarServicio'
import Hub2 from '../Pages/Hub2'
import Welcome from '../Pages/Welcome'
import HubPrestador from '../Pages/HubPrestador'
import LoginAdmin from '../Pages/LoginAdmin'
import BienvenidaPrestador from '../Pages/WelcomePrestador'
import Miservicio from '../Pages/misservicios'
import Pedidos from '../Pages/pedidos'
import Pedidos2 from '../Pages/pedidos2'
import Listaprestador from '../Pages/listaprestadores'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/servicios" component={Servicios} />
				<Route exact path="/trabaja-con-nosotros" component={Trabaja} />
				<Route exact path="/sobre-servi" component={Sobre} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/welcome" component={Welcome} />
				<Route exact path="/admin" component={LoginAdmin} />
				<Route exact path="/prestador/hub" component={HubPrestador} />
				<Route
					exact
					path="/prestador/welcome"
					component={BienvenidaPrestador}
				/>
				<Route
					exact
					path="/user/servicios/:idServicio"
					component={InfoServicio}
				/>
				<Route exact path="/login/prestador" component={LoginPrestador} />
				<Route exact path="/admin/users" component={AdminUsers} />
				<Route exact path="/admin/servicios" component={AdminServicios} />
				<Route exact path="/user" component={HubApp} />

				<Route exact path="/prestador/misservicios" component={Miservicio} />
				<Route exact path="/prestador/pedidos" component={Pedidos} />
				<Route exact path="/user/pedidos" component={Pedidos2} />
				<Route
					exact
					path="/user/servicio/:categoria"
					component={Listaprestador}
				/>
				<Route
					exact
					path="/prestador/CrearServicio"
					component={CrearServicio}
				/>
				<Route
					exact
					path="/prestador/EditarServicio/:id"
					component={EditarServicio}
				/>
				<Route exact path="/prestador" component={Hub2} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
