import React from 'react'
import '../App.css'
import './Components.css'
import {Link} from 'react-router-dom'

function Product() {
    return (
        <div className='Product'>
            <img src="" alt="image"/>

            <div className="productInfo">
                <p className="productName"></p>
                <p className="productDescription">
                    Culpa dolore aute elit irure enim laboris do ipsum. Culpa est aute enim excepteur labore fugiat aliquip anim. Deserunt est ut aliquip officia veniam sunt esse consequat sunt veniam nisi eiusmod sint occaecat. Fugiat in nulla irure et aliqua dolore sit ut esse officia. Nostrud sint id elit consequat cupidatat. Sit ut sint anim deserunt. Mollit quis velit minim minim sint enim nostrud.
                </p>
                <p className='infoPrice'>$500</p>
                <Link className='infoButton' to={`/ProductDetails/${11}`}>Détails</Link>
            </div>
        </div>
    )
}

export default Product
