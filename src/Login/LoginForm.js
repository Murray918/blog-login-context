import React from 'react'
import './Login.css'
import { Redirect } from 'react-router-dom'

export default ({
	handleChange,
	handleLogin,
	username,
	password,
    isLoggedIn,
    location
}) => {
	console.log(handleLogin)
	const handleSubmit = event => {
		event.preventDefault()
		handleLogin(username)
	}
	return (
		<div className="form-container">
        {redirectUser(isLoggedIn , location)}
			<form onSubmit={handleSubmit} className="form">
				<div>
					<label>username</label>
					<input
						name="username"
						onChange={handleChange}
						type="text"
						value={username}
					/>
				</div>
				<div>
					<label>password</label>
					<input
						type="password"
						name={'password'}
						value={password}
						onChange={handleChange}
					/>
				</div>
				<div className="login-button-container">
					<button className="button-primary" type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	)
}

function redirectUser(condition, location) {
	return !!condition ? (
		<Redirect
			to={{
				pathname: '/main',
				state: { from: location }
			}}
		/>
	) : null
}
