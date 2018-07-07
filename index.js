'use strict'
const express=require('express');
const bodyParser=require('body-parser');
const request=require('request');
const app=express();
// set port tolisten
app.set('port',(process.env.PORT||5000))

// allows us to process the data

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// routes

app.get('/',(req,res)=>{
    console.log("hi I am chat bot")
})
app.get('/webhook/',(req,res)=>{
    // console.log("hi I am chat bot")
    if(req.quer['hub.verify_token']=="auqib"){
        res.send(req.query['hub.challenges'])
    }
    res.send("wrong token")
})

app.listen(app.get('port'),()=>{
    console.log("running: port");
})