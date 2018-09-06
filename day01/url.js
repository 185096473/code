var http=require("http");
var url=require("url")
var path=require("path")
console.log(path)
http.createServer((req,res)=>{
    //url.parse()      
    var pathname=url.parse(req.url).pathname
    // http://localhost:3000/red?username=tom&age=20
    //pathname  /后面的
    //query     ?后面的
    var query=url.parse(req.url,true).query
    var age=query.age
    //query时如果第二个参数传为true 会生成一个对象
    console.log(query)
    console.log(age)
    res.end("232")
}).listen(3000,"127.0.0.1")