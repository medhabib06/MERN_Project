import axios from "axios";
import * as actionTypes from "../Constants/productConst";


export const getProductDetails = (id) => async (dispatch) => {
	dispatch({ type: actionTypes.GET_PRODUCT_DETAILS});
  try {
	
    
 	const response = await axios.get(`http://localhost:5000/api/products/${id}`);

    dispatch({ type: "GET_PRODUCT_DETAILS_SUCCESS", payload: response.data })
  } catch (error) {
    dispatch({ type: "GET_PRODUCT_DETAILS_FAILED", payload: error });
  }
};


export const removeProductDetails=()=>async (dispatch)=>{
	dispatch({
		type: actionTypes.GET_PRODUCT_DETAILS_RESET,
	})
}