// let http = require('http')
// let fs= require('fs')

// let module1 = require('./module1.js')

// http.createServer(
//     function (req,res){
//         fs.readFile('chess_grid.html',(error,content)=>{
//             res.end(content)
//         })
        
//     }
// ).listen(1000)
// let x = module1.add(5,5)
// console.log(x)

// let x1=module1.using_add1(5,5)
// console.log(x1)



let module1 = require('./module1.js')
let x= module1.add1(5,5)
console.log(x)


let http = require('http')
let fs = require('fs')
http.createServer(

    function (req,res){

            fs.readFile('chess_grid.html',(error,content)=>
            {
                res.end(content)
            })

        }
).listen(1000);
