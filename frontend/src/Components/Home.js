import React, { useEffect } from 'react'
import '../App.css'
import Product from './Product'
import './Components.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/productAction'

function Home() {
    const dispatch = useDispatch()
    const {productList, loading} = useSelector(state => state.productReducer)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    console.log('productList', productList)
    return (
        <div >
           { !loading ? (<div className='homeScreenProducts'>

              
            {productList.map((product) => <Product 
            key={product._id} 
            product={product}         
            />)}
            
            </div>) : "still waiting for data"
            }
        </div>
    )
}

export default Home
