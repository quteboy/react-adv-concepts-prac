import {combineReducers} from "redux";
import {productReducer,selectProductReducer} from "./productReducer";


const rootReducer = combineReducers({
    allProducts:productReducer,
    selectProduct:selectProductReducer,
})

export default rootReducer;