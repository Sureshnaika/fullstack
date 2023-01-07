var mysql = require('mysql')
var express = require('express')
const app = express()


let user = require('./user_router')

let ven = require('./vendor_router')

app.get('/:id/:name', function(req,res){
    res.send("student id is:=" + req.params.id + "stident name is:=" + req.params.name);
});
 
app.use('/users', user) 

app.use('/info', user)

app.use('/vendor',ven)
app.use('/info',ven)
  
app.listen(3002);