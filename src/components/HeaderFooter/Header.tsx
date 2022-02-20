import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

	}, [])

	useEffect(()=> {

		setGetUSerStorage(JSON.parse( localStorage.getItem('loggedin') || '{}'))
		
	}, [loggedIn])

	const handleClick = () => {
	console.log('logging out')
	const getCart = JSON.parse(localStorage.getItem('loggedin') || '[]').cart

	const loggedOutUser = { name: '', id: '', loggedin: false, cart: getCart }

	setLoggedIn(false)
	localStorage.setItem( 'loggedin', JSON.stringify(loggedOutUser) )
	}

	return (
		<>
		<header>
			<h1>NATUREFRAMES</h1> 
			<div className='iconsContainer'>
				<a href="" className={loggedIn ? 'loggedIn iconContainer' : 'loggedOut'}> <AiOutlineUser className='faIcon' /> <span className='iconTexts' > User: {loggedIn ?  getUserStorage.name : ''}</span> </a>
				<Link to='/cart' className='iconContainer'> <AiOutlineShoppingCart className='faIcon'/></Link>
				<div className='iconContainer'> { !loggedIn ? <IoIosLogIn className='faIcon' onClick={ () => setSignIn('showLogInForm') } /> : <IoIosLogOut className='faIcon' onClick={ handleClick } /> } <span className='iconTexts' > {loggedIn ? 'Sign out' : 'Sign in'} </span> </div>
			</div>
		</header>

		<section className={signIn} >
			<Login setLoggedIn={setLoggedIn} setSignIn={setSignIn}/> 
		</section>
		</>
	 )
}
