import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productReducers";
import basketSlice from "./reducers/basketReducers"
import wishSlice from "./reducers/wishReducers"
export const store = configureStore({
    reducer:{
        product:productSlice,
        basket:basketSlice,
        wish:wishSlice
    }
})