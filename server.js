const express=require('express');
const app=express();
const connectDB=require('./DB/connection')
connectDB();

app.use('/api/userModal',require('./endPoint/user'))

const Port=5000
app.listen(()=>console.log(`Server Started At ${Port}`))