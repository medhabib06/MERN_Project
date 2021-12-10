import * as actionTypes from '../Constants/productConst';

const INITIAL_STATE={product:{}}

const productDetails = (state=INITIAL_STATE, action)=>{
switch(action.type){
	case actionTypes.GET_PRODUCT_DETAILS:
		return {
			...state,	
			loading: true

		}
	case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
		return{
			...state,
			loading:false,
			product: action.payload
		}
	case actionTypes.GET_PRODUCT_DETAILS_FAILED:
		return{
			...state,
			loading: false,
			error: action.payload
		}	
	case actionTypes.GET_PRODUCT_DETAILS_RESET:
		return{
			product:{}
		}
	default:
		return state;	
}

}
export default productDetails


