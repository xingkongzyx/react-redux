import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
const Cart = ({ initialItems }) => {
	const [items, setItems] = useState(initialItems);
	const onQtyUpdate = (id, newQty) => {
		// 创造一个原items copy,并且更改其中的qty属性
		const newItems = items.map((item) => {
			if (item.id === id) return { ...item, qty: newQty };
			return item;
		});
		// update states using newItems
		setItems(newItems);
	};

	// 根据price和qty计算总价值
	let total = 0;
	items.forEach((item) => {
		total += item.price * item.qty;
	});
	return (
		<div className="Cart">
			<h1 className="Cart-title">Shopping Cart</h1>
			<div className="Cart-items">
				{items.map((item) => (
					<CartItem
						onQtyUpdate={onQtyUpdate}
						{...item}
						key={item.id}
					/>
				))}
			</div>
			<h2 className="Class-total">Grand Total: {total}</h2>
		</div>
	);
};
export default Cart;
