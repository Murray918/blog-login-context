import React from 'react'
import logo from './logo.svg'
import './Logo.css'
import styles from './logo.modules.css'

export default ({ small }) => {
	return (
		<div className={!!small ? styles.small : null}>
			<img src={logo} className="App-logo" alt="logo" />
		</div>
	)
}
