import React, { FormEvent, useState, useEffect } from 'react'
import './login.css'
import userData from '../../model/userData'

interface Props {
	loggedIn: boolean,
	setLoggedIn: (logged: boolean) => void,
	setSignIn: (sign: string) => void
}

export default function Login({loggedIn, setLoggedIn, setSignIn}: Props) {
	const [username, setUserName] = useState<string>('')
	const [password, setPassWord] = useState<string>('')
	const [validationUserName, setvalidationUserName] = useState<string>('')
	const [validationPassword, setvalidationPassword] = useState<string>('')
	
	const handleSubmit = ( event: FormEvent ) => {
		event.preventDefault()

			for( let i = 0; i < userData.length; i++) {
				if( userData[i].user_name === username && userData[i].password === password) {
					console.log('username and password exist')
					const userName = { name: userData[i].first_name, id: userData[i].id, loggedin: true}
					setLoggedIn(true)
					localStorage.setItem( 'loggedin', JSON.stringify(userName) )
					setSignIn('hideLogInForm')
					setvalidationPassword('')
					setvalidationUserName('')
					return 
				} else if ( userData[i].user_name !== username && userData[i].password !== password ) {
					setvalidationPassword('unValid')
					setvalidationUserName('unValid')
					return false
				} else if ( userData[i].user_name !== username ) {
					setvalidationUserName('unValid')
					return false
				} else if ( userData[i].password !== password ) {
					setvalidationPassword('unValid')
					return false
				}
			}
	}


	return (
		<>
		<form onSubmit={handleSubmit} >
			<div>
				<h2>Login</h2>
				<div>
					<label>Username</label>
					<input type='text' onChange={ event => setUserName(event.target.value) } className={validationUserName} />
				</div>
				<div>
					<label>Password</label>
					<input type='password' onChange={ event => setPassWord(event.target.value) } className={validationPassword} />
				</div>
				</div>
			<div>
				<button type='submit'>Log in</button>
			</div>
		</form>  

			
		</>
	)
}