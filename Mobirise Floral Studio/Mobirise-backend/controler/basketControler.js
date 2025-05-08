import basketModel from "../model/basketModel.js"

const getBasket=async(req,res)=>{
    const product=await basketModel.find()
    res.json(product)
}
const postBasket=async(req,res)=>{
    const {image,name,price}=req.body
    const product={image,name,price}
    await basketModel.create(product)
    res.json(product)
}
const deleteBasket=async(req,res)=>{
    const {id}=req.params
    const deletedProduct=await basketModel.findByIdAndDelete(req.params.id)
    res.json(id)
    if(deletedProduct){
        console.log(`${id}-li data silindi`);
        
    }
}
export {deleteBasket,getBasket,postBasket}