import {User} from './Interfaces'

const userData: User[] = [
	{
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
	}
] 

export default userData
