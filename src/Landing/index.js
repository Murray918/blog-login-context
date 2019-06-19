import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

export default () => {
	return (
		<div className="App">
			<header className="App-header">
				<Logo large />
			</header>
			<Link to="/login">Login</Link>
		</div>
	)
}
