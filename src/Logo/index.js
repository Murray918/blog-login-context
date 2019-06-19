import React from 'react'
import logo from './logo.svg'
import './Logo.css'
import styles from './logo.module.css'

export default ({ small }) => {
	return (
		<div>
			<img
				className={!!small ? `${styles.small} App-logo` : 'App-logo'}
				src={logo}
				alt="logo"
			/>
		</div>
	)
}
