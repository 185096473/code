var http=require("http");
http.createServer((req,res)=>{
    var url=req.url;
    /**
     * 1.根据地址栏信息 eg:/student/id   显示学员信息  并且限制id长度，输出id
     *  1.1 req.url 获取地址栏字段
     *  1.2 通过正则匹配  
     * 2.根据地址栏信息 eg:/teacher/   显示老师信息  并且限制id长度
     * 3.如果匹配不到，显示无此人员
     * substring 和  substr 的区别：
     *     substring:  含头不含尾
     *     substr:     长度
     */
    if(url=="/favicon.ico"){
        return
    }
    // if(url.substring(0,9)=="/student/"){
    //      var studentId=url.substr(9)
    //   if((/^\d{3}$/).test(studentId)){
    //       console.log("学员id:"+studentId)
    //   }else{
    //       console.log("学员id不正确")
    //   }    
    // }else{
    //     console.log("没有此学员")
    // }
    var a=5
    switch(typeof(a)==Number){
        case a>1:
        console.log(a)
          return a ;
          
        break;
    }
    res.end()
}).listen(3000,"127.0.0.1")