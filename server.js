const express=require('express');
const app=express();
const connectDB=require('./DB/connection')
connectDB();
const port=process.env.PORT||5000
app.get('/user',(req,res)=>{
res.send('Hello world')
})
// app.use('/api/userModal',require('./endPoint/user'))
app.listen(port,()=>{
    console.log('PORT START AT',port)
})