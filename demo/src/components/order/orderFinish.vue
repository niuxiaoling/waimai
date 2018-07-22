<template>
    <div>
        <section class="Finish">
            <router-link :to="{name:'orderlist'}">
                <span class="iconfont icon-fanhui jiantou"></span>
            </router-link>
            <span>订单详情</span>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA5RD979jSz5RnHsO5q3JMPhsUBPa1fnhWOTQYC/Xp36+ZhWJRvaaei18vJyMIAsaPa0VC+POBfbMAAAGHSURBVEjH7ZXZboMwEEVx2cIelrAkEAghe7P3/v+vtS7QKk0lGLWP3BeukI49nhmPhUGD/kMv0WR1eaVzmoQPvS2J2GkEsXDua4gVDRwhiPnXxtyjcFMESe1MbCngFmXj9sgoW1qIWztBRABNjFvrQCaABZzW+nNMKUn9rt8GGqH6GH35CyJKOZTWpgxjwiEZ2i4tcRYIWiCsjReIUwo4Ru43p50IJKnYNVvbNHAH+VQXJqSBvowr/y5hCDQ5kGZ8DkhwiKQJq7mRLg3UJWj1AsoLjYwR7HmwCtRZ+8/TTz3IDXJOuDLypK6uISKzKr8LPBp1lN4Z4iLR7xYgMRFgYUfsPErjyGuzFcGVhamg2wrAujLtMqw+Vz8sZEkNZ0ITMcSueXtgPDNPitDZ+rqMfP/biLA6nxADgfa8HpjQpeMGKH42j4d5n06QkEWPxbv2u6ZuATA7fcj2redEUAFplLQDTCXMhcoEwCy7Sm47FTKl7w+lgkYy9aXW43JtrtZaKgwa9He9A0eeJt+5XtaOAAAAAElFTkSuQmCC" alt="">
        </section>
        <section class="Finish_List">
            <div class="Finish_Head1">
                <div class="Finish_head">
                    <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                </div>
                <h2 v-if="orders.state===0">等待接单</h2>
                <h2 v-if="orders.state===1">已接单</h2>
                <h2 v-if="orders.state===2">订单已完成</h2>
                <p>感谢你对饿了么的信任，期待再次光临</p>
                <router-link :to="{name:'shop',query:{sid:orders.sid}}" class="again">
                    再来一单
                </router-link>
            </div>
            <div class="Finish_content">
                <div class="Finish_content1">
                    <div>
                        <img src="" alt="">
                        <span>{{orders.name}}</span>
                    </div>
                    <span>&gt;</span>
                </div>
                <div class="Finish_content2">
                    <ul>
                        <li v-for="v in goods" :key="v.id">
                            <div><p>{{v.name}}</p></div>
                            <div><span>x{{v.num}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>¥{{v.price}}</span></div>
                        </li>
                    </ul>
                </div>
                <ul class="Finish_content3">
                    <li>
                        <span>餐盒费</span>
                        <div><span>x1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>¥{{orders.fei}}</span></div>
                    </li>
                    <!--<li>-->
                        <!--<span>配送费</span>-->
                        <!--<span>￥1</span>-->
                    <!--</li>-->
                </ul>
                <!--<div class="Finish_content4">-->
                    <!--<p>-->
                        <!--<span>红包抵扣</span>-->
                        <!--<span>- ¥1.6</span>-->
                    <!--</p>-->
                <!--</div>-->
                <div class="Finish_content5">实付 ¥{{total}}</div>
            </div>
            <div class="Finish_detail">
                <div class="Finish_detail1">
                    <div>配送信息</div>
                    <ul>
                        <!--<li>-->
                            <!--<span>送达时间：</span>尽快送达 [ 14:27 ]-->
                        <!--</li>-->
                        <li>
                            <span>送货地址：</span>
                            <div class="address_1">
                                <p class="address">{{orders.cname}} {{orders.gender}}</p>
                                <p class="address">{{orders.address}}</p>
                            </div>
                        </li>
                        <li>
                            <span>配送方式：</span>商家配送
                        </li>
                    </ul>
                </div>
            </div>
            <div class="Finish_detail">
                <div class="Finish_detail1">
                    <div>订单信息</div>
                    <ul>
                        <li>
                            <span>订单号：</span>{{orders.id}}
                            <span class="del" @click="del">删除订单</span>
                        </li>
                        <!--<li>-->
                            <!--<span>支付方式：</span>-->
                            <!--<div>-->
                                <!--<p>在线支付</p>-->
                            <!--</div>-->
                        <!--</li>-->
                        <li>
                            <span>下单时间：</span>{{orders.ctime}}

                        </li>
                    </ul>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                orders:{},
                goods:[],
                id:this.$route.query.id,
                uid:this.$route.query.uid,
//                orders:this.$route.params.orders,
//                goods:this.$route.params.goods,

            }
        },
        computed:{
          total:function () {
              let t=0;
              this.goods.forEach(v=>{
                  t+=Number(v.price)*v.num;
              })
              t+=Number(this.orders.fei);
              return t;
          }
        },
        mounted(){
            fetch('/api/get_order?uid='+this.uid)
                .then(res=>res.json())
                .then(r=>{
                    this.goods=r.data.goods;
                    this.orders=r.data.orders;
                    this.orders=this.orders.filter(v=>v.id==this.id)[0];
                    this.goods=this.goods.filter(v=>v.oid==this.id);
                })
        },
        methods:{
            del:function () {
                fetch('/api/del_order?uid='+this.uid+'&id='+this.id)
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.code===2){
                            location.href='#/order';
                        }
                    })
            }
        }
    }
