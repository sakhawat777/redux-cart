import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
	cart: [],
	products: [
		{ name: 'HP Laptop', id: 1 },
		{ name: 'Dell Laptop', id: 2 },
		{ name: 'Apple Laptop', id: 3 },
		{ name: 'Microsoft Laptop', id: 4 },
		{ name: 'Asus Laptop', id: 5 },
	],
};
const cartReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const newItem = {
				productId: action.id,
				name: action.name,
				cartId: state.cart.length + 1,
			};
			const newCart = [...state.cart, newItem];
			// only change cart value of state
			//return { products: state.products, cart: newCart };
			return { ...state, cart: newCart };
		// return {
		// 	cart: [...state.cart, action.id],
		// };
		case REMOVE_FROM_CART:
			const cartId = action.cartId;
			const remainingCart = state.cart.filter(
				(item) => item.cartId !== cartId
			);
			// only change cart value of state
			return { ...state, cart: remainingCart };
		default:
			return state;
	}
};
export default cartReducers;
