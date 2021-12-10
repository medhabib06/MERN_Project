import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCT_STARTED" });
  try {
    // need to change the right url for axios
    const response = await axios.get("http://localhost:5000/api/products");

    
    dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: response.data });
  }
   catch (error) {
    dispatch({ type: "FETCH_PRODUCT_FAILED", payload: error });
  }
};
