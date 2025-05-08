import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getWishThunk=createAsyncThunk("/basket/get",async()=>{
    const res=await axios.get("http://localhost:5000/wish/")
    return res.data
})
export const postWishThunk=createAsyncThunk("/basket/post",async(data)=>{
    await axios.post("http://localhost:5000/wish/",data)
    return data
})
export const deleteWishThunk=createAsyncThunk("/basket/delete",async(id)=>{
    await axios.delete(`http://localhost:5000/wish/${id}`)
    return id
})

const WishSlice =createSlice({
    name:"wish",
    initialState:{
        wish:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:builder =>{
        builder
        .addCase(getWishThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getWishThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
        })
        .addCase(getWishThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        .addCase(postWishThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.product.push(action.payload)
        })
        .addCase(deleteWishThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.product=state.product.filter(item=>item._id!=action.payload)
        })
    }
})
export default WishSlice.reducer