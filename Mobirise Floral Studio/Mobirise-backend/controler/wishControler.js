import wishModel from "../model/wishModel.js"


const getWish=async(req,res)=>{
    const product=await wishModel.find()
    res.json(product)
}
const postWish=async(req,res)=>{
    const {image,name,price}=req.body
    const product={image,name,price}
    await wishModel.create(product)
    res.json(product)
}
const deleteWish=async(req,res)=>{
    const {id}=req.params
    const deletedProduct=await wishModel.findByIdAndDelete(req.params.id)
    res.json(id)
    if(deletedProduct){
        console.log(`${id}-li data silindi`);
        
    }
}
export {deleteWish,postWish,getWish}