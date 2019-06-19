import React from 'react'
import './Login.css'

export default () => {
	return (
		<div className="form-container">
			<form className="form">
				<div>
					<label>username</label>
					<input type="text" />
				</div>
				<div>
					<label>password</label>
					<input type="password" />
				</div>
				<div>
					<input type="submit" />
				</div>
			</form>
		</div>
	)
}
