import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { LoginConsumer } from '../Login/UserContext'

export default ({ component: Component, ...rest }) => {
	return (
		<LoginConsumer>
			{({ isLoggedIn }) => (
				<Route
					{...rest}
					render={props =>
						isLoggedIn ? (
							<Component {...props} />
						) : (
							<Redirect
								to={{
									pathname: '/login',
									state: { from: props.location }
								}}
							/>
						)
					}
				/>
			)}
		</LoginConsumer>
	)
}
