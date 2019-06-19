import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default ({ children }) => {
	return (
		<div >
			<nav id='Nav'>
				<ul className="main-nav">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/main/">Main</Link>
					</li>
					<li>
						<Link to="/login/">Login</Link>
					</li>
				</ul>
			</nav>
			{/* Make sure we can render the children */}
			<div className="container">{children}</div>
		</div>
	)
}
