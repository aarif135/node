const express=require('express')
const User=require('../Modal/user')
const route=express.Router();

route.post('/user',async(req,res)=>{
    const {firstName,lastName}=req.body
    let saveUser= new User({
        firstName,
        lastName
    })
   await saveUser.save()
    res.json(saveUser)
})
module.exports=route;