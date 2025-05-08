import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk= createAsyncThunk("/product/get", async()=>{
    const res=await axios.get("http://localhost:5000/flora/")
    return res.data
})
export const postProductThunk=createAsyncThunk("/product/post",async(data)=>{
    await axios.post("http://localhost:5000/flora/",data)
    return data
})
export const deleteProductThunk=createAsyncThunk("/product/delete",async(_id)=>{
    await axios.delete(`http://localhost:5000/flora/${_id}`)
    return _id
})

const productSlice=createSlice({
    name:"product",
    initialState:{
        product:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getProductThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(postProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.product.push(action.payload);
            })
            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.product = state.product.filter(item => item._id !== action.payload);
            });
    }
    
})
export default productSlice.reducer