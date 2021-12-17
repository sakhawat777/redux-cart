import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
	cart: [],
	products: [
		{ name: 'HP', id: 1 },
		{ name: 'Dell', id: 2 },
		{ name: 'Apple', id: 3 },
		{ name: 'Microsoft', id: 4 },
		{ name: 'Asus', id: 5 },
	],
};
const cartReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const newId = action.id;
			const newCart = [...state.cart, newId];
			// only change cart value of state
			//return { products: state.products, cart: newCart };
			return { ...state, cart: newCart };
		// return {
		// 	cart: [...state.cart, action.id],
		// };
		case REMOVE_FROM_CART:
			const id = action.id;
			const remainingCart = state.cart.filter((item) => item !== id);
			// only change cart value of state
			return { ...state, cart: remainingCart };
		default:
			return state;
	}
};
export default cartReducers;
