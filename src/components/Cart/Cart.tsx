import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import { Product, User } from '../../model/Interfaces'

interface Props {
	productData: Product[]
	userData: User[]
}

export default function Cart( {productData, userData}: Props ) {
	const [productsInCart, setProductsInCart] = useState<Product[]>([])

	useEffect( () => {
		//Get cart from localstorage
		const getCartData = JSON.parse(localStorage.getItem('loggedin') || '[]').cart
		const getProductData = JSON.parse(localStorage.getItem('productdata') || '[]')
		let productArray: Product[] = []

		getProductData.map( (product: Product) => {
			getCartData.forEach( (id: number) => {
				if(product.id === id) {
					productArray.push(product)
				}
			})
		})

		setProductsInCart(productArray)

	}, [])

	return (
		<>
		<div className='container'>
			<section className='leftSection'>
				<h2>Cart</h2>
				<Link to='/'> Continue shopping </Link>

				<ul className='cartItemsContainer'>
					{productsInCart.map( (product: Product) => ( 
						<li key={product.id}>
							<img src={product.image} alt={product.name}/>
							<div>
							<h2>{product.name}</h2>
							<p>{product.price} sek </p>
							<section> <button>-</button> <span>0</span> <button>+</button> </section>
							</div>
						</li>
						))}
				</ul>
			</section>
			<section className='rightSection'>
				<h3>Total</h3>
			
			</section>
		</div>
		</>
	)
}
