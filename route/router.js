import express from "express"
import {home ,about,adddata,subdata,registration,senddata,getregdata,login,log} from"../controller/routeController.js"
const router=express.Router()
router.get("/", home)
router.get("/about", about)
router.get("/adddata", adddata)
router.post("/subdata", subdata)
router.get("/registration",registration)
router.post("/senddata",senddata)
router.get("/getregdata",getregdata)
router.get("/login",login)
router.post("/log",log)



   export default router;