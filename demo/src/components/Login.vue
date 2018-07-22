<template>
    <div>
        <div class="appLogin">
            <div class="appBox">
                <div class="loginHeader">
                    <div class="login-img ">
                        <span class="iconfont icon-qiyuanlogo"></span>
                        <img src="../assets/img/QQ图片20170831183451.png" alt="">
                    </div>
                    <div class="loginOne">
                        <a href="javascript:;" :class="{'active':state===2}" v-on:click="setState(2)">
                            密码登录
                        </a>
                        <a href="javascript:;" :class="{'active':state===1}" v-on:click="setState(1)">
                            手机登录
                        </a>
                    </div>
                </div>
                <form class="login-main" v-show="state===2">
                    <section class="form-1">
                        <input type="text" required placeholder="手机/邮箱/用户名" v-model="loginForm.account">
                    </section>

                    <section class="form-1">
                        <input type="text" placeholder="密码" v-model="loginForm.check">
                        <div class="btn">
                            <div class="btn-1"></div>
                            <span>
                                ...
                            </span>

                        </div>
                    </section>
                    <section class="form-1" style="display: none">
                        <input type="text" placeholder="验证码">
                        <div class="form-yan">
                            <img src="" alt="">
                            <div class="formtext">
                                <div>看不清</div>
                                <span>换一张</span>
                            </div>
                        </div>
                    </section>
                    <button class="submit" @click.prevent="submit">
                        登录
                    </button>
                </form>
                <form class="login-main" v-show="state===1">
                    <section class="form-1">
                        <input type="text"
                               placeholder="手机号/邮箱/用户名"
                               required
                               v-model="loginForm.account"
                               @keyup="check"
                               maxlength="11"
                               >
                        <button :class={countButton:true,active:!disable} disabled>
                            获取验证码
                        </button>
                    </section>
                    <div :class="{'zheng':true}" v-show="this.loginForm.account.length!=11">请输入11位手机号</div>

                    <section class="form-1">
                        <input type="text" placeholder="验证码" v-model="loginForm.check" required>
                    </section>
                    <section class="messageLogin">
                        温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
                        <a href="javascript:;">《用户服务协议》   </a>
                    </section>
                    <button class="submit" @click.prevent="submit">
                        登录
                    </button>
                </form>
            </div>
            <div class="lognFooter">
                <a href="javascript:;">关于我们</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                state: 2,
                loginForm: {
                    account: '',
                    check: '',
                },
                disable:true,
                display:true
            }
        },
        methods: {
            check:function () {
                let reg=/^\d{11}$/;
                if(reg.test(this.loginForm.account)){

//              if(this.loginForm.account.length==11){
                 this.disable=false;
              }else{
                 this.disable=true;
              }
            },
            setState: function (state) {
                return this.state = state;
            },

            submit: function () {
                if(!this.disable){
                    fetch('/api/user_login', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(this.loginForm),
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.code == 2) {
                                localStorage.user = result.data;
                                location.href = '#/me';
                            }
                        })
                }

            }
        }
    }
</script>
<style>
    html {
        background: #fff;
    }

    .appLogin {
        background: #fff;
        padding-top: 0.8rem;
    }

    .appBox {
        margin: 0 auto;
        display: flex;
        padding:0  0.75rem;
        flex-direction: column;
    }

    .login-img {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-img span{
        color:rgb(255,95,62);
        font-size: 1rem;
    }
    .loginOne {
        margin-top: 0.6rem;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .loginOne a {
        font-size: 0.28rem;
        color: #333;
        padding-bottom: 0.08rem;

    }

    .loginOne a:first-child {
        margin-right: 0.8rem;
    }

    .loginOne a.active {
        color: #ff9a9e;
        border-bottom: 0.04rem solid #ff9a9e;
    }

    .form-1 {
        height:0.96rem;
        position: relative;
        margin-top: 0.32rem;
        font-size: 0.28rem;
        background: #fff;
    }
    .zheng{
        color: red;
        font-size:0.3rem;
        display: block;
    }
    .form-1 > * {
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 0.1rem;
        transform: translateY(-50%);
    }

    .form-1 > input {
        width: 100%;
        height: 100%;
        left: 0;
        outline-color:#ff9a9e;
        border: 1px solid #ddd;
        padding-left: 0.2rem;
        color: #333;
        border-radius: 0.08rem;
    }

    .btn {
        display: flex;
        align-items: center;
        padding: 0 0.03rem;
        width: 0.4rem;
        height: 0.16rem;
        font-size: 0.28rem;
        color: #999;
        border-radius: 0.08rem;
        border: 1px solid #ddd;
    }

    .btn span {
        color: #999;
    }

    .btn-1 {
        position: absolute;
        top: -0.01rem;
        left: -0.01rem;
        width: 0.16rem;
        height: 0.16rem;
        border: 1px solid #ddd;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.1);
    }

    .form-yan {
        display: flex;
        align-items: center;
    }

    .form-yan img {
        display: block;
        width: 0.85rem;
        height: 0.32rem;
    }

    .formtext {
        margin-left: 0.1rem;
        color: #666;
        font-size: 0.12rem;
        line-height: 0.14rem;
    }

    .formtext span {
        color: #ff9a9e;
    }

    .submit {
        outline: none;
        border: none;
        display: block;
        width: 100%;
        height: 42px;
        margin-top: 30px;
        border-radius: 4px;
        background: #ff9a9e;
        color: #fff;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        line-height: 42px
    }

    .lognFooter a {
        display: block;
        color: #999;
        font-size: 0.24rem;
        position: absolute;
        left: 50%;
        margin-top: 0.4rem;
        transform: translateX(-50%);

    }

    .countButton {
        color: #ccc;
        font-size: 0.28rem;
        text-align: center;
        background: transparent;
        padding: 0;
        border: none;
        outline: none;
    }
    .countButton.active{
        color: #00a8ff;
    }
    .messageLogin {
        margin-top: 0.24rem;
        color: #999;
        font-size: 0.28rem;
        line-height: 0.4rem;
    }

    .messageLogin a {
        color: #ff9a9e;
    }
</style>