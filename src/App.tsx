import React from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/HeaderFooter/Header'
import StartPage from './components/StartPage'
import Cart from './components/Cart/Cart'
import Footer from './components/HeaderFooter/Footer' 

function App() {
  return (
    <div className="App">
		
		<Header/>
		<Routes>
			<Route path='/' element={<StartPage />} />
			<Route path='cart' element={<Cart />} />
		</Routes>
		<Footer/> 
		
    </div>
  );
}

export default App;
