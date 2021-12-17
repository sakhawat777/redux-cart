import React from 'react';
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

export default Shop;
