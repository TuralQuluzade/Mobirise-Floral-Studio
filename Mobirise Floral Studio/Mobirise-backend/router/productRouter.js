import express from "express"
import { deleteProduct, getProduct, postProduct } from "../controler/productControler.js"
import { deleteBasket, getBasket, postBasket } from "../controler/basketControler.js"
import { deleteWish, getWish, postWish } from "../controler/wishControler.js"

const router= express.Router()

router
.get("/flora",getProduct)
.get("/basket",getBasket)
.get("/wish",getWish)
.post("/flora",postProduct)
.post("/basket",postBasket)
.post("/wish",postWish)
.delete("/flora/:id",deleteProduct)
.delete("/basket/:id",deleteBasket)
.delete("/wish/:id",deleteWish)

export default router