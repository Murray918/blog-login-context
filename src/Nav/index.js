import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Logo from '../Logo'
import { LoginConsumer } from '../Login/UserContext'

export default ({ children }) => {
	return (
		<LoginConsumer>
			{({ username }) => {
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
									<div className="logo-username-wrapper">
										<ul className="logo-username-list">
											<li>
												<Logo small/>
											</li>
											<li>{username}</li>
										</ul>
									</div>
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
