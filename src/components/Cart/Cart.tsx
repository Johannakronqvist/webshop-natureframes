import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import { Product, User } from '../../model/Interfaces';
import productData from '../../model/productData'

interface Props {
	productData: Product[];
	setProductData: (val: any) => void;
	userData: User[];
	decreaseStock: (val: any) => void;
	increaseStock: (val: any) => void;
}

interface Cart {
	id: number;
	quantity: number;
}

export default function Cart({ productData, setProductData, userData, decreaseStock, increaseStock }: Props) {
	const [productsInCart, setProductsInCart] = useState<Product[]>([]);

	useEffect(() => {
		//Get cart from localstorage
		const getCartData = JSON.parse(
			localStorage.getItem('loggedin') || '[]'
		).cart;

		const getProductData = JSON.parse(
			localStorage.getItem('productdata') || '[]'
		);

		let productArray: Product[] = [];

		if(getCartData){
			getProductData.map((product: Product) => {
				getCartData.forEach((cartObject: Cart) => {
					if (product.id === cartObject.id) {
						productArray.push(product);
					}
				});
			});
		}

		setProductsInCart(productArray);
		
	}, []);

	function decreaseSaldo(product: Product) {
		const copyProduct = product
		decreaseStock(copyProduct) 

		const getCartData = JSON.parse(
			localStorage.getItem('loggedin') || '[]'
		).cart;
		const getProductData = JSON.parse(
			localStorage.getItem('productdata') || '[]'
		);
		let productArray: Product[] = [];

		getProductData.map((product: Product) => {
			getCartData.forEach((cartObject: Cart) => {
				if (product.id === cartObject.id) {
					productArray.push(product);
				}
			});
		});

		setProductsInCart(productArray);
	}

	const increaseSaldo = (product: Product) => {
		const copyProduct = product
		increaseStock(copyProduct)

		const getCartData = JSON.parse(
			localStorage.getItem('loggedin') || '[]'
		).cart;
		const getProductData = JSON.parse(
			localStorage.getItem('productdata') || '[]'
		);
		let productArray: Product[] = [];

		getProductData.map((product: Product) => {
			getCartData.forEach((cartObject: Cart) => {
				if (product.id === cartObject.id) {
					productArray.push(product);
				}
			});
		});

		setProductsInCart(productArray);
	};

	let total = 0;
	productsInCart.forEach(el => {
		total += el.price * el.orderedQuantity
	})


	return (
		<>
			<div className='container'>
				<section className='leftSection'>
					<h2>Cart</h2>
					<Link to='/'> Continue shopping </Link>

					<ul className='cartItemsContainer'>
						{productsInCart.map((product: Product) => (
							<li key={product.id}>
								<img src={product.image} alt={product.name} />
								<div>
									<h2>{product.name}</h2>
									<p>{product.price} sek </p>
									<section>
										<button onClick={() => increaseSaldo(product)}>-</button>
										<span> {product.orderedQuantity}</span>
										<button onClick={() => decreaseSaldo(product)}>+</button>
									</section>
								</div>
							</li>
						))}
					</ul>
				</section>
				<section className='rightSection'>
					<h3>Total: {total}</h3>


				</section>
			</div>
		</>
	);
}
