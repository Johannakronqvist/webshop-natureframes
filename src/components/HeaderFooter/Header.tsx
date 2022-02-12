import './header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
	return (
		<>
		<header>
		<h1>NATUREFRAMES</h1> 
		<div className='iconsContainer'>
			<div><FontAwesomeIcon className='faIcon' icon={faUser}></FontAwesomeIcon></div>
			<div><FontAwesomeIcon className='faIcon' icon={faCartShopping}></FontAwesomeIcon></div>
			<button>Login</button>
		</div>
		</header>
		</>
	 )
}
