import React, { FormEvent, useState, useEffect } from 'react'
import './login.css'

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

		const userData = JSON.parse(localStorage.getItem('userdata') || '[]')
		const cartData = JSON.parse(localStorage.getItem('loggedin') || '[]')
		
			for( let i = 0; i < userData.length; i++) {
				if( userData[i].user_name === username && userData[i].password === password ) {

					const activeUser = {
						 name: userData[i].first_name, 
						 username: userData[i].user_name, 
						 id: userData[i].id, 
						 loggedin: true, 
             address: userData[i].adress,
						 cart: cartData.cart ? cartData.cart : userData[i].cart_items 
						}

					setLoggedIn(true)
					localStorage.setItem( 'loggedin', JSON.stringify(activeUser) )
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
          <span className={ validationUserName === 'unValid' ? 'show validationMessage' : 'hide' } >Username is not valid</span>
				</div>
				<div>
					<label>Password</label>
					<input type='password' onChange={ event => setPassWord(event.target.value) } className={validationPassword} />
          <span className={ validationPassword === 'unValid' ? 'show validationMessage' : 'hide' }>Password is not valid</span>
				</div>
				</div>
			<div>
				<button type='submit'>Log in</button>
			</div>
		</form>  

			
		</>
	)
}