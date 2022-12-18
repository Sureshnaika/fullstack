let http= require('http')

http.createServer(function(req,res){
    res.end(chess.html);
}).listen(1000)