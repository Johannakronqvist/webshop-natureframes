import { render, screen } from '@testing-library/react'
import BeachMountains from '../images/beach-mountains.jpg'
import CherryBlossom from '../images/cherry-blossom.jpg'
import Deer from '../images/deer.jpg'
import Elephant from '../images/elephant.jpg'
//import ProductData from '../model/productData'	
import StartPage from './StartPage'

const productData = [{
	id: 1,
	name: 'Elephant', 
	description: 'Photo art of an elephant. A gorgeous black-and-white poster of a elephant photographed in Namibia.',
	price: 349, 
	image: Elephant,
	quantity: 30, 
	theme_words: ['animal', 'elephant', 'exotic']
}, 
{
	id: 2,
	name: 'Cherry blossoms', 
	description: 'Photograph of beautiful cherry blossoms against a blue sky on a clear day.',
	price: 299, 
	image: CherryBlossom,
	quantity: 20, 
	theme_words: ['cherry', 'flowers', 'spring', 'sky']
}, 
{
	id: 3,
	name: 'Deer in autumn', 
	description: 'Photograph of a brown deer with large antlers, against a autumn woodland background. This magnificent creature is perfect to have as a statement piece on your wall!',
	price: 399, 
	image: Deer,
	quantity: 10, 
	theme_words: ['animal', 'deer', 'woodland', 'autumn']
}]

const userData = [{
	id: 1,
	first_name: 'Karin',
	last_name: 'Bengtsson',
	email: 'karin75@mail.nu',
	adress: {
		street: 'Ängdalsvägen 75', 
		area_code: 23643, 
		city: 'Ängstad',
	},
	user_name: 'Karin75',
	password: '12345',
	logedin: false,
	cart_items: [] 
},
{
	id: 2,
	first_name: 'Nikolaj',
	last_name: 'Krantz',
	email: 'krantz.niko@mail.nu',
	adress: {
		street: 'Bergkulla 5', 
		area_code: 78654, 
		city: 'Bagarstad',
	},
	user_name: 'Niko_K',
	password: '23456',
	logedin: false,
	cart_items: [] 
}]

describe('Start page component', () => { 

	test('that start page component renders all products', () => {
		render(<StartPage productData={productData} userData={userData}/>)

		let productCounter = productData.length

		const posters = screen.getAllByRole('img')
		console.log('post length', posters.length)

		expect(posters).toHaveLength(productCounter)
	})

	test('that product names are displayed', () => {
		render(<StartPage productData={productData} userData={userData}/>)

		const name = screen.getByText('Deer in autumn')

		expect(name).toBeInTheDocument()
	})

	test('that price is displayed with a product', () => {
		render(<StartPage productData={productData} userData={userData}/>)

		const [price] = screen.getAllByText('399 sek')
		console.log('price', price)

		expect(price).toBeInTheDocument()

	})

})
