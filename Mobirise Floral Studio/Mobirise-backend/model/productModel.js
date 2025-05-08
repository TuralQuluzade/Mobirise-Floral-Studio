import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:String,required:true}
})

const porductModel=mongoose.model("flora",productSchema)
export default porductModel