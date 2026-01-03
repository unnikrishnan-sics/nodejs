const express = require("express");
const PORT=3000;
const app=express();
const path=require("path");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const test=require('./models/test');

const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Test',{
    useUnifiedTopology:true,
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'mongodb connection error'));
db.once("open",()=>{
    console.log("Db connected");
});

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    try{
    var ts=test.find();
    console.log(ts);
    }
    catch (error){
        console.log("Eroor loading",error.message);
        res.status(500).send('internal server error');
    };
res.send(ts.names);
});

app.get('/hi',(req,res)=>{
    res.sendFile('./views/abc.html');
});
app.listen(PORT,(error)=>{
    if(!error)
    {
        console.log("success ,server is on");
    }
    else
    {
        console.log("Error, server is off");
    }
})
