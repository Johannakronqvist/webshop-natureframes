import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, User, Cart } from '../model/Interfaces';
import './startPage.css';

interface Props {
	productData: Product[];
	setProductData: (val: any) => void;
	userData: User[];
	decreaseStock: (val: any) => void;
}

export default function StartPage({
	productData,
	setProductData,
	userData,
	decreaseStock
}: Props) {
	function saveToCart(product: Product) {
		let updateUserCart = JSON.parse(localStorage.getItem('loggedin') || '[]');
		let cart = updateUserCart.cart;

		if (cart === undefined) {
			const loggedOutUserObject = {
				name: '',
				username: '',
				id: '',
				loggedin: false,
				cart: [{ id: product.id, quantity: 1 }],
			};

			localStorage.setItem('loggedin', JSON.stringify(loggedOutUserObject));
		} else {
			if (cart.length === 0) {
				const cartObject = {
					id: product.id,
					quantity: 1,
				};

				updateUserCart.cart.push(cartObject);
				localStorage.setItem('loggedin', JSON.stringify(updateUserCart));
			} else {
				const findCartItem = updateUserCart.cart.find(
					(cartObject: Cart) => cartObject.id === product.id
				);

				if (findCartItem) {
					findCartItem.quantity += 1;

					localStorage.setItem('loggedin', JSON.stringify(updateUserCart));
				} else {
					const cartObject = {
						id: product.id,
						quantity: 1,
					};

					updateUserCart.cart.push(cartObject);
					localStorage.setItem('loggedin', JSON.stringify(updateUserCart));
				}
			}
		}

		decreaseStock(product);
	}

	return (
		<div>
			<ul className='productContainer'>
				{productData.map((product: Product) => (
					<li key={product.id}>
						<img src={product.image} alt={product.name} />
						<h2>{product.name}</h2>
						<p>{product.price} sek </p>
						<p className='stock'>Left in stock: {product.quantity - product.orderedQuantity}</p>
						<button
							className='addToCartBtn'
							onClick={() => saveToCart(product)}>
							add to cart
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
