import React from 'react'
import '../App.css'
import './Components.css'
import CartItem from './CartItem';

function Cart() {
    return (
        <div className="cart_page">
            <div className="cart_left">
                <h2>Shopping cart</h2>
                <CartItem/>
            </div>
             
            <div className="cart_right">
                <div className='cart_info'>
                    <p>Total (0) items</p>
                    <p>99$</p>
                </div>
                <div>
                    <button>Proceed to payment</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
