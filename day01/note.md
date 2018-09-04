node  -v
npm -v
nodejs的班管理工具 npm



淘宝镜像

npm install -g cnpm --registry=https://registry.npm.taobao.org

缺点：导致缺失文件

优点：下载速度快

npm install nrm -g   install 安装依赖   -g  global  全局

nrm npm的管理工具  

nrm use 管理名称   可以自由切换

作用：  可以自由选择包管理工具

特点：（面试必考）

1.单线程

2.非阻塞I/O

3.事件驱动



1.1程序 进程  线程

程序：由源代码生成的可执行应用。

进程：一个正在运行的程序可以看做一个进程，进程拥有独立运行所需要的全部资源

线程：程序中独立运行的代码段。

一个进程是由一或多个线程组成，进程只负责资源的调度和分配，线程才是程序真正的执行单元，负责代码的执行。



 单线程



每个正在运行的程序（即进程），至少包括一个线程，这个线程叫主线程

主线程在程序启动时被创建，用于执行main函数

只有一个主线程的程序，称作单线程程序

主线程负责执行程序的所有代码（UI展现以及刷新，网络请求，本地存储等等）。这些代码只能顺序执行，无法并发执行



多线程



拥有多个线程的程序，称作多线程程序。

iOS允许用户自己开辟新的线程，相对于主线程来讲，这些线程，称为子线程

可以根据需要开辟若干子线程

子线程和主线程都是独立的运行单元，各自的执行互不影响，因此能够并发执行

 

单线程、多线程的区别

单线程程序：只有一个线程，代码顺序执行，容易出现代码阻塞（页面假死）

多线程程序：有多个线程，线程间独立运行，能有效地避免代码阻塞，并且提高程序的运行性能

注意：iOS中关于UI的添加和刷新必须在主线程中操作

2.1

阻塞式IO：IO即input/output，阻塞式IO指的是“一旦输入/输出工作没有完成，则

程序阻塞，直到输入/输出工作完成”。

  非阻塞式IO：非阻塞式IO其实也并非完全非阻塞，通常都是通过设置超时来读取

数据的。未超时之前，程序阻塞在读写函数上；超时后，结束本次读取，将已读到

的数据返回。通过不断循环读取，就能够读到完整数据了。如果多次连续超时读到

空数据的话，则可以断开。C语言的Socket可以使用setsockopt()来设置recv()超时

（通常也就Socket需要考虑超时）。

非阻塞I/O的缺点：

就说说非阻塞IO的严重缺点吧。如果你企图保持socket的长连接，Server在规定的

时间内没有读到Client的心跳，然而你Server读取socket传来的数据，调用的输入

函数是阻塞式IO（如下），那么即便Client没有心跳了（Client已经断开了连

接），你的Server程序仍然会被阻塞在该输入函数下无法继续等待数据结束标志

（比如换行符）。然而，由于Client已经断开了连接，所以Sever永远收不到数

据……这个线程就卡在这里结束不了，单纯地浪费资源了。

3.1

事件驱动编程主要思想是通过事件或状态的变化来进行应用程序的流程控制，一般

通过事件监听完成，一旦事件被检测到，则调用相应的回调函数。事件驱动主要执

行过程是当进来的一个新的请求的时候，请求将会被压入队列中，然后通过一个循

环来检测队列中的事件状态变化，如果检测到有状态变化的事件，那么就执行该事

件对应的处理代码，一般都是回调函数。

线程驱动是当收到一个请求的时候，将会为该请求开一个新的线程来处理请求。而

线程主要是由线程池来管理的。当线程池中有空闲的线程，会从线程池中拿取线程

来处理，如果线程池中没有空闲的线程，新来的请求将会进入队列排队，直到线程

池中空闲线程

状态码：

     '100': 'Continue',
     '101': 'Switching Protocols',
     '102': 'Processing',
     '200': 'OK',
     '201': 'Created',
     '202': 'Accepted',
     '203': 'Non-Authoritative Information',
     '204': 'No Content',
     '205': 'Reset Content',
     '206': 'Partial Content',
     '207': 'Multi-Status',
     '208': 'Already Reported',
     '226': 'IM Used',
     '300': 'Multiple Choices',
     '301': 'Moved Permanently',
     '302': 'Found',
     '303': 'See Other',
     '304': 'Not Modified',
     '305': 'Use Proxy',
     '307': 'Temporary Redirect',
     '308': 'Permanent Redirect',
     '400': 'Bad Request',
     '401': 'Unauthorized',
     '402': 'Payment Required',
     '403': 'Forbidden',
     '404': 'Not Found',
     '405': 'Method Not Allowed',
     '406': 'Not Acceptable',
     '407': 'Proxy Authentication Required',
     '408': 'Request Timeout',
     '409': 'Conflict',
     '410': 'Gone',
     '411': 'Length Required',
     '412': 'Precondition Failed',
     '413': 'Payload Too Large',
     '414': 'URI Too Long',
     '415': 'Unsupported Media Type',
     '416': 'Range Not Satisfiable',
     '417': 'Expectation Failed',
     '418': 'I\'m a teapot',
     '421': 'Misdirected Request',
     '422': 'Unprocessable Entity',
     '423': 'Locked',
     '424': 'Failed Dependency',
     '425': 'Unordered Collection',
     '426': 'Upgrade Required',
     '428': 'Precondition Required',
     '429': 'Too Many Requests',
     '431': 'Request Header Fields Too Large',
     '451': 'Unavailable For Legal Reasons',
     '500': 'Internal Server Error',
     '501': 'Not Implemented',
     '502': 'Bad Gateway',
     '503': 'Service Unavailable',
     '504': 'Gateway Timeout',
     '505': 'HTTP Version Not Supported',
     '506': 'Variant Also Negotiates',
     '507': 'Insufficient Storage',
     '508': 'Loop Detected',
     '509': 'Bandwidth Limit Exceeded',
     '510': 'Not Extended',
     '511': 'Network Authentication Required'

        svn      小乌龟
     上传github    可视化工具  sourcetree
     git init 初始化
     git status  状态
     git add 文件名   添加到暂存区
     git commit -m ""  提交  -m  解释
     git remote        链接远程仓库
     git push -u origin master  提交到仓库中
     日报：

     今日完成内容：
        
     不足：

     措施：

     明日工作安排：  

         2018/09/04
