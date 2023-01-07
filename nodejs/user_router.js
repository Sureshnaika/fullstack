var express = require('express');
var router = express.Router();


router.get('/', function (req,res){
    res.send("Iam user home page")
})


router.get('/info/', function (req,res){
    res.send("User Information page")
})
 

module.exports = router;