//引入http模块   require  加载
var http=require("http")
var server=http.createServer((req,res)=>{
    //形参 和 实参    arguments  
    //req =>request  请求      res=> response 响应
    //设置响应头   状态码  设置类型         html 类型       编码格式
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
    //结束响应
    res.end("hello word 中国")
})
//监听服务      端口    ip
server.listen(3000,"localhost")
