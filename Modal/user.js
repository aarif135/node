const mongoose=require('mongoose');
const user=new mongoose.Schema({
    firstName:String,
    lastName:String
})
module.exports=User=mongoose.model('user',user)