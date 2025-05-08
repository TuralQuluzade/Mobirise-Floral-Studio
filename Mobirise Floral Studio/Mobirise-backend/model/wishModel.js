import mongoose from "mongoose";

const wishSchema=mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:String,required:true}
})

const wishModel=mongoose.model("wish",wishSchema)
export default wishModel