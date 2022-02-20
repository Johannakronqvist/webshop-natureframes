import { render, screen } from '@testing-library/react'
import CherryBlossom from '../images/cherry-blossom.jpg'
import Deer from '../images/deer.jpg'
import Elephant from '../images/elephant.jpg'	
import StartPage from './StartPage'
import '@testing-library/jest-dom'

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
  id: 2,
  name: 'Cherry blossoms', 
  description: 'Photograph of beautiful cherry blossoms against a blue sky on a clear day.',
  price: 299, 
  image: CherryBlossom,
  quantity: 20, 
  orderedQuantity: 0,
  theme_words: ['cherry', 'flowers', 'spring', 'sky']
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

const decreaseStock = jest.fn()

describe('Start page component', () => { 

	test('that start page component renders all products', () => {
		render(<StartPage productData={productData} decreaseStock={decreaseStock}/>)

		let productCounter = productData.length

		const posters = screen.getAllByRole('img')
		console.log('post length', posters.length)

		expect(posters).toHaveLength(productCounter)
	})

  test('that product names are displayed', () => {
    render(<StartPage productData={productData} decreaseStock={decreaseStock}/>)

		const name = screen.getByText('Deer in autumn')

		expect(name).toBeInTheDocument()
	})

	test('that price is displayed with a product', () => {
    render(<StartPage productData={productData} decreaseStock={decreaseStock}/>)

		const [price] = screen.getAllByText('399 sek')
		console.log('price', price)

		expect(price).toBeInTheDocument()

	})

})
