<template>
    <div>
        <section class="order-header">
            <a href="">
                <div class="header_1 iconfont icon-fanhui">  </div>
                <div class="header-title">订单</div>
            </a>
        </section>
        <div class="mainbox">
            <div class="box" v-if="orders">
                <section class="order-list" >
                    <router-link
                            class="order-body"
                            v-for="v in orders"
                            :key="v.id"
                            :to="{name:'orderfinish',params:{orders:v,goods:goods.filter(c=>c.oid==v.id)},query:{'uid':uid,'id':v.id}}"
                    >
                        <div class="ordered-logo">
                            <img src="https://fuss10.elemecdn.com/b/b1/5b8287657d562143e4eee7017d832png.png?imageMogr/format/webp/"
                                 alt="">
                        </div>
                        <div class="orderd-content">
                            <div class="orderd-title">
                                <div class="orderd-id">
                                    订单号：<span>{{v.id}} </span>
                                </div>
                                <div class="title">
                                    <p>{{v.name}} <span class="iconfont icon-you   jiantou"></span></p>
                                    <a href="">
                                        <p class="status" v-if="v.state==0">等待接单</p>
                                        <p class="status" v-if="v.state==1">已接单</p>
                                        <p class="status" v-if="v.state==2">订单已完成</p>
                                    </a>
                                </div>
                                <p class="time">{{getTime(v.ctime)}}</p>
                            </div>

                            <div class="orderd-detail">
                                <p><span class="orderd-info">{{getInfo(v.id)}}</span>
                                    <span class="orderd-info">等{{getNum(v.id)}}件商品</span>
                                </p>
                                <p class="price">¥{{getTotal(v.id,v.fei)}}</p>
                            </div>
                        </div>
                    </router-link>
                </section>
            </div>
            <div class="order-no" v-else>您还没有点外卖，快去点一个吧！</div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import  Footer  from '../Footer.vue'
    export default{
        components:{
            'app-footer': Footer,
        },
        data(){
            return {
                uid: localStorage.user,
                goods: [],
                orders: [],
            }
        },
        methods: {
            getTime(ctime){
                let date = new Date(ctime);
                let m = [date.getFullYear(), date.getMonth()+1,date.getDate()].join('-');
                let t = [date.getHours(), date.getMinutes()].join(':');
                return m +'      '+t;
            },
            getInfo(oid){
                let name='';
                this.goods.forEach(v=>{
                   if(v.oid==oid){
                       name+=v.name+'+';
                   }
                })
                return name;
            },
            getNum(oid){
                let num=0;
                this.goods.filter(v=>{
                    if(v.oid==oid){
                        num+=1;
                    }
                })
                return num;
            },
            getTotal(oid,fei){
               let t=0;
               this.goods.forEach(v=>{
                   if(v.oid===oid){
                       t+=Number(v.price)* v.num;
                   }
               })
                t+=Number(fei);
                return t;
            },
        },
        mounted(){
            fetch('/api/get_order?uid=' + this.uid)
                .then(res => res.json())
                .then(r => {
                    if (r.code == 2) {
                        this.goods = r.data.goods;
                        this.orders = r.data.orders;
                    }
                })
        }
    }
</script>
<style scoped>
    /*头部开始*/
    .order-header {
        width: 100%;
        background: linear-gradient(45deg,#FFF6B7,#F6416C);
        position: fixed;
    }
    .order-no{
        font-size: 0.48rem;
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: 1.5rem;
    }
    .header_1 {
        padding: 0.1rem 0.13rem;
        font-size: 0.48rem;
        font-family: '宋体';
        font-weight: 800;
        color: #fff;
        display: flex;
        text-align: left;
    }

    .header-title {
        position: absolute;
        left: 50%;
        top: 0.1rem;
        font-weight: 700;
        color: #fff;
        transform: translateX(-50%);
        font-size: 0.4rem;
    }

    /*头部结束*/
    .mainbox{
        padding-top: 0.74rem;
    }
    .box{
       margin-top: 0.26777rem;
    }
    .order-list{
        width: 100%;
    }
    .order-list > a {
        display: flex;
        justify-content:flex-start;
        margin-bottom: 0.26777rem;
        background: #fff;
        padding: .373333rem 0 0 .4rem;
    }
    .ordered-logo {
        padding-right:.13333rem;
        display: flex;
    }

    .ordered-logo img {
        border: 1px solid #eee;
        width: .6398rem;
        height: .6398rem;
        border-radius: .053333rem;
    }
    .orderd-content{
        display: flex;
        flex-direction: column;
    }
    .orderd-id{
        font-size: .28rem;
        border-bottom: 1px solid #eee;
        margin-bottom: 0.12rem;
    }
    .orderd-title {
        padding-right: .1776rem;
        padding-bottom: .1764rem;
         border-bottom: 0.01rem solid #eee;
     }

    .title {
        font-size: .32rem;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title a {
        display: block;
        color: inherit;

    }

    .title  a .status {
        text-align: right;
        font-size: .293333rem;
    }

    .time {
        padding-top: 0.05rem;
        font-size: 0.29222rem;
        color: #999;
    }

    .orderd-detail {
        display: flex;
        justify-content: space-between;
        padding: .2rem .12rem .2rem 0;
    }

    .orderd-detail > p:first-child {
        color: #666;
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .17rem;

    }
    .orderd-detail > p:first-child .orderd-info{
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 40%;
    }

    .orderd-detail .price {
        flex-basis: 0.8rem;
        font-size: .346667rem;
        color: #333;
        font-weight: 700;
    }
    .jiantou{
        font-size: 0.12rem;
        color: #ddd;
    }



</style>