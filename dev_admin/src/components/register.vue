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
                <el-form label-width="110px" :model="form" ref="form" :rules="rules">
                    <el-form-item label="手机号" required prop="account">
                        <el-input type="text" v-model="form.account"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" required prop="pass">
                        <el-input type="password" v-model="form.pass"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" required prop="checkPass">
                        <el-input type="password" v-model="form.checkPass"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit" :plain="true">注册</el-button>
                        <router-link :to="{name:'login'}">
                            <el-button type="text">已有账号，去登录</el-button>
                        </router-link>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

    </div>
</template>
<script>
    export default{
        name: 'register',
        data(){
            let checkaccount = (rule, value, callback) => {
                let reg = /^\d{11}$/;
                if (reg.test(value)) {
                    callback();
                } else {
                    callback(new Error('不是合法的手机号'));
                }
            };
            let checkpass = (rule, value, callback) => {
                if (value.length < 6) {
                    callback(new Error('密码不能低于6位'));
                } else {
                    callback();
                }
            };
            let twoPass = (rule, value, callback) => {
                if (value == this.form.pass) {
                    callback();
                } else {
                    callback(new Error('两次密码不一致'));
                }
            };
            return {
                form: {
                    account: '12345678901',
                    pass: '123456',
                    checkPass: '123456'
                },
                rules: {
                    account: [{validator: checkaccount, trigger: 'blur'}],
                    pass: [{validator: checkpass, trigger: 'blur'}],
                    checkPass: [{validator: twoPass, trigger: 'blur'}]
                }
            }
        },
        methods: {
            submit: function () {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        fetch('/api/register',{
                            method:'POST',
                            headers:{'Content-Type':'application/json'},
                            body:JSON.stringify({account:this.form.account,pass:this.form.pass}),
                        })
                            .then(res=>res.json())
                            .then(data=>{
                                if(data.code===2){
                                   this.$message({
                                       showClose:true,
                                       message:'注册成功',
                                       type:'success',
                                       duration:3000,
                                   });
                                }else{
                                    this.$message({
                                        showClost:true,
                                        message:data.message,
                                    });
                                }
                            })

                    } else {
                        return false;
                    }
                })
            },

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
    .el-message{
        background:pink;
        width:100px;
        height: 100px;
    }
</style>

