import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { LoginConsumer } from './UserContext'

export default class Login extends Component {
	state = {
		username: '',
		password: ''
	}

	handleChange = event => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		})
	}

	render() {
		return (
			<LoginConsumer>
				{({ handleLogin, isLoggedIn }) => (
					<LoginForm
						username={this.state.username}
						password={this.state.password}
						handleLogin={handleLogin}
						handleChange={this.handleChange}
						isLoggedIn={isLoggedIn}
					/>
				)}
			</LoginConsumer>
		)
	}
}
