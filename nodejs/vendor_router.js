var express = require('express');
var router = express.Router();



router.get('/',function(req,res){
    res.send("Iam Vendor page")
})

router.get('/info',function(req,res){
    res.send("Iam Vendor Informations")
})

module.exports = router;
