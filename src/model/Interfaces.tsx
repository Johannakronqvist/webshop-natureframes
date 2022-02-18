export interface Cart {
	id: number
	quantity: number
}

export interface User {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	adress: object; 
	user_name: string;
	password: string;
	logedin: boolean;
	cart_items: Cart[]; 
}

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	quantity: number;
	theme_words: Cart[];
}