const express = require('express')
const app = express()


app.use(express.static('public'));
app.use(express.static('public1'));
app.use(express.static('public2'));
app.use(express.static('public3'));


app.set('views',__dirname + '/');
app.engine('html', require('ejs').renderFile);

app.use('/', function(req,res,next){
    console.log("Request Recieved!!!")
    next()
})


app.get('/', function (req,res){
    res.render('forms.html')
})








app.listen(3004);
