import { useState, useEffect } from 'react'
import ProductData from '../model/productData'
import './startPage.css'

export default function StartPage() {

	// const [loggedIn, setLoggedin] = useState(false)

	// useEffect( () => {
	// 	if( loggedIn === true ) {
	// 		console.log('logged in true')
	// 		localStorage.setItem('loggedin', JSON.stringify(true))
	// 	} else {
	// 		console.log('logged in false')
	// 		localStorage.setItem('loggedin', JSON.stringify(false))
	// 	}
	// }, [loggedIn])

	return (
		<div>

			<ul>
				{ProductData.map( product => ( 
				<li key={product.id}>
					<img src={product.image} alt={product.name}/>
					<h2>{product.name}</h2>
					<p>{product.price} sek</p>
				</li>
				))}
			</ul>

		</div>
	)
}
