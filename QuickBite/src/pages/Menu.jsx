import React from "react";
import "./Menu.css";
function Menu() {
    return (
        <div className="menu-container">
            <h2>Menu</h2>
            <div className="menu-item">
                <span className="item-name">Item 1</span>
                <span className="item-price">Price: $10</span>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
            <div className="menu-item">
                <span className="item-name">Item 2</span>
                <span className="item-price">Price: $5</span>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
}

export default Menu;
