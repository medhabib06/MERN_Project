import React from 'react'

function ProductDetails() {
    return (
        <div className="product_details">
            <div className="details_left">
                <div className='details_image'>
                    <img src=''  alt='img'/> </div>
                    <div className="left_info">
                    <p className='left_name'>Product 1</p>
                    <p>price: 99$</p>
                    <p>Description: Magna sint id sunt incididunt labore amet est aliqua. Anim velit laborum officia laborum eiusmod. Fugiat cupidatat tempor ad ad consequat enim. Non amet consequat aute elit aliqua esse pariatur ut magna est. Proident mollit esse ea qui consequat veniam amet aliqua laborum tempor nostrud et duis et. Occaecat sint aute excepteur aliquip dolore id excepteur irure quis nisi ea. Eu fugiat ex enim non consectetur enim duis esse pariatur elit consectetur pariatur.</p>
                    </div>
            </div>
            
            <div className="details_right">
                <div className='right_info'>
                    <p>
                        price: <span>$99</span>
                    </p>
                    <p>
                        status: <span>In stock</span>
                    </p>
                    <p>Quantity
                        <select className='selectQty'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </p>
                    
                    <p><button type='button' className='addToCart'>Add to cart</button></p>
                    </div>
                
            </div>
            
        </div>
    )
}

export default ProductDetails
