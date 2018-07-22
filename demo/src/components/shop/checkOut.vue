<template>
    <div>
        <router-link :to="{name:'shop',query:$route.query}">
            <section class="checkout"  >
                <a href="javascript:;">
                    <div class="header_1"> < </div>
                    <div class="header-title">确认订单</div>
                </a>
            </section>
        </router-link>

        <div class="checkout1">
            <div class="box"></div>
            <section class="cart-address checkout-section" v-if="!address">
                <router-link :to="{name:'address-list',query:$route.query}">
                    <div class="address-item">
                        <span class="iconfont icon-dingwei"></span>请添加一个收货地址  <span>   > </span>
                    </div>
                </router-link>
            </section>
             <section class="addressView" v-else>
                    <div class="current1">
                      <router-link :to="{name:'address-list',query:$route.query}">
                          <div class="address">
                            <p class="address_top">
                                <span>{{address.name?address.name.slice(0,1):address.name}}</span>
                                <span>{{address.gender}}</span>
                                <span>{{address.phone}}</span>
                            </p>
                            <p class="address_bottom">
                                <span class="farHome">{{address.label}}</span>
                                <span>{{address.address}}</span>
                            </p>
                        </div>
                      </router-link>
                    </div>
             </section>

            <section class="delivery checkout-section">
                <div class="delivery-left">
                    <span>送达时间</span>
                </div>
                <div class="delivery-right">
                    <span>尽快送达 | 预计23:51</span>
                    <div class="delivery-extra">
                        <span>蜂鸟专送</span>
                    </div>
                </div>
            </section>
            <section class="checkout-section cart">
                <div class="cart-item">
                    <span>  支付方式</span>
                    <span class="cartitem">在线支付 ></span>
                </div>
                <div class="paylist">
                    <span>  红包</span>
                    <span>选择地址后使用红包></span>

                </div>
            </section>
            <section class="cart-group checkout-section">
                <h3 class="shopinfo">
                    <img src="//fuss10.elemecdn.com/8/e3/1ef1d11bf8062ce7a9a318cad491ajpeg.jpeg" alt="">
                    {{shopinfo.name}}
                </h3>
                <ul class="foodlist">
                    <li v-for="v in  goods" :key="v.id">
                        <span class="ui-ellipsis">{{v.name}}</span>
                        <span>x {{v.num}}</span>
                        <span>¥{{v.price*v.num}}</span>
                    </li>
                </ul>
                <ul class="fee">
                    <li>
                        <div class="ui-ellipsis">配送费</div>
                        <div>¥{{shopinfo.fei}}</div>
                    </li>
                </ul>

                <div class="total">
                        <div class="total-left">
                        </div>
                        <div class="total-right">待支付 ¥{{total}}</div>
                </div>
            </section>
            <section class="checkout-section info">
                <a href="">
                    <div class="cart-item">
                        <span>  订单备注</span>
                        <span class="cartitem">口味、偏好等 ></span>
                    </div>
                    <div class="paylist">
                        <span>  发票信息</span>
                        <span>商家不支持开发票></span>

                    </div>
                </a>
            </section>
        </div>
        <!--<router-link :to="{name:'onlinePay',query:$route.query,params:this.address}">-->
            <footer class="delivery-footer">
    <span>待支付 ¥{{total}}</span>
                <small>
                    ｜优惠 ¥10
                </small>

                <div class="submitbtn" @click="submit">
                    确认下单
                </div>
            </footer>
        <!--</router-link>-->


    </div>
