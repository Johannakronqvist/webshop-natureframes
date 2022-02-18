import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product, User, Cart } from '../model/Interfaces'
import './startPage.css'

interface Props {
	productData: Product[]
	setProductData: (val: any) => void
	userData: User[]
}

export default function StartPage( {productData, setProductData, userData}: Props ) {

	function saveToCart(product: Product) {
		let updateUserCart = JSON.parse(localStorage.getItem('loggedin') || '[]')
		let cart = updateUserCart.cart

		if ( cart.length === 0 ) {
			const cartObject = {
				id: product.id, 
				quantity: 1
			}
			
			const updateCart = updateUserCart.cart.push(cartObject)
			localStorage.setItem('loggedin', JSON.stringify(updateUserCart))

		} else {
			cart.forEach( (cartObject: Cart ) => {

				if( cartObject.id === product.id ) {
					const cartObjectIndex = cart.findIndex( (cartObject: Cart ) => cartObject.id === product.id )
				
					updateUserCart.cart[cartObjectIndex].quantity += 1
	
					localStorage.setItem('loggedin', JSON.stringify(updateUserCart))
	
				} else {
					const cartObject = {
						id: product.id, 
						quantity: 1
					}

					const updateCart = updateUserCart.cart.push(cartObject)
					localStorage.setItem('loggedin', JSON.stringify(updateUserCart))
				}
			})	
		}

		decreaseStock(product)
	}

	function decreaseStock(productObject: Product) {

		const newStock = productObject.quantity - 1
		
		let getProductData = JSON.parse(localStorage.getItem('productdata') || '[]')

		console.log(getProductData)

		const productIndex = getProductData.findIndex( (product: Product) => product.id === productObject.id)

		if ( productIndex !== -1 ) {
			getProductData[productIndex].quantity = newStock
		}
		
		localStorage.setItem('productdata', JSON.stringify(getProductData))
	
		setProductData( getProductData )	
	}

	return (
		<div>
			
			<ul className='productContainer'>
				{productData.map( (product: Product) => ( 
					<li key={product.id}>
						<img src={product.image} alt={product.name}/>
						<h2>{product.name}</h2>
						<p>{product.price} sek </p>
						<p className='stock'>Left in stock: {product.quantity}</p>
						<button className='addToCartBtn' onClick={ () => saveToCart(product) } >add to cart</button>
					</li>
				))}
			</ul>

		</div>
	)
}
