import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
	const { cart, removeFromCart } = props;
	return (
		<div
			style={{
				margin: '50px 50px 50px 50px',
			}}>
			<h4>This is Cart</h4>
			<ul>
				{cart.map((id) => (
					<li>
						{id} <button onClick={() => removeFromCart(id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};
// Pass state and ownProps
const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};
// pass actions or even handler
const mapDispatchToProps = {
	removeFromCart: removeFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
