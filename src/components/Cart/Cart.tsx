import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import { Product, User } from '../../model/Interfaces';
import productData from '../../model/productData';

interface Props {
	decreaseStock: (val: any) => void;
	increaseStock: (val: any) => void;
}

interface Cart {
	id: number;
	quantity: number;
}

export default function Cart({ decreaseStock, increaseStock}: Props) {
	const [productsInCart, setProductsInCart] = useState<Product[]>([]);
  const [loggedInUser, setLoggedInUser] = useState('');

	useEffect(() => {
		//Get cart from localstorage
		const getCartData = JSON.parse(
			localStorage.getItem('loggedin') || '[]'
		);

		const getProductData = JSON.parse(
			localStorage.getItem('productdata') || '[]'
		);

		let productArray: Product[] = [];

		if (getCartData.cart) {
			getProductData.map((product: Product) => {
				getCartData.cart.forEach((cartObject: Cart) => {
					if (product.id === cartObject.id) {
						productArray.push(product);
					}
				});
			});
		}

    console.log('address', getCartData.address)
		setProductsInCart(productArray);
    setLoggedInUser(getCartData.address);

	}, []);

	function decreaseSaldo(product: Product) {
		const copyProduct = product;
		decreaseStock(copyProduct);

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
		const copyProduct = product;
		increaseStock(copyProduct);

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

  function deleteFromCart(product: Product) {

    const copyProductsInCart = productsInCart

    const updatedCart = copyProductsInCart.filter( productObj => {
      return productObj.id !== product.id
    })

    let getShoppingStatus =  JSON.parse(localStorage.getItem('loggedin') || '[]')
    getShoppingStatus.cart = updatedCart

    localStorage.setItem('loggedin', JSON.stringify(getShoppingStatus))
    setProductsInCart(updatedCart)

    }

	let total = 0;
	productsInCart.forEach((el) => {
		total += el.price * el.orderedQuantity;
	});

  // const loggedInUserAddress = loggedInUser ? 
  // <ul className='adressContainer'>
  //   <h4>Shipping address</h4>
  //   <li><h5>Street:</h5> {loggedInUser.street}</li>
  //   <li><h5>Area code:</h5> {loggedInUser.area_code} <h5>City:</h5> {loggedInUser.city}</li>
  // </ul>
  // :
  // <p>Please sign in to checkout</p>

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
									<section className='qtyCounter'>
										<button onClick={() => increaseSaldo(product)}> - </button>
										<div className='qtyOrdered'> {product.orderedQuantity}</div>
										<button onClick={() => decreaseSaldo(product)}> + </button>
                    <button className='deleteBtn' onClick={ () => deleteFromCart(product) }>X</button>
									</section>
								</div>
							</li>
						))}
					</ul>
				</section>
				<section className='rightSection'>
					<h2>Total: {total} sek</h2>
				</section>
			</div>
		</>
	);
}
