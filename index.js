import express from "express"
const app = express();
app.get("/",(req,res)=>{
    res.send("run home")
})
app.get("/about",(req,res)=>{
    res.send("this is a about page")
})


app.listen(4000,(req,res)=>{
    console.log("the server run port 4000")
})