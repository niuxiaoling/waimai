<template>
    <div>
        <section class="Account">
            <a href="#/me">&lt;</a>
            <h1>账户信息</h1>
        </section>
        <div class="Account_List">
            <ul class="Name">
                <li>
                    <span>头像</span>
                    <span>
                        <input type="file">
                        <img src="" alt="">
                        <span class="file">&gt;</span>
                    </span>
                </li>
                <li>
                    <span>用户</span>
                    <span>『玲』</span>
                </li>
            </ul>
            <h2>账号绑定</h2>
            <ul class="Name">
                <li>
                    <span>手机</span>
                    <span>
                        <span class="file">&gt;</span>
                        <span class="phone">176****0392</span>
                    </span>
                </li>
            </ul>
            <h2>安全设置</h2>
            <ul class="Name">
                <li>
                    <span>登录密码</span>
                    <span>
                        <span class="file">&gt;</span>
                        <span class="phone">未设置</span>
                    </span>
                </li>
            </ul>
            <a href="#/login" class="loginButton" @click="submit">
                退出登录
            </a>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            submit:function() {
               localStorage.user='';
            }
        }
    }
</script>
<style scoped>
    .Account{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        justify-content: space-between;
        height: 0.5rem;
        color: #fff;
        background: linear-gradient(90deg,#FAD0C4, #ff9a9e);
        font-size: 0.23rem;
        line-height: 0.5rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
    .Account>a{
        color: #fff;
        font-family: '宋体';
        font-weight: 900;


    }
    .Account>h1{
        position: absolute;
        top: 0;
        left: 40%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        font-size: 0.2rem;
    }

    .Account_List{
        width: 100%;
        margin-top: 0.5rem;
        background: #F5F5F5;
    }
    .Name{
        background-color: #fff;
        width: 100%;
        font-size: .2rem;
        color: #333;
        margin-top: .2rem;
        font-weight: 700;
    }
    .Name>li:first-child{
        width: 100%;
        height: 0.75rem;
        line-height: 0.75rem;
        position: relative;
        border-top: 1px solid #ddd;
        padding: 0 .16rem;
        cursor: pointer;
        font-size: 0.16rem;
    }
    .Name>li:first-child input{
        display: block;
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .Name>li:first-child .file{
        float: right;
        font-family: '宋体';
        color: #ccc;
    }
    .Name>li:last-child{
        width: 100%;
        height: 0.75rem;
        line-height: 0.75rem;
        position: relative;
        border-top: 1px solid #ddd;
        padding: 0 .16rem;
        cursor: pointer;
        font-size: 0.16rem;
        display: flex;
        justify-content: space-between;
    }
    .Account_List>h2{
        margin: .18rem 0 0 .2rem;
        color: #666;
        font-weight: 400;
        font-size: 0.18rem;
        box-sizing: border-box;
    }
    .Name .phone{
        float: right;
    }
    .Account_List>.loginButton{
        display: block;
        text-align: center;
        padding: .1rem 0;
        margin: .2rem auto;
        color: #fff;
        border-radius: .08rem;
        font-size: .225rem;
        border: 0;
        font-weight: 800;
        /*background-color: #ff5339;*/
        background: rgb(27, 169, 225);
        width: 90%;
        box-sizing: border-box;
    }

</style>