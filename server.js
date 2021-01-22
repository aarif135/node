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

    const database = client.db("table-reservation");
    const collection = database.collection("user");
    app.get('/user',async(req,res)=>{
        const test=await collection.findOne({firstName:"Arif"})
        console.log(test)
         res.send(test)
        })
})

const port=process.env.PORT||5000

// app.use('/api/userModal',require('./endPoint/user'))
app.listen(port,()=>{
    console.log('PORT START AT',port)
})