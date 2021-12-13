import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetails} from '../redux/actions/productDetailsAction';
import {addToCart} from '../redux/actions/cartActions';





 function ProductDetails({match}) {
 const dispatch= useDispatch();
const product = useSelector(state=>state
    ?.productDetatailsReducer?.product)  ;

    console.log({product})
 useEffect(()=>{
    
            dispatch(getProductDetails(match.params.id));
    },[dispatch, match]); 

    const addToCartHandler=()=>{
        dispatch(addToCart(product._id))
    };

    return (
        <div className="product_details"> 
            {/* { loading ? <h2>LOADING</h2> :(  */}
              
              
            <div className="details_left">
                <div >
                    <img className='details_image' src={product.image}   alt={product.title}/> </div>
                    
                    <div className="left_info">
                    <p className='left_name'>{product.title}</p>
                    <p>price: {product.price}$</p>
                    <p>Description: {product.description}</p>
                    </div>
            </div>
            
            <div className="details_right">
                <div className='right_info'>
                    <p>
                        price: <span>{product.price}$</span>
                    </p>
                    <p>
                        status: <span>In stock</span>
                    </p>
                    
                    
                    <p><button type='button' className='addToCart' onClick={addToCartHandler} >Add to cart</button></p>
                    </div>
                
            
            </div>
            </div>
        
        )
        } 

export default ProductDetails 
