import React from "react";
import "./CartItem.css";

const CartItem = ({ id, name, price, qty, onQtyUpdate }) => {
	return (
		<div className="Cart-item">
			<div>{name}</div>
			<div>${price}</div>
			<div>
				<button
					onClick={() => {
						onQtyUpdate(id, qty - 1);
					}}
					disabled={qty <= 1}
				>
					-
				</button>
				{qty}
				<button
					onClick={() => {
						onQtyUpdate(id, qty + 1);
					}}
				>
					+
				</button>
			</div>
			<div>total: {(price * qty).toFixed(2)}</div>
		</div>
	);
};

export default CartItem;
