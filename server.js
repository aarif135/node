const express=require('express');
const app=express();
const route=express.Router();
const connectDB=require('./DB/connection')
const User=require('./Modal/user')
const { MongoClient } = require("mongodb");
const URI='mongodb+srv://dbArif:arifshakeel@cluster0.pzwai.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new MongoClient(URI);
connectDB();

client.connect().then(res=>{
    console.log(res)
}).catch(e=>console.log(e))

const port=process.env.PORT||5001

// app.use('/api/userModal',require('./endPoint/user'))
app.listen(port,()=>{
    console.log('PORT START AT',port)
})