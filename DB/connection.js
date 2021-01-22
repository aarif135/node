const mongoose=require('mongoose');
const URI='mongodb+srv://dbArif:testpassword123@cluster0.pzwai.mongodb.net/<dbname>?retryWrites=true&w=majority';
const connectDB=async ()=>{
   await mongoose.connect(URI,{ useUnifiedTopology: true },{ useNewUrlParser: true })
   console.log('DB connect!')
}
module.exports=connectDB