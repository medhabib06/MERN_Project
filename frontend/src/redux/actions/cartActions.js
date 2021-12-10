import * as actionTypes from "../Constants/cartConst";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  const response  = await axios.get(`http://localhost:5000/api/products/${id}`);
  const { data} = response;
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.title,
      imageUrl: data.image,
      price: data.price,
    },
  });


};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

 
};
