import mongoose from "mongoose";
const regSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:String
        // required:true
    },
    password:{
        type:String,
        // required:true
        
    },
    cpass:{
        type:String,
        // required:true
    }
})

export default mongoose.model('Reg',regSchema)