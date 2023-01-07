var mysql      = require('mysql');
const express = require('express')

var body_parse = require('body-parser');
//const { response } = require('express');

var urlencodedParser = body_parse.urlencoded({extended:false})    //why this code


// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '1234',
//   database : 'fs_nov_2022'
// });
 
// connection.connect();
 
// connection.query("SELECT * FROM customer", function (error, results, fields) {
//   if (error) throw error;
//   console.log( results);
// });

 
// connection.end();

let mysql_result=''
        // connection.connect();
 
        //   connection.query("SELECT * FROM customer", function (error, results, fields) {
        //     if (error) throw error;
        //         mysql_result=results
             
        //          });

 
        //      connection.end();



const app = express()

app.post('/forms/', urlencodedParser ,function (req, res) {

     let response = {

        title: req.body.title,
        descriptin: req.body.description,
        author: req.body.author

    }

    let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '1234',
      database : 'fs_nov_2022'
    });

    // let query_string = `INSERT INTO forms (title,descriptin,author) 
    // VALUES('${response.title}','${response.descriptin}','${response.author}');`
    
    // console.log(query_string);

    connection.connect();
 
          connection.query(`INSERT INTO forms (title,descriptin,author) 
          VALUES('${response.title}','${response.descriptin}','${response.author}');`,function (error, results, fields) 
          {
            if (error) throw error;
                mysql_result=results
             
                 });

 
             connection.end();



console.log(response)
  res.send(response)                                // to send database data to front end
});

// app.get('/form/', function (req, res) {
//     res.send('home page')
//   })

//   app.get('/about/', function (req, res) {
//     res.send('About page')
//   })

app.listen(3000)