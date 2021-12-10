import React from 'react'
import './Components.css'
import {Link} from 'react-router-dom';


function CartItem({item, removeHandler}) {
    return (
        <div className='cart_item'>
            <div className="cart_item_image">
            <img src={item.imageUrl} alt={item.title}/>
            </div>
            
        <Link to={`/ProductDetails/${item._id}`} className='cart_item_name'>{item.name}</Link>
        <div className='cart_item_price'>{item.price}$</div>
        
        <button className='delete_btn' onClick={()=>removeHandler(item.product)}>
            Delete
        </button>
        </div>
    )
}

export default CartItem
