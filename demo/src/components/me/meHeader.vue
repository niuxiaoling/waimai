<template>
    <div>
        <section class="me-header">
            <router-link :to="{name:'home'}">
                <div class="header_1 iconfont icon-fanhui"> </div>
            </router-link>
            <div class="header-title">我的</div>
        </section>
        <a href="#/me/meMess">
            <section class="user-main">
                <div class="info-img">
                </div>

                <div class="main-name">
                    <p class="zhanghao">{{customer.account}}</p>
                    <p class="tel">{{account}}</p>
                </div>
                <span> > </span>
            </section>
        </a>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               id:localStorage.user,
               customer:{},
            }
        },
        computed:{
            account:function () {
                if(this.customer.account){
                    return  this.customer.account.slice(0,3)+"****"+this.customer.account.slice(-4);
                }

            }
        },
        mounted(){
            if(!localStorage.user){
                location.href='#/login';
            }else{
                fetch('/api/get_c_user_info?id='+this.id)
                    .then(res=>res.json())
                    .then(r=>{
                       this.customer=r;
                    })
            }
        }
    }
</script>
<style scoped>
    .me-header {
        width: 100%;
        background: linear-gradient(90deg,#FFF6B7,#F6416C);
        position: relative;
    }
    .header_1 {
        font-size: 0.96rem;
        font-family: '宋体';
        font-weight: 800;
        color: #fff;
        display: flex;
        text-align: left;
    }
    .icon-fanhui{
        font-size: 0.4rem;
        line-height:0.96rem;
        padding-left: 0.3rem;
    }
    .header-title {
        position: absolute;
        left: 50%;
        top: 0rem;
        font-weight: 700;
        color: #fff;
        transform: translateX(-50%);
        font-size: 0.4rem;
        line-height: 0.96rem;
    }

    .user-main {
        background: linear-gradient(90deg,#FFF6B7,#F6416C);
        padding:0.34rem .2rem;
        display: flex;
        position: relative;
    }

    .info-img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        display: inline-block;
        background: #fff;
    }

    .info-img img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .main-name {
        color: #fff;
        font-size: 0.28rem;
        margin-left: 0.24rem;
    }
    .zhanghao{
        font-size: 0.56rem;
        margin-bottom: .2123456rem;
    }
    .tel {
        font-size: 0.32rem;
    }

    .main-name + span {
        height: 100%;
        color: #fff;
        font-family: '宋体';
        font-size: 0.3rem;
        position: absolute;
        right: 0.2rem;
        top: 0;
        transform: translateY(30%);
    }

</style>