"use strict";
const  express=require('express');
const  server=express();
const  path=require('path');
const  mysql=require('mysql');
const  bodyParser=require('body-parser');
const  port=18080;
const  con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sell'
});
// const con=mysql.createConnection({
//     host:'sqld.duapp.com',
//     user:'9a5895cacb68467b96bab57418ca87a0',
//     password:'120e5c69e3e8468bb6fc7b0904578eec',
//     port:4050,
//     database:'iYqFuMFgOBZgJLmMEDmi'
// });


//中间件
server.use(express.static('./public'));
server.use(bodyParser.json());

//此接口通往index.html
server.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
});

server.get('/admin',(req,res)=>{
   res.sendFile(path.resolve('./admin.html'));
});

//此接口查询所有的店铺，通过get方式获取，取到的数据用req.query
server.get('/api/get_shops',(req,res)=>{
    let sql='select * from store';
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err.message);
        } else{
            res.json(result);
        }
    })
});
//此接口通过id查询店铺的所有信息
server.get('/api/get_store_info',(req,res)=>{
    let sql='select * from store where id=?';
    con.query(sql,[req.query.id],(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json(result);
        }
    })
});
//此接口查询通过sid查询所有的分类页
server.get('/api/get_cates', (req, res) => {
    // ?代替条件，[]代表数据
    con.query('select * from categories where sid=?',[req.query.sid],
        (err,result)=>{
            if(err){
                console.log(err.message);
            }else{
                res.json(result);  //res输出结果
            }
        });
});

//此接口通过sid查询所有的商品信息
server.get('/api/get_goods', (req, res) => {
    let sql='select * from goods where sid=?';
    con.query(sql,[req.query.sid],(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json(result);
        }
    })
});


//通过post方式必须通过中间件的body-parser方法获取数据传给req.body
server.use(bodyParser.json());
// 此接口插入一个账号到user表
server.post('/api/register',(req,res)=>{
    let sql='insert into user(name,pass) values(?,?)';
    con.query(sql,[req.body.account,req.body.pass],(err,result)=>{
        if(err){
            if(err.message.startsWith('ER_DUP_ENTRY')){
                res.json({code:4,message:'账号已存在'});
            }
        }else{
            res.json({code:2,message:'注册成功'});
        }
    })
});
//此接口查询用户是否已经有账号和密码，并跳转到对应的页面
server.post('/api/login',(req,res)=>{
    let sql='select * from user where name=? and pass=?';
    con.query(sql,[req.body.account,req.body.pass],(err,result)=>{
        if(err){
            res.json({code:4,message:"数据库登录有误"});
        }else{
            if(result.length){
                let sql='select * from store where uid=?';
                con.query(sql,[result[0].id],(err,r)=>{
                    if(r.length){
                        res.json({code:2,message:"ok",data:result[0],hasStore:true});
                    }else{
                        res.json({code:2,message:"ok",data:result[0],hasStore:false});
                    }
                })

            }else{
                res.json({code:4,message:'账号不存在'});
            }
        }
    });
});


//拿到商家用户的公司信息
server.post('/api/update_user',(req,res)=>{
    let sql='update user set company_name=? , number=? where id=?';
    con.query(sql,[req.body.name,req.body.number,req.body.uid],(err,result)=>{
        if(err) {
            console.log(err.message);
        } else{
            res.json(result.affectedRows);
        }
    });
});
//添加商家店铺
server.post('/api/add_store',(req,res)=>{
    let sql='insert into store (uid,name,pic) values(?,?,?)';
    con.query(sql,[req.body.uid,req.body.name,req.body.pic],(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json(result.insertId);
        }
    })
})
//更改商店店铺信息
server.post('/api/update_store',(req,res)=>{
    // let {name,fei,qisong,info,message,pos,uid}=req.body;
    let sql='update store set name=?,fei=?,qisong=?,info=?,message=?,pos=? where uid=?';
    con.query(sql,[req.body.name,req.body.fei,req.body.qisong,req.body.info,req.body.message,req.body.pos,req.body.uid],(err,result)=>{
        res.json({code:2,data:result.affectedRows,message:'ok'});
    })
});
//通过uid查询店铺信息
server.get('/api/get_user_store_info',(req,res)=>{
        let sql='select * from store where uid=?';
        con.query(sql,[req.query.uid],(err,result)=>{
            if(err){
                console.log(err.message);
            }else{
                res.json(result[0]);
            }
        })
    }
);


//通过post方式传送数据到数据库
//先判断验证码是否正确，然后再找是否存在这个账号，若存在就返回id，不存在就插入一条到数据库
server.post('/api/user_login',(req,res)=>{
    if(req.body.check!=='8888'){
        res.json({code:4,message:"验证码错误"})
    }else{
        let sql='select * from c_user where account=?';
        con.query(sql,[req.body.account],(err,result)=>{
            if(result.length){
                res.json({code:2,message:'ok',data:result[0].id})
            }else{
                let sql='insert into c_user(account) values (?)';
                con.query(sql,[req.body.account],(err,result)=>{
                    res.json({code:2,message:'ok',data:result.insertId});
                })
            }
        })
    }
})

//拿到用户的用户名
server.get('/api/get_c_user_info',(req,res)=>{
    let sql='select account from c_user where id=?';
    con.query(sql,[req.query.id],(err,result)=>{
        if(result.length){
            res.json(result[0]);
        }
    })
})

