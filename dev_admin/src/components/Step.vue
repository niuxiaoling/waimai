<template>
    <div class="steps" >
        <div class="steps-top">
            <div class="step-box">
                <el-steps :space="400" :active="active" center >
                    <el-step title="步骤 1" description="公司基本信息" align-center></el-step>
                    <el-step title="步骤 2" description="上传公司营业执照"></el-step>
                    <el-step title="步骤 3" description="等待审核"></el-step>
                </el-steps>
            </div>
        </div>
        <section class="content">
            <div class="mes">
                <el-form label-width="100px" :model="form1" ref="form1" v-show="active===1" :rules="rules">
                    <el-form-item label="公司名称" inline required prop="name">
                        <el-input  v-model="form1.name">公司名称
                        </el-input>
                    </el-form-item>
                    <el-form-item label="公司注册号" inline  required prop="number">
                        <el-input v-model="form1.number">公司注册号</el-input>
                    </el-form-item>
                </el-form>
                <el-form label-width="100px" :model="form2" ref="form2" v-show="active===2">
                    <el-form-item label="店铺名称" inline>
                        <el-input v-model="form2.name">店铺名称
                        </el-input>
                    </el-form-item>
                    <el-form-item label="店铺图片" inline>
                        <el-input v-model="form2.pic">店铺图片</el-input>
                    </el-form-item>
                </el-form>
                <el-button v-show="active===3" type="primary" @click="start">开始店铺</el-button>

            </div>
            <div class="button">
                <el-button type="primary" @click="prev" v-if="active!==1">上一步</el-button>
                <el-button type="primary" @click="next" v-if="active!==3">下一步</el-button>
            </div>

        </section>


    </div>
</template>
<script>
    export default{
        data(){
            let checknumber=(rule,value,callback)=>{
                let reg=/^\d{100}$/;
                if(reg.test(value)){
                    callback();
                }else{
                    callback(new Error('只能是数字'))
                }
            }
            let  checkname=(rule,value,callback)=>{
                if(value){
                    callback();
                }else{
                    callback(new Error('公司名不能为空'));
                }
            };
            return {
                active:1,
                form1:{
                    name:'',
                    number:''
                },
                form2:{
                    name:'',
                    pic:''
                },
                uid:this.$route.query.uid,
                rules:{
                   name:[{trigger:'change',validator:checkname}],
                   number:[{trigger:'change',validator:checknumber}]
                },
            }

        },
        methods:{

            next:function () {
                let n=this.active;
                this.active=n+1>3?3:n+1;
            },
            prev:function () {
                let n=this.active;
                this.active=n-1<1?1:n-1;
            },
            start:function(){
                this.form1.uid=this.uid;
                this.form2.uid=this.uid;
                fetch('/api/update_user',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({name:this.form1.name,number:this.form1.number,uid:this.form1.uid}),
                });
                fetch('/api/add_store',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(this.form2),
                })
                location.href='#/store?uid='+this.uid;
            }
        }
    }
</script>
<style scoped>
    .steps{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        margin:auto;
    }
    .steps-top{
        width: 100%;
        margin-top: 100px;
        text-align: center;
    }
    .step-box{
        display: inline-block;
    }
    .content{
        width: 800px;
        margin: 10px auto;

    }
    .mes{
        height: 200px;
        padding:30px 40px 30px 10px;
        text-align: center;
        border:1px solid  #999;
    }
    .button{
        text-align: center;
        margin-top: 10px;
    }
    .el-button{
        display: inline-block;
    }
</style>

