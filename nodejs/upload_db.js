var mysql = require('mysql')
var express = require('express')
var body_parse = require('body-parser')
var urlencodedpaser = body_parse.urlencoded({extended:false})


const app=express()

app.post('/upload/', urlencodedpaser,function(req,res){

    let result = {
        files1 : req.body.files
    }
    console.log ("file uploaded successfully!!")
   
   

    res.send(`file Uploaded successfully!! ${result}`);

    res.write(`<iframe src=${result} title="w3school" width="100%" height="300px"></iframe>`);
    return res.end();

})


 app.listen(3003)


