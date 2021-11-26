

const INITIAL_STATE= {
    productList: [],
    loading: false,
    error: undefined
}

const productReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {


        case "FETCH_PRODUCT_STARTED": 
        return {
            ...state,
            loading: true
        }
        case "FETCH_PRODUCT_SUCCESS":
            return {
                ...state, 
                loading: false,
                productList: action.payload
            }
    
            case "FETCH_PRODUCT_FAILED": 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
          return state
    }
}
export default productReducer