//添加地址
server.post('/api/set_c_address',(req,res)=>{
    // let  {uid,name,phone,address,gender,label}=req.body;
    let sql='insert into c_user_address (uid,name,phone,address,gender,label)  values (?,?,?,?,?,?)';
    con.query(sql,[req.body.uid,req.body.name,req.body.phone,req.body.address,req.body.gender,req.body.label],(err,result)=>{
        if(!err){
            if(result.insertId){
                res.json({code:2,message:'ok',data:result.insertId});
            }
        }else{
            res.json({code:4,messgae:err.message})
        }
    })
});
// 获取所有的用户信息by uid
server.get('/api/get_c_user',(req,res)=>{
    let sql='select * from c_user_address where uid=? order by is_default desc';
    con.query(sql,[req.query.uid],(err,result)=>{
        if(result.length){
            res.json({code:2,message:'ok',data:result})
        }


    })
})

//设置默认的收货地址
server.get('/api/set_default_address',(req,res)=>{
    let sql='update  c_user_address set is_default=0 where uid=?';
    con.query(sql,[req.query.uid],(err,result)=>{
        if(!err){
            let sql='update c_user_address set is_default=1 where id=?';
            con.query(sql,[req.query.id],(err,r)=>{
                if(err){
                    res.json({code:4,message:'ok',data:r[0]})
                }else{
                    res.json({code:2,message:'ok',data:r[0]})
                }

            })
        }
    })
})

//查询默认的收货地址
server.get('/api/get_user_default_address',(req,res)=>{
    let sql='select * from  c_user_address where is_default=1 and uid=?'
    con.query(sql,[req.query.uid],(err,result)=>{
        if(result.length){
            res.json({code:2,message:'ok',data:result[0]})
        }else{
            res.json({code:4,message:'not ok',data:result[0]})
        }
    })
});

server.post('/api/get_c_address',(req,res)=>{
    // let {id,name,address,gender,label,phone,uid}=req.body;
    let sql='update c_user_address set name=?,address=?,gender=?,label=?,phone=?,uid=? where id=?';
    con.query(sql,[req.body.name,req.body.address,req.body.gender,req.body.label,req.body.phone,req.body.uid,req.body.id],(err,result)=>{
        if(!err){
            res.json({code:2,message:'ok',data:result[0]})
        }
    })
});
//查找点击的那个地址
server.get('/api/select_c_address',(req,res)=>{
    let sql='select * from c_user_address where id=?';
    con.query(sql,[req.query.id],(err,r)=>{
        if(!err){
            res.json({code:2,message:'ok',data:r[0]})
        }
    })
})
//删除当前id的地址
server.get('/api/delete_address',(req,res)=>{
    let sql='delete from c_user_address where id=?';
    con.query(sql,[req.query.id],(err,r)=>{
        if(!err){
            res.json({code:2,message:'ok',data:r[0]})
        }
    })
});

// 获取所有的用户的订单信息by UID
server.get('/api/get_order',(req,res)=>{
    let sql='select o.*,s.fei,s.name,s.pic,c.name as cname,c.gender,c.address,c.phone  from  orders as o,store as s,c_user_address as c where o.sid=s.id and o.address_id=c.id and o.uid=?';
    con.query(sql,[req.query.uid],(err,r)=>{
        if(!err){
            let s='(';
            r.forEach(v=>{
                s+=v.id+',';
            })
            let sql='select o.*,g.name,g.price from order_goods as o,goods as g  where  o.gid=g.id and  o.oid  in'+s.slice(0,-1)+');'
            con.query(sql,(err,result)=>{
                if(!err){
                    res.json({
                        code:2,
                        message:'ok',
                        data:{
                            orders:r,
                            goods:result,
                        }
                    });
                }
            })
        }
    })
});

server.get('/api/del_order',(req,res)=>{
    let sql='delete from orders where id=?';
    con.query(sql,[req.query.id],(err,result)=>{
        if(err){
            console.log(err.message);
        }else {
            res.json({code: 2, message: 'ok', data:result})
        }
    })
})
// 将订单信息插入到数据库
server.post('/api/send_order',(req,res)=>{
    let sql='insert into orders (uid,address_id,sid) values(?,?,?)';
    con.query(sql,[req.body.uid,req.body.aid,req.body.sid],(err,result)=>{
        let oid=result.insertId;
        let index=0;
        req.body.goods.forEach(v=>{
            let sql='insert into order_goods (oid,gid,num) values(?,?,?)';
            con.query(sql,[oid,v.id,v.num],(err,result)=>{
                index+=1;
                if(index===req.body.goods.length){
                    res.json({code:2,message:'ok'});
                }
            })
        })
    })
});



server.get('/api/add_cates',(req,res)=>{
    let sql='insert into  categories(sid,name) values(?,?) ';
    con.query(sql,[req.query.sid,req.query.name],(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json(result.insertId);
        }
    })
});
server.get('/api/update_cate',(req,res)=>{
    let sql='update categories set name=? where id=?';
    con.query(sql,[req.query.name,req.query.id],(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json(result.affectedRows);
        }
    })
});
server.get('/api/delete_cates',(req,res)=>{
    let sql='delete from categories where id=?';
    con.query(sql,[req.query.id],(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json(result.affectedRows);
        }
    })
});
server.get('/api/del_cates',(req,res)=>{
    let sql=`delete from categories where id in(${req.query.ids})`;
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json(result.affectedRows);
        }
    });
});

server.listen(18080, ()=>{
    console.log(`服务器启动在${port}端口`);
})
