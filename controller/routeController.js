//  const arr=[];
// let id=1;
import User from "../models/user.js"
import Reg from "../models/reg.js"
import Log from "../models/login.js"
function home(req, res) {
    const a = {
        "name": "vishnu",
        "class": "12th"
    }

    res.render("home", { a })

}
function about(req, res) {
    const arr = [23, 34, 45, 56, 67]
    res.render("about", { arr })
}
function adddata(req, res) {
    res.render("adddata")
}
// function subdata(req,res){
//    let name=req.body.name
//    let email=req.body.email
//    let obj={
//     id:id++,
//     name,
//     email
//    }

// arr.push(obj)
// console.log(arr)
// res.redirect("/")
// }
const subdata = async (req, res) => {
    let name = req.body.name
    let email = req.body.email
    await User.create({ name, email })
    res.redirect("/")
}

function registration(req, res) {
    res.render("registration")
}
const senddata = async (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let number = req.body.number
    let password = req.body.password
    let cpass = req.body.cpass
    await Reg.create({ name, email, number, password, cpass })
    res.redirect("/")
}
const getregdata = async (req, res) => {
    let vishnu = await Reg.find()
    res.render("showreg", { vishnu })
}
function login(req, res) {
    res.render("login")
}
const log = async (req, res) => {
    let name = req.body.name
    let email = req.body.email
    await Log.create({ name, email })
    res.redirect("/")
}
const getlogdata = async(req, res)=> {
    let vinit = await Log.find()
    res.render("showlogdata", { vinit })
}
const deletedata=async(req,res)=>{
    await Reg.findByIdAndDelete(req.params.id)
    res.redirect("/getregdata")
}


export { home, about, adddata, subdata, registration, senddata, getregdata, login, log,getlogdata,deletedata }

// export {home,about,adddata,subdata}