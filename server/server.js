const mongoose = require("mongoose");
const express = require("express");
// const MongoClient = require('mongodb')
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.json());

const uri = "mongodb+srv://hariharanpcs21:hari@cluster0.nw5s3ir.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0"

const db = mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
});

const userschema = new mongoose.Schema({
    site_name:"string",
    site_link:"string",
    img:"string"
})

const user = mongoose.model('example', userschema, 'example')

app.get('/',(req,res)=>{    
    user.find()
    .then((users)=>{
        res.send(users)
    })
    .catch((err)=>{
        console.log(err)
    })
})

const port = 5000;

app.listen(port,()=>{
    console.log(`connected to the port ${port}`)
});