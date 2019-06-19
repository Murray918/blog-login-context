import React, { createContext, Component } from 'react'

const { Provider, Consumer } = createContext()

class LoginProvider extends Component {
	state = {
		username: 'Andrew',
		isLoggedIn: false
	}

	handleLogin = username => {
		this.setState({
			username: username,
			isLoggedIn: !this.state.isLoggedIn
		})
	}

	render() {
		return (
			<Provider
				value={{
					username: this.state.username,
					isLoggedIn: this.state.isLoggedIn,
					handleLogin: this.handleLogin
				}}
			>
				{this.props.children}
			</Provider>
		)
	}
}

export { Consumer as LoginConsumer, LoginProvider }
