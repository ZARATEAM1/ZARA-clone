import express from "express";
import { authentication } from "../controller/loginCon";
var router=express.Router()
router.post("/login",authentication)
export default router