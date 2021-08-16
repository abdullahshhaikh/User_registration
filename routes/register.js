const express = require("express")
const Register = require("../models/register")
const router = new express.Router()

router.post("/register",async(req,res)=>{
    const user = new Register({
        firstName:req.body.fname,
        lastName:req.body.lname,
        email:req.body.email,
        password:req.body.password
    })
    try{
    await user.save()
    res.send(user)
    }catch(e){
    res.send(e)
    }
})

router.post("/login",async(req,res)=>{
    const user = await Register.findByCredentials(req.body.email,req.body.password)
    res.send(user)
})


router.get("/login",async(req,res)=>{
    res.render('login')
})

router.get("/register",async(req,res)=>{
    res.render('register')
})

module.exports = router