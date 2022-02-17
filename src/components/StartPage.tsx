import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product, User } from '../model/Interfaces'
import './startPage.css'

interface Props {
	productData: Product[]
	userData: User[]
}

export default function StartPage( {productData, userData}: Props ) {

	function saveToCart(product: Product) {
		let updateUserCart = JSON.parse(localStorage.getItem('loggedin') || '')

		updateUserCart.cart.push(product.id)
		localStorage.setItem('loggedin', JSON.stringify(updateUserCart))
	}

	return (
		<div>
			
			<ul>
				{productData.map( (product: Product) => ( 
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
