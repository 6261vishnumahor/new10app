import express from "express"
import {home ,about,adddata,subdata,registration,senddata,getregdata,login,log, getlogdata, deletedata,updateform,update} from"../controller/routeController.js"
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
router.get("/getlogdata",getlogdata)
router.post("/showreg/delete/:id",deletedata)

router.get("/showreg/updateform/:id",updateform)
router.post("/showreg/update/:id",update)


   export default router;