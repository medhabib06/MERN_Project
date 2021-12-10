import React from 'react'
import '../App.css'
import './Components.css'
import {Link} from 'react-router-dom'

function Product({product}) {
    console.log(product.description)
    return (
        <div className='Product'>
            <img src={product.image} alt={product.title}/>

            <div className="productInfo">
                <p className={product.title}></p>
                <p className={product.description}></p>
                    
                
                <p className='infoPrice'>{product.price}$</p>
                <Link className='infoButton' to={`/ProductDetails/${product._id}`}>Détails</Link>
            </div>
        </div>
    )
}

export default Product
