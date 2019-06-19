import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { LoginConsumer } from '../Login/UserContext'

export default ({ children }) => {
	return (
		<LoginConsumer>
			{({username}) => {
			
				return (
					<div>
						<nav id="Nav">
							<ul className="main-nav">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/main/">Main</Link>
								</li>
								<li>
									{username}
								</li>
							</ul>
						</nav>
						<div className="container">{children}</div>
					</div>
				)
			}}
		</LoginConsumer>
	)
}
