import { render, screen } from '@testing-library/react'
import ProductData from '../model/productData'	
import StartPage from './StartPage'

describe('Start page component', () => { 

	test('that start page component renders all products', () => {
		render(<StartPage/>)

		let productCounter = ProductData.length

		const posters = screen.getAllByRole('img')
		console.log('post length', posters.length)

		expect(posters).toHaveLength(productCounter)
	})

	test('that product names are displayed', () => {
		render(<StartPage/>)

		const name = screen.getByText('Deer in autumn')

		expect(name).toBeInTheDocument()
	})

	test('that price is displayed with a product', () => {
		render(<StartPage/>)

		const [price] = screen.getAllByText('399 sek')
		console.log('price', price)

		expect(price).toBeInTheDocument()

	})

})
