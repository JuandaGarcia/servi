import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import Servicios from '../Pages/Servicios'
import Trabaja from '../Pages/Trabaja'
import Sobre from '../Pages/Sobre'
import Login from '../Pages/Login'
import Layout from './Layout'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
					<Route exact path="/servicios" component={Servicios} />
					<Route exact path="/trabaja-con-nosotros" component={Trabaja} />
					<Route exact path="/sobre-servi" component={Sobre} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Login} />
				</Layout>
			</Switch>
		</BrowserRouter>
	)
}

export default App