</script>
<style  scoped>
    .del{
        background: #50BB78;
        color: #fff;
        padding:0.05rem;
        font-size: 0.12rem;
        position: absolute;
        right:1rem;
    }
    .jiantou{
        color:#fff;
        font-weight: 400;
    }
    .Finish{
        width: 100%;
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        justify-content: space-between;
        height: 0.5rem;
        align-items: center;
        color: #fff;
        background: linear-gradient(45deg,#FFF6B7,#F6416C);
        font-size: 0.23rem;
        line-height: 0.5rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
        z-index: 99;
    }
    .Finish>a{
        color: #fff;
        font-family: '宋体';
        font-weight: 900;
    }
    .Finish>span{
        font-size: 0.18rem;
    }
    .Finish>img{
        padding-top:0.1rem;
        width: .34rem;
        float: right;
    }
    .Finish_List{
        width: 100%;
    }
    .Finish_Head1{
        text-align: center;
        background-color: #fff;
        padding-bottom: .2rem;
        margin-top: 0.5rem;
        box-sizing: border-box;
    }
    .Finish_head{
        transform: scale(1);
        width: 0.8rem;
        height: 0.8rem;
        margin:0 auto;
        padding: .133333rem;
        background-color: #fff;
        will-change: transform;
        box-sizing: border-box;
    }
    .Finish_head>img{
        width: 90%;
        height: 90%;
        border-radius: 50%;
        position: fixed;
        left: 5%;
        top:5%;
    }
    .again{
        display:block;
        width: 1rem;
        margin:0 auto;
        text-align: center;
        font-size: 0.16rem;
        padding:0.1rem;
        margin-top: 0.2rem;
        background: gold;
        color: #fff;
    }
    .Finish_Head1>h2{
        width: 100%;
        margin: 0 auto .05rem;
        color: #333;
        font-weight: 700;
        text-align: center;
        font-size: 0.2rem;
    }

    .Finish_Head1>p{
        margin-top: 0.1rem;
        padding: 0 0.5rem;
        color: #666;
        font-size: .1rem;
    }
    .Finish_content{
        background-color: #fff;
        padding: 0 .16rem;
        border-top: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
        margin-bottom: .13333rem;
        margin-top: .13333rem;
        box-sizing: border-box;
    }
    .Finish_content1{
        border-bottom: 1px solid #efefef;
        display: flex;
        align-items: center;
        padding:.1rem 0;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .Finish_content1>div{
        display: flex;
        align-items: center;
    }
    .Finish_content1>div>img{
        width: .2rem;
        height: .2rem;
    }
    .Finish_content1>div>span{
        font-size: 0.14rem;
        /*padding-left:.16rem;*/
    }
    .Finish_content1>span{
        font-size: 0.2rem;
        font-family: '宋体';
        font-weight: 800;
    }
    .Finish_content2{
        border-bottom: 1px solid #efefef;
        width: 100%;
    }
    .Finish_content2>ul>li{
        display: flex;
        justify-content: space-between;
        margin: 0.1rem 0;
        position: relative;
        color: #6e6e6e;
        font-size: 0.14rem;
    }
    .Finish_content2>ul>li>div:last-child>span:last-child{
        color: #555;
        font-weight: 700;
    }
    .Finish_content3{
        border-bottom: 1px solid #efefef;
    }
    .Finish_content3>li{
        display: flex;
        justify-content: space-between;
        font-size: .14rem;
        margin: .12rem 0;
        position: relative;
        color: #6e6e6e;
    }
    .Finish_content4{
        border-bottom: 1px solid #efefef;
        color: #fb6b23;
    }
    .Finish_content4>p{
        font-size: 0.14rem;
        display: flex;
        justify-content: space-between;
        margin: 0.1rem 0;
    }
    .Finish_content5{
        text-align: right;
        font-size: 0.16rem;
        color: #333;
        margin: 0.12rem 0;
    }
    .Finish_detail1{
        background-color: #fff;
        margin-bottom: .2rem;
        box-sizing: border-box;
    }
    .Finish_detail1>div{
        font-size: .16rem;
        color: #333;
        border-bottom: 1px solid #eee;
        padding: .1rem 0.16rem;
        box-sizing: border-box;
    }
    .Finish_detail1>ul{
        color: #6e6e6e;
        padding: .2rem 0.2rem;
        border-bottom: 1px solid #f2f2f2;
        box-sizing: border-box;
    }
    .Finish_detail1>ul>li{
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        align-items: baseline;
        padding: 0.1rem 0;
        font-size: .16rem;
    }
    .Finish_detail1 >ul li .address_1{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }


</style>