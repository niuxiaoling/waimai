<template>
    <!--头部开始-->
    <header class="home-header">
        <div class="head_top"   >
            <div class="head-left">
                <span class="iconfont pos"></span>
                <span class="head-pos">杏花岭区太原市教育局(西海子公园西北)</span>
                <div class="san"></div>
            </div>
            <div class="aside-right">
                <div class="aside-weather">
                    <h2>25°</h2>
                    <p >晴夜</p>
                </div>
                <div class="aside-img">
                </div>
            </div>
        </div>
        <a href="#/search">
            <input type="text" class="sousuo" placeholder="搜索商品、商家">
        </a>

        <div class="head_bottom">
            <a href="javascript:;" v-for="v in header">
               {{v.name}}
            </a>
        </div>
    </header>
    <!--头部结束-->
</template>
<script>
    export default{
       props:['header'],
    }
</script>
<style scoped>
    .home-header {
        width: 100%;
        padding: 3.4% 3.7% 0;
        color: #fff;
        background: linear-gradient(45deg,#FFF6B7,#F6416C);
    }

    .head_top {
        width: 100%;
       padding:0.26% 0.37% 0;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
    }

    .head-left {
        width: 60%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
    }

    .head-left .pos {
        font-size: 0.48rem;
        color: #fff;
    }

    .head-left .head-pos {
        margin: 0 13%;
        font-size: 0.48rem;
        max-width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .san {
        width: 0;
        height: 0;
        border-left: 0.16rem solid transparent;
        border-right: 0.16rem solid transparent;
        border-top: 0.16rem solid #fff;
        margin-top: 5%;
    }

    .aside-right {
        display: flex;
        display: -webkit-flex;
    }

    .aside-right .aside-weather {

    }

    .aside-right h2, p {
        font-size: 0.3rem;

    }

    /*.aside-right .aside-img {*/
        /*width: 0.54rem;*/
        /*height: 0.54rem;*/
    /*}*/

    .sousuo {
        display: block;
        margin: 2% 0;
        width: 100%;
        height: 0.75rem;
        text-align: center;
        border-radius: 0.48rem;
        box-shadow: 0 0.026667rem 0.066667rem 0 rgba(255, 255, 255, .2);
        color: #333;
        border: none;
        font-size: 0.36rem;
    }

    .head_bottom {
        /*height: 0.75rem;*/
        width: 100%;
        padding:.6% 3.7%  2%;
        display: flex;
        display: -webkit-flex;
        flex-wrap: nowrap;
        /*justify-content: space-between;*/
    }

    .head_bottom a {
        color: #fff;
        line-height: 0.75rem;
        margin-right: 4%;
        font-size: 0.32rem;
    }
</style>