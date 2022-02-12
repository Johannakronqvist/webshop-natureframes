import ProductData from '../model/productData'
import './startPage.css'

export default function StartPage() {

	return (
		<div>

			<ul>
				{ProductData.map( product => ( 
				<li key={product.id}>
					<img src={product.image} alt={product.name}/>
					<h2>{product.name}</h2>
					<p>{product.price} sek</p>
				</li>
				))}
			</ul>

		</div>
	)
}
