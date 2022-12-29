var mysql      = require('mysql');
const express = require('express')


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'fs_nov_2022'
});
 
// connection.connect();
 
// connection.query("SELECT * FROM customer", function (error, results, fields) {
//   if (error) throw error;
//   console.log( results);
// });

 
// connection.end();

let mysql_result=''
        connection.connect();
 
          connection.query("SELECT * FROM customer", function (error, results, fields) {
            if (error) throw error;
                mysql_result=results
             
                 });

 
             connection.end();



const app = express()

app.get('/', function (req, res) {
  res.send(mysql_result)
})

// app.get('/home/', function (req, res) {
//     res.send('home page')
//   })

//   app.get('/about/', function (req, res) {
//     res.send('About page')
//   })

app.listen(3000)