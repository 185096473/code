前后端分离:  
    1.前端创建数据，不需要等待后台  
    2.前端可以发布项目  ftp   filezilla
    各司其职

 $.ajax({
     url:"127.0.0.1:3000/login",
     type:"post", //get  post  put  delete  push  options 
     data:{
         username:"",
         password:""
     },
     dataType:"json",
     async:false,
     timeout:3000000000
    }).done(function(result){

    })
    window.location.href  hash # 跳转    search ?  跳转   port  端口   path  路径  pathName 路径名称  host  主机     
   