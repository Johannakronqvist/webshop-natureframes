import React from 'react';
import './App.css';
import Header from './components/HeaderFooter/Header'
import StartPage from './components/StartPage'
import Footer from './components/HeaderFooter/Footer'

function App() {
  return (
    <div className="App">
		<Header/>
		<StartPage/>
		<Footer/>
    </div>
  );
}

export default App;
