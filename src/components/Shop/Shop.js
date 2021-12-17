import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = () => {
	const products = [
		{ name: 'HP', id: 1 },
		{ name: 'Dell', id: 2 },
		{ name: 'Apple', id: 3 },
		{ name: 'Microsoft', id: 4 },
		{ name: 'Asus', id: 5 },
	];
	return (
		<div>
			<h2>This is Shop</h2>
			{products.map((pd) => (
				<Product product={pd}></Product>
			))}
		</div>
	);
};
// Pass state and ownProps
const mapStateToProps = (state) => {
	return {
		cart: state.cart,
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