</template>
<script>
    export default{
        data(){
            return{
                uid:localStorage.user,
                shopinfo:JSON.parse(localStorage.shopinfo),
                goods:JSON.parse(localStorage.choicedgoods),
                address:null,
            }
        },
        computed:{
          total:function () {
              let total=0;
             this.goods.forEach(v=>{
                 total+=Number(v.num*v.price);
             })
             total+=Number(this.shopinfo.fei);
             return total;
          }
        },
        mounted(){
            fetch('/api/get_user_default_address?uid='+this.uid)
                .then(res=>res.json())
                .then(r=> {
                    if (r.code == 2) {
                       this.address=r.data;
                    }else if(r.code==4){
                        this.address=null;
                    }
                });
        },
        methods:{
            submit:function () {
                let data={
                    uid:localStorage.user,
                    sid:this.$route.query.sid,
                    aid:this.address.id,
                    goods:this.goods,
                }
                fetch('/api/send_order',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(data),
                })
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
<style>
    /*头部开始*/
    .checkout {
        width: 100%;
        background-image: linear-gradient(90deg, #FAD0C4, #ff9a9e);
        position: fixed;
        left:0;
        align-items: center;
        z-index: 100;
        top:0;
    }

    .header_1 {
        width: 1.173333rem;
        height: 1.173333rem;
        font-size: 0.48rem;
        align-items: center;
        font-family: '宋体';
        font-weight: 800;
        color: #fff;
        display: flex;
        justify-content: center;
    }
    .header-title {
        position: absolute;
        left: 50%;
        top: 0.3rem;
        font-weight: 700;
        color: #fff;
        transform: translateX(-50%);
        font-size: 0.48rem;
    }

    /*头部结束*/
    /*地址开始*/
    .checkout1 {
        font-size:.426667rem;
        color: #333;
        position: relative;
        padding-bottom: 0.7rem;
        display: flex;
        flex-direction: column;
    }
    .box{
        height:1.173333rem ;
    }
    .cart-address {
        background: #fff url('../../assets/img/dashed.png') repeat-x 0 100%;
        min-height: 0.8rem;
        display: flex;
        background-size: 0.22rem;
        align-items: center;
        justify-content: center;
    }
    .cart-address  a{
        color: #000;
    }
    .address-item {
        padding: 0 .613333rem 0 1.133333rem;
        margin-bottom: .266667rem;
        position: relative;
        font-size: .426667rem;
    }

    /*地址结束*/
    /*送达时间开始*/
    .checkout-section:not(:last-child) {
        margin-bottom: .13rem;
        border-top: 0.01rem solid #eee;
        border-bottom: .013333rem solid #eee;
    }

    .delivery {
        background: #fff;
        border-left: .06rem solid #ff9a9e;
        padding: .13rem .2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .delivery-left {
        width: 30%;
        color: #333;
        font-size: 0.18rem;
        font-weight: 700;
    }

    .delivery-right {
        width: 70%;
        margin-left: 0.1rem;
        text-align: right;
        color: #3190e8;
        font-size: 0.16rem;
    }

    .delivery-extra {
        margin-top: .1rem;
        padding-top: .1rem;
        border-top: 1px solid #eee;
        font-size: .14rem;
        word-spacing: .003rem;
    }

    .delivery-extra span {
        padding: 0.03rem 0.05rem;
        color: #fff;
        border-radius: 0.03rem;
        background: #3190e8;
    }
    /*设置默认地址开始*/
    .current1{
        background-color: #fff;
        padding: .15rem;
        border-bottom: 0.005rem solid #eee;
        margin-bottom:.266667rem;
        display: flex;
        font-size: 0.16rem;
    }
    .address{
        width: 100%;
    }
    .address_top span{
        font-weight:600;
    }
    .address_bottom span:nth-child(1){
        background: #ff5722;
        border-radius: 0.05rem;
    }
    .farHome{
        display: inline-block;
        background-color: #ff5722;
        border-radius: .053333rem;
        font-size: .14rem;
        color: #fff;
        width: 0.4rem;
        text-align: center;
    }
    /*支付方式开始*/
    .cart {
        background: #fff;
    }

    .cart-item, .paylist {
        display: flex;
        padding: 0.12rem .17rem .14rem 0;
        font-size: 0.16rem;
        color: #333;
        justify-content: space-between;
        margin-left: .16rem;
        border-bottom: 0.01rem solid #eee;
    }

    .cartitem {
        color: #999;
        font-size: 0.14rem;
    }

    .paylist span {
        color: #bbb;
        font-size: 0.14rem;
    }

    /*列表开始*/
    .cart-group {
        background: #fff;
    }

    .shopinfo {
        color: #333;
        font-size: 0.2rem;
        font-weight: 400;
        padding: .13rem .1rem;
        border-bottom: 0.01rem solid #eee;
    }

    .shopinfo img {
        margin-right: 0.02rem;
        width: .25rem;
        height: 0.25rem;
        vertical-align: middle;

    }

    .foodlist {
        border-bottom: 0.01rem solid #eee;
        padding: 0.13rem 0.2rem;
        font-size: 0.16rem;
        color: #666;
    }

    .foodlist li ,.activities li,.total{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 0.05rem 0;
    }

    .ui-ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .foodlist li span:first-child {
        min-width: 70%;
    }

    .foodlist li span:nth-child(2) {
        min-width: 15%;
    }

    .foodlist li span:nth-child(3) {
        font-size: 0.16rem;
        text-align: right;
        font-weight: 700;
    }

    .fee, .activities ,.total{
        color: #666;
        font-size: 0.16rem;
        border-bottom: 0.01rem solid #eee;
        padding: 0.12rem 0.2rem;
    }

    .fee li {
        display: flex;
        justify-content: space-between;
    }

    .fee li div:last-child {
        font-size: 0.16rem;
        font-weight: 700;
    }

    .activities-icon {
        width: 0.17rem;
        height: 0.17rem;
        text-align: center;
        line-height: 0.17rem;
        color: #fff;
        border-radius: 0.03rem;
        font-size: 0.12rem;
        background: rgb(240, 115, 115);
    }

    .ac-left span:nth-child(2) {
        color: #000;
        font-size: 0.12rem;
    }
    .ac-right {
        color:#ff4a07;
    }
    .total-left,.total-right{
        font-size: 0.12rem;
        font-weight: 700;
        color: #666;
    }

    .info{
        background: #fff;
    }

    /*尾部开始*/
    .delivery-footer{
        width: 100%;
        height:0.45rem;
        position: fixed;
        bottom:0;
        background: #3c3c3c;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .delivery-footer span{
        color: #fff;
        font-size: 0.20rem;
        line-height: 0.24rem;
        font-weight: 700;
        padding-left: 0.13rem;
    }
    small{
        color: #999;
        font-size: 0.12rem;
    }
    .submitbtn{
        display:block;
        min-width: 0.24rem;
        position: absolute;
        right:0;
        bottom:0;
        background: #00d762;
        color: #fff;
        border: none;
        height: 100%;
        line-height: 0.45rem;
        padding: 0 0.06rem;
        font-size: 0.2rem;
    }

</style>
