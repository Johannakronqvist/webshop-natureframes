import React, { FormEvent, useState, useEffect } from 'react'
import './login.css'
import userData from '../../model/userData'

interface Props {
	loggedIn: boolean,
	setLoggedIn: (logged: boolean) => void
}

export default function Login({loggedIn, setLoggedIn}: Props) {
	const [username, setUserName] = useState('')
	const [password, setPassWord] = useState('')
	const [display, setDisplay] = useState<string>('show')
	
	const handleSubmit = ( event: FormEvent ) => {
		event.preventDefault()
		
			for( let i = 0; i < userData.length; i++) {
				if( userData[i].user_name === username && userData[i].password === password) {
					console.log('username and password exist')
					const userName = { name: userData[i].first_name, loggedin: true}
					setLoggedIn(true)
					localStorage.setItem( 'loggedin', JSON.stringify(userName) )
					return 
				}
			}

			setDisplay('hide')

	}

		
	const handleClick = () => {
		console.log('logging out')

		const loggedOutUser = { name: '', loggedin: false }

		setLoggedIn(false)
		localStorage.setItem( 'loggedin', JSON.stringify(loggedOutUser) )
		setDisplay('hide')
	}


	return (
		<>
		{ loggedIn ? 
		<button onClick={handleClick} className={display} >Log out</button> 
		: <form onSubmit={handleSubmit} className={display} >
			<div>
				<h2>Login</h2>
				<div>
					<label>Username</label>
					<input type='text' onChange={ event => setUserName(event.target.value) } required/>
				</div>
				<div>
					<label>Password</label>
					<input type='password' onChange={ event => setPassWord(event.target.value) } required/>
				</div>
				</div>
			<div>
				<button type='submit'>Log in</button>
			</div>
		</form>  
		}
			
		</>
	)
}