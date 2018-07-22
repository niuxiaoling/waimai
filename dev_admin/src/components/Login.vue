<template>
    <div>
         <div class="header">
             <div class="header-box">
                 <div class="header-left">
                     <span class="storecenter">商户中心</span>
                 </div>
                 <div class="header-right">
                <span>
                    客户端下载
                </span>
                     <span>客服电话：020-202020</span>
                 </div>
             </div>
         </div>
         <el-row type="flex" justify="center" align="middle" class="row">
             <el-col :span="9" class="col">
                 <el-form  label-with="110px" :model="form" ref="form" :rules="rules">
                      <el-form-item label="手机号" required  prop="account">
                          <el-input type="text" v-model="form.account"></el-input>
                      </el-form-item>
                     <el-form-item label="密码" required  prop="pass">
                         <el-input type="password" v-model="form.pass"></el-input>
                     </el-form-item>
                     <el-form-item >
                           <el-button type="primary" @click="submit">登录</el-button>
                           <router-link :to="{name:'register'}">
                               <el-button type="text" >去注册</el-button>
                           </router-link>

                     </el-form-item>
                 </el-form>
             </el-col>
         </el-row>
         <div class="footer">
             <div class="include-footer">
                 ele.me, All Rights Reserved.
             </div>
         </div>
    </div>
</template>
<script>
    export default{
        name: 'login',
        data(){
            let checkAccount=(rule,value,callback)=>{
                let reg=/^\d{11}$/;
                if(reg.test(value)){
                    callback();
                }else{
                    callback(new Error('请输入11位数字'));
                }
            };
            let checkPass=(rule,value,callback)=>{
                if(value.length<6){
                    callback(new Error('密码不低于6位'));
                }else{
                    callback();
                }
            }
            return{
              form:{
                 account: '',
                  pass:''
              },
              rules:{
                  account:[{validator:checkAccount,trigger:'change'}],
                  pass:[{validator:checkPass,trigger:'change'}],
              },
            }
        },
        methods: {
            submit:function () {
                this.$refs.form.validate((valid)=>{
                   if(valid){
                       fetch('/api/login',{
                           method:'POST',
                           headers:{'Content-Type':'application/json'},
                           body:JSON.stringify(this.form),
                       })
                           .then(res=>res.json())
                           .then(result=>{
                               if(result.code===2){
                                   if(result.hasStore===true){
                                       location.href='#/store?uid='+result.data.id;
                                   }else{
                                       location.href='#/step?uid='+result.data.id;
                                   }
                               }else if(result.code===4){
                                   this.$message({
                                       message:result.message,
                                   })
                               }
                           })
                   }
                });
            }
        }
    }
</script>
<style scoped>
    .header {
        width: 100%;
        height: 60px;
        background: #000;
    }
    .header-box{
        width: 800px;
        margin:0  auto;
        display: flex;
        justify-content: space-between;
    }
    .header-left{
        color: #fff;
        line-height: 60px;
    }
    .header-right{
        color: #fff;
        line-height: 60px;
    }
    .row {
        padding: 100px 0 0 0;
    }

    .col {
        padding: 20px;
        border: 1px solid #ddd;
    }
    .footer{
        margin-top: 100px;
        width: 100%;
        height: 60px;
        position:absolute;
        bottom:0;
        background: #000;
    }
    .include-footer{
        color: #ededed;
        text-align: center;
        line-height: 60px;
    }
</style>
