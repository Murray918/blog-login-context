import React from 'react'
import Landing from './Landing'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Login from './Login'
import Nav from './Nav'
import { LoginProvider } from './Login/UserContext'
import PrivateRoute from './PrivateRoute'

function App() {
	return (
		<Router>
			<LoginProvider>
				<Nav>
					<Switch>
						<div className="container">
							<Route exact path="/" component={Landing} />
							<Route path="/login" component={Login} />
							<PrivateRoute path="/main" component={Main} />
						</div>
					</Switch>
				</Nav>
			</LoginProvider>
		</Router>
	)
}

export default App
