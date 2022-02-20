import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {MemoryRouter as Router} from 'react-router-dom'
import Login from './Login'
import Header from '../HeaderFooter/Header'

const setLoggedIn = jest.fn()
const setSignIn = jest.fn()

describe('Login component', () => {

	test('that login component renders', () => {

		render(<Login setLoggedIn={setLoggedIn} setSignIn={setSignIn}/>)

	})

	test('that "sign in" button is displayed in the header', () => {

		render(
      <Router>
        <Header/>
      </Router>
    )

		const signInBtn = screen.getByText('Sign in') 

    userEvent.click(signInBtn)

    const login = screen.getByText('Login')

		expect(login).toBeInTheDocument()
	})
})