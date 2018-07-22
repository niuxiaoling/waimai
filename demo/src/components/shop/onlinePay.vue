<template>
    <div>
        <header class="pay">
            <h1>在线支付</h1>
        </header>
        <div class="cutdown">
            <p> 支付剩余时间</p>
            <p>00 : 03 : 17</p>
        </div>
        <section class="home">
            <ul>
                <li class="list">
                    <span class="list-item-desc">你点我送外卖订单</span>
                    <span class="list-item-detail">详情</span>
                    <span class="list-item-money">¥ {{total}}</span>
                </li>

            </ul>
            <section class="payway">
                <div class="title">
                    <span>选择支付方式</span>
                </div>
                <ul class="list-payment">
                    <li>
                        <!--<img src="" alt="">-->
                        <div class="pay-list-content">
                            <p class="content-title">支付宝</p>
                        </div>
                        <span class="content-img"></span>
                    </li>
                    <li>
                        <span class="payment-more">其他支付方式﹀</span>
                    </li>
                </ul>
            </section>
            <a href="javascript:;">
                <div class="submit-btn" @click="submit">
                    确认支付 ¥{{total}}
                </div>
            </a>

        </section>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                choicedgoods:JSON.parse(localStorage.choicedgoods),
                shopinfo:JSON.parse(localStorage.shopinfo),
                address:this.$route.address,
            }
        },
        computed:{
            total:function () {
                let t=0;
                this.choicedgoods.forEach(v=>{
                    t+=Number(v.price*v.num);
                })
                t+=Number(this.shopinfo.fei);
                return t;
            }
        },
        mounted(){

        },
        methods:{
           submit:function () {
               
           }
        }

    }
</script>
<style scoped>
    .pay {
        width: 100%;
        height: 0.5rem;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #3190e8;
    }

    .pay h1 {
        font-size: 0.20rem;
        color: #fff;
        text-align: center;
        line-height: 0.5rem;
    }

    .cutdown {
        position: relative;
        margin-top: 0.5rem;
        background: #fff;
        color: #333;
        padding: 0.32rem;
        line-height: 0.4rem;
    }

    .cutdown > p:first-child {
        color: #999;
        text-align: center;
        font-size: 0.14rem;
    }

    .cutdown > p:nth-child(2) {
        text-align: center;
        font-weight: 700;
        font-size: 0.36rem;
    }

    .home {
        position: relative;

        padding-bottom: 0.6rem;
        font-size: 0.16rem;
    }

    .home > ul li.list {
        border-top: 0.01rem solid #eee;
        background: #fff;
        font-size: 0.18rem;
        line-height: 0.24rem;
        padding: .2rem;
    }

    .list-item-desc {
        color: #333;
        display: inline-block;
        margin-right: 0.11rem;
        max-width: 2.5rem;
    }

    .list-item-detail {
        color: #999;
        padding-right: 0.2rem;

    }

    .list-item-money {
        color: #ff6000;
        position: absolute;
        right: 0.2rem;
        font-weight: 700;
    }

    .payway {
        display: flex;
        flex-direction: column;
    }

    .title {
        background: #f5f5f5;
        padding: 0.1rem 0.32rem .13rem;
        line-height: 0.16rem;
        display: flex;
        color: #999;
        justify-content: space-between;
    }
    ul.list-payment{
        background: #fff;
        display:flex ;
        flex-direction: column;
    }
    ul.list-payment li:first-child{
        padding: 0.16rem .2rem .16rem;
        font-size: 0.18rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #eee;
    }
     .content-img{
         display: block;
        width: 0.25rem;
        height: 0.25rem;
        background: url(../../assets/img/input1.png) 100% 100%;
         background-size: 100%;
    }
    .pay-list-content {
        background-color: #fff;
        display: inline-block;
        vertical-align: middle;
        line-height: .24rem;
        margin-left: .2rem
    }
    ul.list-payment li:nth-child(2){
         text-align: center;
        padding: 0.16rem .2rem .16rem;
    }
    .content-title {
        color: #333;
        font-size: 0.18rem;
    }

    .payment-more {
        color: #666;
        text-align: center;
    }

    .submit-btn {
        font-size: 0.2rem;
        background-color: #4cd964;
        color: #fff;
        border-radius: 0.06rem;
        padding: 0.14rem;
        width: 90%;
        margin: 0 auto;
        margin-top: 0.2rem;
        text-align: center;
    }
</style>
