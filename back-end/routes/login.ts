import express from "express";
import { authentication } from "../controller/loginCon";
import { addItemToCart } from "../controller/add";
var router=express.Router()
router.post("/login",authentication)
router.post('/cart',addItemToCart)
export default router