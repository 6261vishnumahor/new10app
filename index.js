import express from "express"
const app = express();
import router from "./route/router.js"
import port from"./config/envConfig.js"
import mongoose from "mongoose";
import bodyParser from "body-parser";

mongoose.connect("mongodb://localhost:27017/vinitdb")
.then(()=>console.log("connected"))
.catch(()=>console.log("not connected"))

// app.get("/",(req,res)=>{
//     res.send("run home")
// })
// app.get("/about",(req,res)=>{
//     res.send("this is a about page")
// })
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

// app.use(express.urlencoded({ extended: true }));
app.use(router)


app.listen(port,(req,res)=>{
    console.log("the server run port 4000")
})