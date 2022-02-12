import {Product} from './Interfaces'
import BeachMountains from '../images/beach-mountains.jpg'
import CherryBlossom from '../images/cherry-blossom.jpg'
import Deer from '../images/deer.jpg'
import Elephant from '../images/elephant.jpg'
import AutumnMountains from '../images/autumn-mountains.jpg'
import Autumn from '../images/autumn.jpg'
import Flamingo from '../images/flamingo.jpg'
import Forest from '../images/forest.jpg'
import LilyPad from '../images/lily-pad.jpg'
import NightMountains from '../images/night-mountains.jpg'
import OceanTail from '../images/ocean-tail.jpg'
import Ocean from '../images/ocean.jpg'
import WinterForest from '../images/winter-forest.jpg'

const productData: Product[] = [
	{
		id: 1,
		name: 'Beach day', 
		description: 'Photograph of magestic mountain cliffs next to the sandy beach on a beatiful island.',
		price: 349, 
		image: BeachMountains,
		quantity: 16, 
		theme_words: ['beach', 'mountains', 'summer', 'island', 'exotic']
	}, 
	{
		id: 2,
		name: 'Cherry blossoms', 
		description: 'Photograph of beautiful cherry blossoms against a blue sky on a clear day.',
		price: 299, 
		image: CherryBlossom,
		quantity: 20, 
		theme_words: ['cherry', 'flowers', 'spring', 'sky']
	}, 
	{
		id: 3,
		name: 'Deer in autumn', 
		description: 'Photograph of a brown deer with large antlers, against a autumn woodland background. This magnificent creature is perfect to have as a statement piece on your wall!',
		price: 399, 
		image: Deer,
		quantity: 10, 
		theme_words: ['animal', 'deer', 'woodland', 'autumn']
	}, 
	{
		id: 4,
		name: 'Elephant', 
		description: 'Photo art of an elephant. A gorgeous black-and-white poster of a elephant photographed in Namibia.',
		price: 349, 
		image: Elephant,
		quantity: 30, 
		theme_words: ['animal', 'elephant', 'exotic']
	}, 
	{
		id: 5,
		name: 'Mouintan landscape in autumn', 
		description: 'Photograph of a grand mountain landscape in autumn.',
		price: 399, 
		image: AutumnMountains,
		quantity: 16, 
		theme_words: ['mountains', 'landscape', 'autumn', 'fall']
	},
	{
		id: 6,
		name: 'Autumn woodlands', 
		description: 'Photographed forest painted in a autumn palette in rich golden and burnt tones.',
		price: 299, 
		image: Autumn,
		quantity: 12, 
		theme_words: ['autumn', 'fall', 'woodland', 'forest']
	}, 
	{
		id: 7,
		name: 'Flamingo in the ocean', 
		description: 'Quirky photo art of an inflatable flamingo in the ocean.',
		price: 299, 
		image: Flamingo,
		quantity: 12, 
		theme_words: ['flamingo', 'ocean', 'water']
	}, 
	{
		id: 8,
		name: 'Forest', 
		description: 'Photograph of a forest with tall trees covered in fog. This peaceful print fits perfectly in living rooms for that calm and tranquil atmosphere.',
		price: 349, 
		image: Forest,
		quantity: 32,
		theme_words: ['forest', 'woodland']
	}, 
	{
		id: 9,
		name: 'Water lilie in the pond', 
		description: 'Water lilie in a pond. This photograph looks almost like it could be a painting, creating a romantic natural environment in your home. ',
		price: 399, 
		image: LilyPad,
		quantity: 32,
		theme_words: ['water lilie', 'flower', 'lily pad', 'water']
	}, 
	{
		id: 10,
		name: 'Mountains in the night', 
		description: 'Dramatic mountains photographed on a stary night',
		price: 399, 
		image: NightMountains,
		quantity: 26,
		theme_words: ['landscape', 'mountain', 'night']
	}, 
	{
		id: 11,
		name: 'Whale dissapearing into the ocean', 
		description: 'Photograph capturing a whale tail swiftly dissapearing in the ocean',
		price: 349, 
		image: OceanTail,
		quantity: 14,
		theme_words: ['ocean', 'whale', 'animal', 'water']
	}, 
	{
		id: 12,
		name: 'shorelines', 
		description: 'Photograph of a calm shoreline with a wave touching the beach.',
		price: 299, 
		image: Ocean,
		quantity: 40,
		theme_words: ['ocean', 'beach', 'water', 'exotic']
	}, 
	{
		id: 13,
		name: 'winter woodlands', 
		description: 'Photograph of forest fir trees surrounded by snow. You can almost feel the cold winter breeze by looking at this print.',
		price: 349, 
		image: WinterForest,
		quantity: 29,
		theme_words: ['woodland', 'winter', 'forest']
	}

]

export default productData