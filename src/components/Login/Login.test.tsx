import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import Header from '../HeaderFooter/Header'

const loggedIn = true 
const setLoggedIn = jest.fn()


describe('Login component', () => {

	// test('that login component renders', () => {

	// 	render(<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />)
	// })

	test('that login button is displayed on the start page', () => {
		render(<Header/>)

		//const loginButton = screen.getByRole('div', {name: 'Sign in'})
		const signInBtn = screen.getByText('Sign in') 

		expect(signInBtn).toBeInTheDocument()
	})
})