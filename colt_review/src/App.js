import React from "react";
import faker from "faker";

import Cart from "./Cart";
import "./styles.css";

const items = [
	{
		id: 1,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		qty: Math.floor(Math.random() * 10 + 1),
	},
	{
		id: 2,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		qty: Math.floor(Math.random() * 10 + 1),
	},
	{
		id: 3,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		qty: Math.floor(Math.random() * 10 + 1),
	},
	{
		id: 4,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		qty: Math.floor(Math.random() * 10 + 1),
	},
];

const App = () => {
	return (
		<div className="App">
			<Cart initialItems={items} />
		</div>
	);
};

export default App;
