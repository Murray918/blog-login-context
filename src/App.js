import React from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Login from './Login'
import Nav from './Nav'
import Logo from './Logo'
import { LoginProvider } from './Login/UserContext'

function App() {
	return (
		<Router>
			<LoginProvider>
				<Nav>
					<div className="container">
						<div className="App">
							<header className="App-header">
								<Logo large />
							</header>
						</div>
						<Switch>
							<Route exact path="/" component={Login} />
							<Route path="/main/" component={Main} />
						</Switch>
					</div>
				</Nav>
			</LoginProvider>
		</Router>
	)
}

export default App
