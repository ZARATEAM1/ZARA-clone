import express from "express";
import { signup } from "../controller/signCon";
var router=express.Router()

router.post('/sign',signup)

export default router