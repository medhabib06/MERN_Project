import React from 'react'
import './Components.css'
import {Link} from 'react-router-dom';


function CartItem() {
    return (
        <div className='cart_item'>
            <div className="cart_item_image">
            <img src="" alt="product name"/>
            </div>
            
        <Link to={`/productDetails/${11}`} className='cart_item_name'>product 1</Link>
        <div className='cart_item_price'>$99</div>
        <select className='cart_select'>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <button className='delete_btn'>
            Delete
        </button>
        </div>
    )
}

export default CartItem
