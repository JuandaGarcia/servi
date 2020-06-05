import React from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import Home from '../Pages/Home'
import Servicios from '../Pages/Servicios'
import Trabaja from '../Pages/Trabaja'
import Sobre from '../Pages/Sobre'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import HubApp from '../Pages/HubApp'
import InfoServicio from '../Pages/InfoServicio'
import AdminServicios from '../Pages/AdminServicios'
import AdminUsers from '../Pages/AdminUsers'
import CrearServicio from '../Pages/CrearServicio'
import Hub2 from '../Pages/Hub2'
import Welcome from '../Pages/Welcome'
import HubPrestador from '../Pages/HubPrestador'
import LoginAdmin from '../Pages/LoginAdmin'
import BienvenidaPrestador from '../Pages/WelcomePrestador'
import Miservicio from '../Pages/misservicios'
import Pedidos from '../Pages/pedidos'
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
					path="/hub/servicios/:idServicio"
					component={InfoServicio}
				/>
				<Route exact path="/admin/users" component={AdminUsers} />
				<Route exact path="/admin/servicios" component={AdminServicios} />
				<Route exact path="/hub" component={HubApp} />

				
				<Route exact path="/prestador/misservicios" component={Miservicio}/>
				<Route exact path="/prestador/pedidos" component={Pedidos}/>
				<Route exact path="/prestador/listaprestador" component={Listaprestador}/>


				<Route exact path="/CrearServicio" component={CrearServicio} />
				<Route exact path="/hub2" component={Hub2} />

			</Switch>
		</BrowserRouter>
	)
}

export default App
