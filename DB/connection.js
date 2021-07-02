const mongoose=require('mongoose');
const URI='mongo "mongodb+srv://cluster0.pzwai.mongodb.net/myFirstDatabase" --username dbArif';

const connectDB=async ()=>{
   await mongoose.connect(URI,{ useUnifiedTopology: true },{ useNewUrlParser: true })
   console.log('DB connect!')
}
module.exports=connectDB