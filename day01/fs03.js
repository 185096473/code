var http=require("http");
var fs=require("fs");
//写文件
http.createServer((req,res)=>{
  res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
//   fs.mkdir("./albm/aa",(err,data)=>{
//      console.log("创建成功")
//      res.end()
//   })
    // fs.stat("./albm/aa",(err,data)=>{
    //    console.log(data.isDirectory())
    //    if(data.isDirectory()){
    //        console.log("这是一个目录")
    //    }else{

    //    }
    //    res.end()
    // })
    /**
     * 1.读取目录
     * 2.判断当前目录里面的数据（目录，文件）
     * 3.遍历files
     * 4.判断是否是目录
     * 
     */
    //如果是图标就立刻返回
    if(req.url=="favicon.ico"){
        return
    }
    //读取目录
    fs.readdir("./albm",(err,files)=>{
        //建立空文件夹等待放置目录
        var arr=[];
        //迭代处理  以为开始是一个异步函数通过迭代变成同步函数
        //1执行过后执行2 2执行过后执行3
        (function item(i){
            if(i==files.length){
                console.log(arr)
                return
            }
            fs.stat("./albm/"+files[i],(err,data)=>{
                if(data.isDirectory()){
                   arr.push(files[i])
                }
                item(i+1)
            })
        
        })(0)
        res.end()
    })
         
   
}).listen(3000,"127.0.0.1")