<template>
    <div>
        <ul class="shop-tab">
            <li>
                <span v-on:click="setShow(1)" :class="{'active':show===1}">商品</span>
            </li>
            <li>
                <span v-on:click="setShow(2)" :class="{'active':show==2}">评价</span>
            </li>
            <li>
                <span v-on:click="setShow(3)" :class="{'active':show===3}">店铺</span>
            </li>
        </ul>
        <!--列表详情开始-->
        <div class="menuview" v-show="show===1">
            <ul class="menuview-left">
                <li :class="{active:'true'}" v-for="(v,i) in categories">
                    <span>{{v.name}}</span>
                    <span class="catenum" v-if="v.num">{{v.num}}</span>
                </li>
            </ul>
            <section class="menuview-right">
                <div class="scroll">
                    <dl v-for="(v,i) in goods">
                        <dt>
                            <div class="categorytitle">
                                <strong>{{i}}</strong>
                                <span>美味又实惠, 大家快来抢!</span>
                            </div>
                            <div class="circle">
                            </div>
                        </dt>
                        <dd v-for="s in v" :key="v.id">
                            <div class="menu-right">
                                <span  class="menu-img">
                     <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                          alt="">
                </span>
                                <section class="foodinfo">
                                    <span class="foodname">{{s.name}}</span>
                                    <p class="food-desc">{{s.desc}}</p>
                                    <P class="sel-num">
                                        <span class="sel">月售3份</span>
                                        <span class="sel">好评率100%</span>
                                    </P>
                                    <p class="zhe">
                                        <span>5折，限1份</span>
                                    </p>
                                    <p class="footerprice">
                                        <strong class="foodprice">
                                            <span class="price">{{s.price}}</span>
                                            <del class="del">¥28</del>
                                        </strong>
                                        <span class="carbutton">
                                           <span class="carbutton1" @click="min(s)" v-if="s.num">
                                                -
                                            </span>
                                            <span class="pricenum" v-if="s.num">
                                                {{s.num}}
                                            </span>
                                            <span class="carbutton2" @click="add(s)">
                                                +
                                            </span>
                                        </span>
                                    </p>
                                </section>
                            </div>
                        </dd>
                    </dl>
                </div>
            </section>
        </div>
        <!--评价开始-->
        <form action="" class="estimate" v-show="show===2">
            <section class="estimate1">
                <div class="zonghe">
                    <strong>4.4</strong>
                    <div>综合评价</div>
                    <p>高于周边商家55.0%</p>
                </div>
                <div class="lists">
                    <div>
                        <span>服务态度</span>
                        <span>
                            <div></div>
                            <span>4.6</span>
                        </span>
                    </div>
                    <div>
                        <span>菜品评价</span>
                        <span>
                            <div></div>
                            <span>4.2</span>
                        </span>
                    </div>
                    <div>
                        <span>送达时间</span>
                        <span>40分钟</span>
                    </div>
                </div>
            </section>
            <section class="estimate2">
                <div>
                    <ul>
                        <li class="active">全部(214)</li>
                        <li>满意(209)</li>
                        <li>不满意(5)</li>
                        <li>有图(7)</li>
                    </ul>
                </div>
                <ul>
                    <li>
                        <div>
                            <small>2017-08-13</small>
                            <img src="" alt="">
                            <div>
                                <h3>匿名用户</h3>
                                <div class="star"></div>
                                <div class="reply">
                                    商家回复：感谢您的肯定，期待您的下次光临
                                </div>
                                <ul>
                                    <li>
                                        <img src="https://fuss10.elemecdn.com/f/f7/700e1b6efa3cce5b689385da26842jpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/"
                                             alt="">
                                    </li>
                                </ul>
                                <div class="foods">
                                    <ul>
                                        <li>千叶杏鲍菇套餐二</li>
                                        <li>招牌XO酱肉炒饭</li>
                                        <li>滨河特色冒菜</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </form>
        <!--店铺开始-->
        <form action="" class="store" v-show="show===3">
            <section class="store1">
                <h3>活动与属性</h3>
                <div>
                    <div>
                        <i style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);">减</i>
                        <span>满27减6，满50减25，满78减30</span>
                    </div>
                    <div>
                        <i style="background-color: rgb(112, 188, 70); color: rgb(255, 255, 255); border-color: rgb(112, 188, 70);">首</i>
                        <span>新用户下单立减19.0元(不与其它活动同享)</span>
                    </div>
                    <div>
                        <i style="background-color: rgb(153, 153, 153); color: rgb(255, 255, 255); border-color: rgb(153, 153, 153);">保</i>
                        <span>已加入“外卖保”计划，食品安全有保障</span>
                    </div>
                    <div>
                        <i style="background-color: rgb(153, 153, 153); color: rgb(255, 255, 255); border-color: rgb(153, 153, 153);">票</i>
                        <span>该商家支持开发票，请在下单时填写好发票抬头</span>
                    </div>
                </div>
            </section>
            <section class="store2">
                <h3>商家信息</h3>
                <ul>
                    <li>滨河味道（滨河一号店）</li>
                    <li>地址：太原市小店区平阳路186号飞云国际大厦</li>
                    <li>营业时间：10:00-14:25,17:00-21:25</li>
                </ul>
            </section>
        </form>
    </div>
