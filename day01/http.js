var http=require("http");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
   console.log("服务器接收到"+req.url)
   res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
   res.write("<h1>我是标题</h1>")
   res.write("<h2>我是标题</h2>")
   res.write("<h3>我是标题</h3>")
   res.end((1+2+3).toString())
}).listen(3000,"127.0.0.1")