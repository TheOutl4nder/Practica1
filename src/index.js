const http = require('http');
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.sendFile(__dirname+'/index.html');
    console.log('request');
})

app.listen(3000,()=>{
    console.log('app is running in port 3000');
});