</template>
<script>
    export default{
        props: ['goods', 'categories'],
        data(){
            return {
                show: 1,
            }
        },
        methods: {
            setShow: function (display) {
                return this.show = display;
            },
            add: function (t) {
                t.num += 1;

            },
            min: function (t) {
                t.num -= 1;
            }
        },
    }
</script>
<style scoped>
    ul.shop-tab {
        width: 100%;
        position: relative;
        display: flex;
        background-color: #fff;
        border-bottom: 0.01rem solid #ddd;
        box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0, 0, 0, .06);
    }

    ul.shop-tab li {
        width: 33%;
        text-align: center;
        line-height: 1.06777rem;
        font-size:.373333rem;
        color: #666;
    }

    ul.shop-tab li span {
        display: block;

    }
    .active {
        font-weight: 700;
        color: #3190e8;
        border-bottom: 2px solid #3190e8;
    }

    div.menuview {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        background-color: #f8f8f8;
    }

    ul.menuview-left {
        width:25%;
        height: 100%;

    }

    ul.menuview-left li {
        position: relative;
        padding: .466667rem .2rem;
        border-bottom: 1px solid #ededed;
        font-size: .346667rem;
        color: #666;
        border-bottom: 1px solid #ededed;
    }

    .catenum {
        position: absolute;
        right: 0.04rem;
        top: 0.04rem;
        color: #fff;
        background: #ff461d;
        border-radius: 50%;
        font-size: .32rem;
        text-align: center;
        display: block;
        width: 0.4rem;
        height: 0.4rem;
    }
    .price{
        font-size: 0.2rem;
    }
    ul.menuview-left li img {
        width: 0.12rem;
        height: 0.16rem;
    }

    ul.menuview-left li.active {
        border-left: 2px solid #3190e8;
        background: #fff;
    }

    .menuview-right {
        width: 75%;

        height: 100%;
    }

    .scroll {
        height: 100%;
        position: relative;
        overflow-y: auto;
    }

    dl > dt {
        position: relative;
        padding: .2rem .8rem .2rem .266667rem;
        background-color: #f1f1f1;
    }

    dt > .categorytitle {
        display: flex;
        display: -webkit-flex;
        align-items: flex-end;
        overflow: hidden;
    }

    dt > .circle {
        width: 0.45rem;
        height: 0.4rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        /*background: url('../../assets/img/123.png') no-repeat center center;*/
    }

    dl > dt {
        padding: 0.1rem .4rem .1rem .13rem;
        background-color: #f1f1f1;
    }

    dt > .categorytitle {
        display: flex;
        display: -webkit-flex;
        align-items: flex-end;
        overflow: hidden;
    }

    dt > .circle {
        width: .933333rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        background-size: .32rem auto;
        background: url('../../assets/img/123.png') no-repeat center center;
    }

    .categorytitle strong {
        font-size: .373333rem;
        color: #666;
        margin-right: 1.3%;
    }

    .categorytitle span {
        color: #999;
        font-size: .266667rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .menu-right {
        background-color: #fff;
        padding: .4rem .266667rem;
        margin-bottom: 0.01rem;
        position: relative;
        border-bottom: 0.01rem solid #ddd;
        display: flex;
        justify-content: space-between;
        display: -webkit-flex;
        background: #fff;
    }
    .foodinfo{
        width: 70%;
        padding-left:2%;
    }
    .menu-right span.foodname {
        display: flex;
        font-size: .4rem;
        display: -webkit-flex;
    }
    .menu-right .menu-img{
        width: 30%;
    }
    .menu-right span img {
        width: 100%;
        height:100%;
    }

    /*section.foodinfo {*/
        /*font-size: .253333rem;*/
        /*position: relative;*/
    /*}*/

    .food-desc, .sel {
        color: #999;
        font-size: .293333rem;
    }

    .sel-num {
        font-size: .293333rem;
        display: flex;
        display: -webkit-flex;
    }

    .sel {
        color: #666;
        color: #666;
    }

    .zhe
    {
        font-size: .293333rem;
        color: #f07373;
    }

    .footerprice {
        display: flex;
        margin-top:0.4rem;
        font-size:.426667rem;
        justify-content: space-between;
    }

    .foodprice {
        display: flex;
        display: -webkit-flex;
    }

    .foodprice span {
        color: #f60;
        font-size: .426667rem;
        display: inline-block;
    }

    .foodprice:before {
        content: "\A5";
        color: #f60 ;
        font-size: 0.32rem;
        display: inline-block;
    }

    .del {
        margin:1%  0  0 7%;
        color: #999;
        line-height: 0.6rem;
        font-size: 0.32rem;
    }

    .carbutton {
        display: flex;
    }

    .carbutton1, .carbutton2 {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        text-align: center;
        font-size: 0.6rem;
        line-height: 0.4rem;
        font-family: '宋体';
    }

    .carbutton1 {
        border: 0.01rem solid #ff9a9e;
        color: #ff9a9e;
    }

    .carbutton2 {
        background:#ff9a9e;
        color: #fff;
    }

    .pricenum {
        font-size: 0.4rem;
        line-height: 0.4rem;
        padding: 0 0.2rem;
    }

    /*评价开始*/
    .estimate {
        width: 100%;
        background-color: #eee;
        border-top: 1px solid #ddd;
    }

    .estimate1 {
        width: 100%;
        background-color: #fff;
        margin-bottom: .2rem;
        padding: .3rem;
        font-size: .32rem;
        display: flex;
        align-items: center;
        color: #666;
        box-sizing: border-box;
    }

    .estimate1 > .zonghe {
        width: 30%;
        padding-right: .15rem;
        border-right: 1px solid #ddd;
        text-align: center;
        box-sizing: border-box;
    }

    .estimate1 > .zonghe > strong {
        font-size: .44rem;
        font-weight: 600;
        color: #f60;
        display: block;
    }

    .estimate1 > .zonghe > div {
        font-size: 0.44rem;
    }

    .estimate1 > .zonghe > p {
        font-size: 0.16rem;
    }

    .estimate1 > .lists {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .estimate1 > .lists > div {
        width: 80%;
        margin: 0.05rem 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        font-size: 0.4rem;
        font-weight: 400;
    }

    .estimate2 {
        width: 100%;
        background-color: #fff;
        padding: .266667rem .32rem 0;
        font-size: .36rem;
        box-sizing: border-box;
    }

    .estimate2 > div {
        padding-bottom: 0.1rem;
        border-bottom: 1px solid #ddd;
    }

    .estimate2 > div > ul > li {
        color: #6d7885;
        background-color: #ebf5ff;
        display: inline-block;
        padding: .2rem;
        margin: .025rem .05rem;
        border-radius: .1rem;
    }

    .estimate2 > div > ul > li.active {
        color: #fff;
        background-color: #ff9a9e;
    }

    .estimate2 > ul {
        width: 100%;
    }

    .estimate2 > ul > li {
        width: 100%;
        padding: 0.15rem 0;
        border-bottom: .013333rem solid #ddd;
        box-sizing: border-box;
    }

    .estimate2 > ul > li > div {
        position: relative;
        padding-left: 1.2rem;
        box-sizing: border-box;
    }

    .estimate2 > ul > li > div > small {
        position: absolute;
        top: .05rem;
        right: 0;
        font-size: .32rem;
        color: #999;
    }

    .estimate2 > ul > li > div > img {
        position: absolute;
        top: 0;
        left: 0;
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
    }

    .estimate2 > ul > li > div > div > h3 {
        font-size:.346667rem;
        margin-bottom: 0.05rem;
        color: #666;
        font-weight: 400;
    }

    .estimate2 > ul > li > div > div > .star {
        position: relative;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
        height: 0.1rem;
        width: 100%;
    }

    .estimate2 > ul > li > div > div > ul > li {
        display: inline-block;
        margin: .05rem;
        box-sizing: border-box;
    }

    .estimate2 > ul > li > div > div > ul > li > img {
        width: 0.71rem;
        height: 0.71rem;
    }

    .estimate2 > ul > li > div > div > .foods > ul > li {
        display: inline-block;
        font-size: .32rem;
        color: #999;
        border: 1px solid #ddd;
        padding: .106667rem .266667rem;
        margin: .035rem;
        border-radius: .08rem;
        max-width: 1.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
    }

    /*店铺开始*/
    .store {
        width: 100%;
        background-color: #eee;
        font-size: 0.16rem;
    }

    .store1 {
        margin-bottom: .266667rem;
        padding: .426667rem .4rem .4rem;
        background-color: #fff;
        color: #666;
        box-sizing: border-box;
        /*font-size: 0.14rem;*/
    }

    .store1 > h3 {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        color: #333;
        font-weight: 700;
        font-size: .4rem;
       margin-bottom: .426667rem;
    }

    .store1 > div > div {
        margin: .186667rem 0;
        display: flex;
    }

    .store1 > div > div > i {
        height: .426667rem;
        width: .426667rem;
        font-size: .346667rem;
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        border: 1px solid;
        border-radius: .02rem;
        line-height: 0.9;
    }

    .store1 > div > div > span {
        padding-left: 0.1rem;
        font-size: 0.1rem;
        font-weight: 500;
    }

    .store2 {
        width: 100%;
        margin-bottom: .266667rem;
        padding: .426667rem .4rem .4rem;
        background-color: #fff;
        color: #666;
        box-sizing: border-box;
    }

    .store2 > h3 {
        border-bottom: 1px solid #eee;
        color: #333;
        font-weight: 700;
        font-size: .4rem;
    }

    .store2 > ul > li {
        display: flex;
        padding: 0.15rem 0;
        margin-right: -0.15rem;
        justify-content: space-between;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
    }
</style>