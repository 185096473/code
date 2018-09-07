var http=require("http");
var fs=require("fs");
//读取文件
http.createServer((req,res)=>{
    fs.readFile("./note.md",(err,data)=>{
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        res.end(data)
    })
}).listen(3000,"127.0.0.1")