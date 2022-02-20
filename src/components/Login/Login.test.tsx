import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import Login from './Login'
import Header from '../HeaderFooter/Header'
import {App, LocationDisplay} from '../../App'

// const loggedIn = true 
// const setLoggedIn = jest.fn()


describe('Login component', () => {

	// test('that login component renders', () => {

	// 	render(<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />)
	// })

	test('that "sign in" button is displayed in the header', () => {
    const history = createMemoryHistory();

    render(<Header/>)

		render(
      <Router history={history}>
        <App/>
      </Router>
    )

		const signInBtn = screen.getByText('Sign in') 

    userEvent.click(signInBtn)

    //render(<Login/>)

		expect('Login').toBeInTheDocument()
	})
})