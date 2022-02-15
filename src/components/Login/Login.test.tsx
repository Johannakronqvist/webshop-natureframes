import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
//import UserData from '../../model/userData'
import Login from './Login'
import Header from '../HeaderFooter/Header'



describe('Login component', () => {

	test('that login component renders', () => {
		render(<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />)
	})

	test('that login button is displayed on the start page', () => {
		render(<Header/>)

		const loginButton = screen.getByRole('button', {name: 'Login'})

		expect(loginButton).toBeInTheDocument()
	})

	// test('that user name is displayed when loged in', () => {
	// 	render(<Login/>)

	// 	//login process
	// 	const loginButton = screen.getByRole('button', {name: 'Log in'})

	// 	const getUserName = screen.getByLabelText('Username')
	// 	console.log('getUserName', getUserName)
	// 	//om username matachar user name i datan return data.name
	// 	const userArray = UserData.map(user => {
	// 		return user.userName
	// 	})

	// 	console.log('user array', userArray)

	// 	userEvent.click(loginButton)

	// 	render(<StartPage/>)

	// 	const userName = screen.getByRole('')

	// 	//titta att namn visas
	// })
})