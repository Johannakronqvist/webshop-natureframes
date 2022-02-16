import { userInfo } from 'os'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductData from '../model/productData'
import userData from '../model/userData'
import './startPage.css'

export default function StartPage() {
	const [userCart, setUserCart] = useState([])
	const [activeUser, setActiveuser] = useState([])

	function saveToCart(product: object) {
		const retriveStorage = JSON.parse(localStorage.getItem('loggedin') || '')
		console.log('retrivestorage', retriveStorage)

		if (retriveStorage) {
			const activeUserId = userData.filter( user => {
			return user.id === retriveStorage.id
		})

		console.log('activeUser', activeUserId)
		}
		
	}

	return (
		<div>
			
			<ul>
				{ProductData.map( product => ( 
					<li key={product.id}>
						<img src={product.image} alt={product.name}/>
						<h2>{product.name}</h2>
						<p>{product.price} sek </p>
						<button onClick={ () => saveToCart(product) } >add to cart</button>
					</li>
				))}
			</ul>

		</div>
	)
}
