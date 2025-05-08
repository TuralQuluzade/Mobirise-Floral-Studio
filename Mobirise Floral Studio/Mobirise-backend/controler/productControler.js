import porductModel from "../model/productModel.js"

const getProduct=async(req,res)=>{
    const product=await porductModel.find()
    res.json(product)
}
const postProduct=async(req,res)=>{
    const {image,name,price}=req.body
    const product={image,name,price}
    await porductModel.create(product)
    res.json(product)
}
const deleteProduct=async(req,res)=>{
    const {id}=req.params
    const deletedProduct=await porductModel.findByIdAndDelete(req.params.id)
    res.json(id)
    if(deletedProduct){
        console.log(`${id}-li data silindi`);
        
    }
}
export {deleteProduct,getProduct,postProduct}