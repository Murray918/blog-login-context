import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Login from './Login'
import Nav from './Nav'

function App() {
	return (
		<Router>
			<Nav>
				<div className="container">
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
						</header>
					</div>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/main/" component={Main} />
					</Switch>
				</div>
			</Nav>
		</Router>
	)
}

export default App
