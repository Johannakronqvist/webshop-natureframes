import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, User, Cart } from '../model/Interfaces';
import './startPage.css';

interface Props {
	productData: Product[];
	decreaseStock: (val: any) => void;
}

export default function StartPage({
	productData,
	decreaseStock,
}: Props) {
	const [searchValue, setSearchValue] = useState('');

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

	let productToShow = !searchValue
		? productData
		: productData.filter((item) => {
				return item.name.toLowerCase().includes(searchValue.toLowerCase());
		  });

	return (
		<div>
			<section className='searchBoxContainer'>
				<form>
					<label htmlFor='search'> What are you looking for? </label>
					<input
						onChange={(e) => setSearchValue(e.target.value)}
						type='text'
						name='search'
					/>
				</form>
			</section>
			<ul className='productContainer'>
				{productToShow.map((product: Product) => (
					<li key={product.id}>
						<img src={product.image} alt={product.name} />
						<h2>{product.name}</h2>
						<p>{product.price} sek </p>
						<p className='stock'>
							Left in stock: {product.quantity - product.orderedQuantity}
						</p>
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
