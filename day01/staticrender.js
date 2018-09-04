var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    console.log(req.url)
    // res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/red"){
        fs.readFile("./static/red.html",(err,data)=>{
            res.end(data)
        })
    }else if(req.url=="/green"){
        fs.readFile("./static/green.html",(err,data)=>{
            res.end(data)
        })
    }else if(req.url=="/red.css"){
        fs.readFile("./static/red.css",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/css"})
            res.end(data)
        })
    }else if(req.url=="/entry.png"){
        fs.readFile("./static/entry.png",(err,data)=>{
            res.writeHead(200,{"Content-type":"image/png"})
            res.end(data)
        })
    }else{
        res.end("fail")
    }
  
    
}).listen(3000,"127.0.0.1")

/**
 * 1css加载
 * 2图片加载
 * 
 */
