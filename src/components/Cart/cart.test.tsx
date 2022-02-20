import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router} from 'react-router-dom'
import Cart from './Cart'
import StartPage from '../StartPage'
import Deer from '../../images/deer.jpg'
import Elephant from '../../images/elephant.jpg'	

const decreaseStock = jest.fn()
const increaseStock = jest.fn()
const productData = [
  {
    id: 1,
    name: 'Elephant', 
    description: 'Photo art of an elephant. A gorgeous black-and-white poster of a elephant photographed in Namibia.',
    price: 349, 
    image: Elephant,
    quantity: 30,
    orderedQuantity: 0,
    theme_words: ['animal', 'elephant', 'exotic']
  }, 
  {
    id: 3,
    name: 'Deer in autumn', 
    description: 'Photograph of a brown deer with large antlers, against a autumn woodland background. This magnificent creature is perfect to have as a statement piece on your wall!',
    price: 399, 
    image: Deer,
    quantity: 10, 
    orderedQuantity: 0,
    theme_words: ['animal', 'deer', 'woodland', 'autumn']
  }
  ]

  

describe('Cart page component', () => {

	test('test that cart component renders', () => {
		render(
			<Router> 
        <Cart decreaseStock={decreaseStock} increaseStock={increaseStock}/> 
      </Router>
		)
	} )

	test('test that clicked product is displayed in the cart', () => {
    render(<StartPage productData={productData} decreaseStock={decreaseStock}/>)

		const product = screen.getByText('Elephant' )


		userEvent.click(product)

		render(
			<Router> 
        <Cart decreaseStock={decreaseStock} increaseStock={increaseStock}/> 
      </Router>
		)

		const productText = screen.getByText('Elephant')

		expect(productText).toBeInTheDocument()
	})

  test('that product gets deleted when the X is pressed', () => {
    render(<StartPage productData={productData} decreaseStock={decreaseStock}/>)

		const productButtons = screen.getAllByRole('button', {name: 'add to cart'})

    console.log('Add to cart btns: ', productButtons[0])

   })

})