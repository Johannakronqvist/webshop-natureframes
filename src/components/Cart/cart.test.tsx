import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import {Router} from 'react-router-dom'
import Cart from './Cart'
import Header from '../HeaderFooter/Header'

describe('Cart page component', () => {
	// test('test that cart component renders', () => {
	// 	render(
	// 		<MemoryRouter> <Cart/> </MemoryRouter>
	// 	)
	// } )

	// test('test that clicked product is displayed in the cart', () => {
	// 	render(<Header/>)		

	// 	const product = screen.getByRole('Link', {name: 'Elephant'} )

	// 	userEvent.click(product)

	// 	render(
	// 		<MemoryRouter> <Cart/> </MemoryRouter>
	// 	)

	// 	const productText = screen.getByText('Elephant')

	// 	expect(productText).toBeInTheDocument()
	// } )
})