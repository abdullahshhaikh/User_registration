const validator = require("validator");
const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password:{
        type:String,
        trim:true,
    },
})


const Register = mongoose.model('Register',registrationSchema)

module.exports = Register