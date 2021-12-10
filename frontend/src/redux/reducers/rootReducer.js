import { combineReducers } from "redux"
import productReducer from "./productReducer"
import productDetatailsReducer from "./productDetatailsReducer"
import cartReducer from "./cartReducers"

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    productDetatailsReducer
  })

export default rootReducer