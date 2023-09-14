import {createReducer} from "@reduxjs/toolkit"

export const productReducer = createReducer({products:[]},{
    allProductsRequest:(state)=>{
        state.loading = true;
    },
    allProductsSuccess:(state,action)=>{
        state.loading = false;
        state.products = action.payload;
    },
    allProductsFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload
    },

    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})