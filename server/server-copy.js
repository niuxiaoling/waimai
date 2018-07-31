const express = require('express');
const server = express();
const port=3333;
// const path = require('path');
// 中间件
// server.use(express.static('./public'));
//
// server.use()
// server.use(function (req,res,next) {
//     console.log(req.socket.remoteAdderss);
//     if(req.url.startsWith===('./static')){
//         res.sendFile(path.resolve('./public'+req.url()));
//     }else{
//         next();
//     }
//
// })
//任何人访问/都会执行发送和请求
// 请求的地址
server.get('/',(req,res)=>{
    // res.sendFile(path.resolve('./public'));
    // res.setHeader('Content-Type','image/png');
   // console.log(req.header);
   // console.log(req.query);
   // console.log(req.socket.remoteAddress);
   res.send('hello  wro');
    })

    // 请求的头信息
    // console.log(req.header);
    //获取请求的查询字符串
    // console.log(req.query);
    // 获取用户的ip地址
    // console.log(req.socket.remoteAddress);

    // res.end(`<script></script>`);

    // res.setHeader('Content-Type','text/html');
    //
    // server.get('/', (req, res) => {
    //     res.sendFile(path.resolve('./index.html'));
    server.listen(3333,()=>{
        console.log(`服务器在${port}启动`);
    });
