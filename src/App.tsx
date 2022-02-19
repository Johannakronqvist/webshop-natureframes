import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import products from './model/productData';
import users from './model/userData';
import './App.css';
import Header from './components/HeaderFooter/Header';
import StartPage from './components/StartPage';
import Cart from './components/Cart/Cart';
import Footer from './components/HeaderFooter/Footer';
import {Product} from './model/Interfaces'

function App() {
	const [productData, setProductData] = useState([]);
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		if (!localStorage.getItem('productdata')) {
			localStorage.setItem('productdata', JSON.stringify(products));
			const setProducts = JSON.parse(
				localStorage.getItem('productdata') || '[]'
			);
			setProductData(setProducts);
		} else {
			const getProducts = JSON.parse(
				localStorage.getItem('productdata') || '[]'
			);
			setProductData(getProducts);
		}

		if (!localStorage.getItem('userdata')) {
			localStorage.setItem('userdata', JSON.stringify(users));
			const setUsers = JSON.parse(localStorage.getItem('userdata') || '[]');
			setUserData(setUsers);
		} else {
			const getUsers = JSON.parse(localStorage.getItem('userdata') || '[]');
			setUserData(getUsers);
		}
	}, []);

	function decreaseStock(productObject: Product) {
		let newStock;
		
		if(productObject.orderedQuantity < productObject.quantity){
			newStock = productObject.orderedQuantity + 1;
		} else {
			newStock = productObject.orderedQuantity;
		}

		let getProductData = JSON.parse(
			localStorage.getItem('productdata') || '[]'
		);

		const productIndex = getProductData.findIndex(
			(product: Product) => product.id === productObject.id
		);

		if (productIndex !== -1) {
			getProductData[productIndex].orderedQuantity = newStock;
		}

		localStorage.setItem('productdata', JSON.stringify(getProductData));

		setProductData(getProductData);
	}

	function increaseStock(productObject: Product) {
		let newStock;

		if(productObject.orderedQuantity > 0 ) {
			newStock = productObject.orderedQuantity - 1;
		} else {
			newStock = productObject.orderedQuantity
		}

		let getProductData = JSON.parse(
			localStorage.getItem('productdata') || '[]'
		);

		const productIndex = getProductData.findIndex(
			(product: Product) => product.id === productObject.id
		);

		if (productIndex !== -1) {
			getProductData[productIndex].orderedQuantity = newStock;
		}

		localStorage.setItem('productdata', JSON.stringify(getProductData));

		setProductData(getProductData);
	}

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<StartPage
							productData={productData}
							setProductData={setProductData}
							userData={userData}
							decreaseStock={decreaseStock}
						/>
					}
				/>
				<Route
					path='cart'
					element={
						<Cart
							productData={productData}
							setProductData={setProductData}
							userData={userData}
							decreaseStock={decreaseStock}
							increaseStock={increaseStock}
						/>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
