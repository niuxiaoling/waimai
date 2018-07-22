<template>
        <div class="shop_header">
            <div class="header_box">
                <div class="header_1" @click="pre"><</div>
                <div class="shop-header-main">
                    <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                    <div class="header-content">
                        <h3>{{data.name}}</h3>
                        <p>
                            <span>商家配送</span>/
                            <span>  配送费{{data.fei}}</span>
                        </p>
                        <div class="header-notice">
                            <span>公告：</span>
                            <span>{{data.message}}</span>
                        </div>
                    </div>

                </div>
                <div class="shop-header-activties">
                        <i>减</i>
                        <span>{{data.info}}</span>
                        <div class="shop-active-nub">9个活动</div>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        name:'shop-header',
        props:["data"],
        methods: {
            pre:function () {
                localStorage.choicedgoods='';
                localStorage.shopinfo='';
                location.href='#/home/homeMain';
            }
        }

    }
</script>
<style scoped>
    .shop_header{
        width:100%;

        background: linear-gradient(90deg,#FAD0C4, #ff9a9e);
        position: relative;
    }
    .header_box{
        position: relative;
        background-size: cover;

    }
    .header_1{
        width: 100%;
        height: 1.173333rem;
        padding:.106667rem .266667rem;
        font-size: .6rem;
        font-family: '宋体';
        font-weight: 800;
        color: #fff;
        display: flex;
        text-align: left;
    }
    .shop-header-main{
        padding: 2.6% 4%  8%;
        display: flex;
        position: relative;
        display: -webkit-flex;

    }
    .shop-header-main img{
        width: 1.3333rem;
        height:1.3333rem;
        border:1px solid #fff;
        margin:0 2.6% 0 0 ;
    }
    .header-content{
        /*width: 2.7rem;*/
        color: #fff;
        text-align: left;
    }
    .header-content h3{
        font-size: .466667rem;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .header-content p{
        font-size:0.32rem;
    }
    .header-content p>span{
        font-weight: 400;
    }
    .header-notice{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.32rem;
        color: #fff;
    }
    .header-notice span{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .shop-header-activties{
        display: flex;
        display: -webkit-flex;
        align-items: center;
        padding:1% 1.3%;
        position: absolute;
        left:.4rem;
        right:.4rem;
        bottom:0rem;
    }
    .shop-header-activties i{
        display: inline-block;
        background: rgb(240, 115, 115);
        border-radius: 3%;
        margin-right: 0.06rem;
        border-radius: 0.02rem;
        font-size: 0.36rem;
        color: #fff;
    }
    .shop-header-activties span{
        margin-left: 1.3%;
        font-size: .346667rem;
        color: #fff;
    }
    .shop-active-nub{
        color: #fff;
        font-size: .346667rem;
        position: absolute;
        right: 0.2rem;
    }

</style>