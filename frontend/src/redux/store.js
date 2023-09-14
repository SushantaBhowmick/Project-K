import {configureStore} from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducers";
import { userReducer } from "./reducers/userReducers";

const store = configureStore({
    reducer:{
        products:productReducer,
        user:userReducer,
    }
})

export default store;
export const server = "http://localhost:8080/api/v1";
