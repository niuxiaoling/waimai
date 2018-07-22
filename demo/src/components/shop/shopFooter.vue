<template>
    <div>
        <section class="shade" v-if="show" @click="shade"></section>
        <section class="cart-view-btn" :style="{'zIndex':'10','transform':`translate3d(0,${show?0:'100%'},0)`}">
            <div class="gouwuche">
                <span>购物车</span>
                <a href="javascript:;" @click="del">
                    <span>清空</span>
                </a>
            </div>
            <ul>
                <li class="everylist" v-for="v in choicedgoods">
                    <span class='everylist-name'>
                        <em>
                           {{v.name}}
                        </em>
                        <p>
                            {{v.name}}
                        </p>
                    </span>
                    <span class="everymoney">{{v.price}}</span>
                    <span class="carbutton1">
                        <a href="javascript:;" @click="min(v)">－</a>
                        <span class="cartnum">{{v.num}}</span>
                        <a href="javascript:;" @click="add(v)">+</a>
                    </span>
                </li>
            </ul>
        </section>
        <section class="shop-footer">
            <span :class="{'bottom-car':true,active:choicedgoods.length>0,iconfont:true, 'icon-gouwuchekong':true}" @click="setShow()"></span>
            <div class="shop-footer1">
                <p class="bottom-one">
                    <span>¥{{total}}</span>
                </p>
                <p class="bottom-two">
                    <span>配送费¥{{shopinfo.fei}}</span>
                </p>
            </div>
            <div class="shop-footer2" v-if="shopinfo.qisong-total>0">
                <span  v-if="choicedgoods.length===0" class="qisong">¥{{shopinfo.qisong}}起送</span>
                <span  v-else class="qisong">还差{{shopinfo.qisong-total}}起送</span>
            </div>
            <a href="javascrpt:;" class="submit-btn" v-else @click="go">
                <span >去结算</span>
            </a>
        </section>
    </div>
</template>
<script>
    export default{
        name:'shop-footer',
        props:['shopinfo','choicedgoods'],
        data:function () {
          return{
              show:false,
          }
        },
        //监听变化
        watch:{
            'choicedgoods':function () {
                if(this.choicedgoods.length==0){
                    this.show=false;
                }
            }
        },
        computed:{
            total:function () {
               let n=0;
               this.choicedgoods.forEach(v=>{
                  n+=v.num* v.price;
               });
               return n;
            }
        },
        methods:{
            go:function () {
              if(localStorage.user){
                  localStorage.choicedgoods=JSON.stringify(this.choicedgoods);
                  localStorage.shopinfo=JSON.stringify(this.shopinfo);
                  location.href='#/shop/checkout?sid='+this.$route.query.sid;
              }else{
                  location.href='#/login?sid='+this.$route.query.sid;
              }

            },
            shade:function () {
              this.show=false;
            },
            setShow:function () {
                if(this.choicedgoods.length){
                    this.show=!this.show;
                }
            },
            del:function () {
                this.choicedgoods.forEach(v=>{
                    v.num=0;
                });
            },
            add:function (t) {
                t.num+=1;
            },
            min:function (t) {
                t.num-=1;
            }
        },
    }
</script>
<style scoped>
    .shop-footer {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        z-index: 12;
        height: 1.28rem;
        align-items: center;
        background-color: rgba(61, 61, 63, 1);
        padding-left: 2.10667rem;
    }

    .shop-footer1 {
        width: 100%;
        height: 100%;
    }

    .bottom-car {
        position: absolute;
        left: .32rem;
        bottom: 0.2rem;
        width: 1.3333rem;
        height: 1.33333rem;
        background: #363636;
        border: 0.13333rem solid #444;
        border-radius: 50%;
        color:#5F5F63;
        font-size:0.7rem;
        text-align: center;
        line-height: 1.333333rem;
        box-shadow: 0 -0.08rem 0.05rem 0 rgba(0, 0, 0.1);
    }
    .bottom-car.active{
        color:#fff;
        background: #3190E8;
        font-weight: 400;
    }
    .bottom-one {
        margin-top: 0;
        font-size: 0.48rem;
        color: #fff;
        font-weight: 700;
    }

    .bottom-two {
        font-size: 0.4rem;
        color: #fff;
    }
    .shop-footer2{
        width: 2.8rem;
        height: 100%;
        color: #fff;
        position: relative;
        background: #535356;
        text-align: center;
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.28rem;
    }
    .submit-btn {
        width: 2.8rem;
        height: 100%;
        color: #fff;
        background: #28C76F;
        text-align: center;
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.28rem;

    }

    /*上拉框开始*/
    .shade{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000;
        opacity: .4;
        transition: opacity .3s ease;
    }
    .cart-view-btn {
        width: 100%;
        background: #fff;
        position: fixed;
        /*bottom:0;*/
        bottom: 0.55rem;
        left: 0;
    }

    .gouwuche {
        padding: 0 .15rem;
        color: #666;
        border-bottom: 0.01rem solid #ddd;
        background: #eceff1;
        display: flex;
        justify-content: space-between;
    }

    .gouwuche > span {
        height: 70%;
        text-align: center;
        border-left: 0.03rem solid #3190e8;
        padding-left: .133333rem;
        font-size:.426667rem;
    }

    .gouwuche a {
        color: #666;
        padding: 0 0.1rem;
        font-size: .426667rem;
    }
    .cart-view-btn ul li.everylist {
        padding: 0.1rem .15rem .1rem 0;
        min-height: 0.5rem;
        margin-left: 0.15rem;
        display: flex;
        border-bottom: 0.01rem solid #eee;
        justify-content: space-between;
    }
    .everylist> span.everylist-name{
       display: flex;
        flex-direction: column;
    }
    .everylist> .everylist-name em{
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 2.3rem;
        color: #333;
        font-style: normal;
        font-size: 0.14rem;
    }
    .everylist> .everylist-name p{
        color: #999;
        line-height: 0.15rem;
        font-size: 0.12rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 2.3rem;
    }
    .everylist .everymoney:nth-child(2){
        color: #f60;
        text-align: right;
        white-space: nowrap;
        font-weight: 700;
        font-size: 0.4rem;
    }
    .everylist .everymoney:before{
        content: "\A5";
        font-size: 0.4rem;
    }
    .everylist >.carbutton1{
        width: 30%;
        display: flex;
        justify-content: space-between;
    }
    .carbutton1 >a{
        display: block;
        width: 0.25rem;
        height: 0.25rem;
        font-size: 0.25rem;
        line-height: 0.4rem;
        color:#3190E8;
        text-align: center;
        border-radius: 50%;
        border: 0.01rem solid #3190E8;
    }
    .carbutton1 >a:last-child{
        background: #3190E8;
        color: #fff;
    }
    .cartnum{
        color: #000;
        font-size: 0.4rem;
        font-weight: 700;
    }
</style>