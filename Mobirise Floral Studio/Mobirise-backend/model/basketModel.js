import mongoose from "mongoose";

const basketSchema=mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:String,required:true}
})

const basketModel=mongoose.model("basket",basketSchema)
export default basketModel