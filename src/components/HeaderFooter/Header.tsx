import { useState, useEffect } from 'react'
import './header.css'
import Login from '../Login/Login'
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";


export default function Header() {
	const [signIn, setSignIn] = useState<string>('hideLogInForm')
	const [logOutBtn, setLogOutBtn] = useState<string>('hide')
	const [loggedIn, setLoggedIn] = useState<boolean>(false)
	const [getUserStorage, setGetUSerStorage] = useState(JSON.parse( localStorage.getItem('loggedin') || '{}') )
	
	useEffect( () => {
		setLoggedIn(JSON.parse( localStorage.getItem('loggedin') || '{}').loggedin)
		setGetUSerStorage(JSON.parse( localStorage.getItem('loggedin') || '{}'))

		//om true visa möjlighet till checkout
		//annars visa "log in  to continue to checkout"
	}, [])

	useEffect(()=> {

		setGetUSerStorage(JSON.parse( localStorage.getItem('loggedin') || '{}'))
		
	}, [loggedIn])

	return (
		<>
		<header>
			<h1>NATUREFRAMES</h1> 
			<div className='iconsContainer'>
				<a href="" className={loggedIn ? 'loggedIn iconContainer' : 'loggedOut'}> <AiOutlineUser className='faIcon' /> <span className='iconTexts' > User: {loggedIn ?  getUserStorage.name : ''}</span> </a>
				<a href="" className='iconContainer'> <AiOutlineShoppingCart className='faIcon'/> </a>
				<div className='iconContainer'> { !loggedIn ? <IoIosLogIn className='faIcon' onClick={ () => setSignIn('showLogInForm') } /> : <IoIosLogOut className='faIcon'  onClick={ () => setSignIn('showLogInForm')} /> } <span className='iconTexts' > {loggedIn ? 'Sign out' : 'sign in'} </span> </div>
			</div>
		</header>
		<section className={signIn} >
			<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> 
		</section>
		</>
	 )
}
