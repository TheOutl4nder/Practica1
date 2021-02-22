const http = require('http')

http.createServer(function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});