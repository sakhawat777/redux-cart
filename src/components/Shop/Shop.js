import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
	//console.log(props);
	// const products = [
	// 	{ name: 'HP', id: 1 },
	// 	{ name: 'Dell', id: 2 },
	// 	{ name: 'Apple', id: 3 },
	// 	{ name: 'Microsoft', id: 4 },
	// 	{ name: 'Asus', id: 5 },
	// ];
	const { products, addToCart } = props;
	return (
		<div>
			<h2
				style={{
					margin: '50px 50px 50px 50px',
				}}>
				This is Shop
			</h2>
			{products.map((pd) => (
				<Product product={pd} key={pd.id} addToCart={addToCart}></Product>
			))}
		</div>
	);
};
// Pass state and ownProps
const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};
// pass actions or even handler
const mapDispatchToProps = {
	addToCart: addToCart,
};
// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
