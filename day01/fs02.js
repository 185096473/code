var http=require("http");
var fs=require("fs");
//写文件
http.createServer((req,res)=>{
  res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
  fs.writeFile("./1.txt","这是写入文件",(err,data)=>{
    res.end(data)
  }) 
  
}).listen(3000,"127.0.0.1")