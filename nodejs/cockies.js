const express = require('express')
const app = express()


app.get('/', function (req, res,next){
    res.cookie('name','suresh N').send('coockie has been set')
})

app.get('/clear', function (req, res,next){
    res.clearCookie('name').send('coockie has been clear')
})
 

app.listen(3006)