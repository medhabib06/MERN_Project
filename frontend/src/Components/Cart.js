import React from 'react'
import '../App.css'
import './Components.css'
import CartItem from './CartItem';

import { useDispatch, useSelector }  from 'react-redux';
import {link} from 'react-router-dom';

import{removeFromCart} from "../redux/actions/cartActions"


function Cart() {
const dispatch=useDispatch();
const cart=useSelector(state=>state.cartReducer);
console.log(cart.cartItems);
const cartItems=cart?.cartItems;

const cartTotal=()=>{
    return cartItems.reduce((price, item)=>item.price + price, 0);
}

const removeHandler=(id)=>{
dispatch(removeFromCart(id));
}

    return (
        <div className="cart_page">
            <div className="cart_left">
                <h2>Shopping cart</h2>
                    {cartItems?.length===0?(
                    <div>THE CART IS EMPTY</div>):(
                      cartItems?.map(item=><CartItem item={item} removeHandler={removeHandler}/>)  
                    )}
                
            </div>
             
            <div className="cart_right">
                <div className='cart_info'>
                    <p>Total {cartItems.length} items</p>
                    <p>{cartTotal()} $</p>
                </div>
                <div>
                    <button>Proceed to payment</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
