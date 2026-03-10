import React from "react";
import "./Cart.css";
function Cart() {
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-item">
                <span className="item-name">Item 1</span>
                <span className="item-quantity">Quantity: 2</span>
                <span className="item-price">Price: $10</span>
            </div>
            <div className="cart-item">
                <span className="item-name">Item 2</span>
                <span className="item-quantity">Quantity: 1</span>
                <span className="item-price">Price: $5</span>
            </div>
            <div className="cart-total">
                <span>Total: $25</span>
            </div>
            <button className="checkout-button">Checkout</button>
        </div>
    );
}

export default Cart;
