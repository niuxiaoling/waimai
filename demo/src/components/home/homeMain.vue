<template>
    <div>
        <section class="find">
            <a href="">
                <div class="header_1"> < </div>
                <div class="header-title">美食</div>
            </a>
        </section>
        <div>
            <aside class="filter">
                <div class="filter-header">
                    <a href="javascript:;" class="filter-nav" v-for="v in filterHead" v-on:click="setState(v.id)"
                       :class="{'active':state==v.id}">
                        <span>{{v.name}}</span>
                        <span class="san1"></span>
                    </a>
                </div>
            </aside>
            <section class="filter-extend"   v-show="state===1" v-on:click="setState(1)">
                <div class="filter-scroller">
                        <ul>
                            <li v-for="v in filter">
                                <span>{{v.name}}</span>
                                <span class="count">
               {{v.count}}
            </span>
                            </li>
                        </ul>
                        <ul>
                            <li v-for="v in name">
                                <img src="//fuss10.elemecdn.com/8/64/4e1323e3a11137d7478d2c83095d4png.png?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/"
                                     alt="">
                                <span>{{v.name}}</span>
                                <span class="count">{{v.count}}</span>
                            </li>
                        </ul>

                </div>
            </section>
            <section class="filter-oreder" v-show="state===2">
                <ul>
                    <li v-for="v in order">
                        <span>{{v.name}}</span>
                    </li>
                </ul>
            </section>
            <section class="filter-more" v-show="state===3">
                <div class="filter-scroller1 ">
                    <dl>
                        <dt>
                            商家属性 (可多选)
                        </dt>
                        <dd v-for="v in business">
                            <i>{{v.label}}</i>
                            <span>{{v.name}}</span>
                        </dd>
                    </dl>
                </div>
                <div class="filter-btn">
                    <a href="">清空</a>
                    <a href="">确定</a>
                </div>
            </section>
        </div>

        <ul class="shoplist">
            <a href="#/shop">
                <section class="index-container" v-for="v in shoplist">
                    <div class="logo-container">
                        <div class="logo-img">
                            <img src="//fuss10.elemecdn.com/c/4d/644d8e422ec2cfca8bca0e58d173bpng.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/"
                                 alt="">
                        </div>
                    </div>
                    <div class="index-main">
                        <section class="index-line">
                            <h3 class="index-shopname text-el">
                                <span class="text-el">{{v.name}}</span>
                            </h3>
                            <div class="index-support">
                                <div class="support-1">
                                    <i>保</i>
                                </div>
                                <div class="support-1">
                                    <i>票</i>
                                </div>
                            </div>
                        </section>
                        <section class="index-sale">
                            <div class="index_wrap">
                                <div class="star"></div>
                                <span class="rate">4.6</span>
                                <span>月售891单</span>
                            </div>
                            <div class="index_icon">
                                <span>{{v.send}}</span>
                            </div>
                        </section>
                        <section class="index-line">
                            <div class="index-money">
                                <span>¥{{v.type}}起送 /</span>
                                <span>配送费¥{{v.pei}}</span>
                            </div>
                            <div class="index-time">
                                <span>308m</span>
                                <span>26分钟</span>
                            </div>
                        </section>
                        <section class="index_activity">
                            <div class="index-activityList">
                                <div class="activity-container">
                                    <i>减</i>
                                    <span>{{v.activity}}</span>
                                </div>
                                <div class="activity-container">
                                    <i>特</i>
                                    <span>{{v.desc}}</span>
                                </div>
                                <div class="activity-btn">3个活动</div>
                            </div>
                        </section>
                    </div>
                </section>
            </a>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'homeMain',
        data(){
            return {
                state: '',
                shoplist: [
                    {
                        id: 1,
                        name: '大师锅魁(漪兴路店)',
                        activity: '满27减6，满50减25，满78减30',
                        type: '20',
                        pei: '3',
                        pid: '1',
                        news: '商家优惠',
                        desc: '品牌',
                        send: '蜂鸟专送',
                        img: ''
                    },
                    {
                        id: 2,
                        name: '刘公粥铺',
                        activity: '满65减10',
                        type: '1',
                        pei: '9',
                        pid: '1',
                        news: '新用户下单立减17元',
                        desc: '品牌',
                        send: '蜂鸟专送',
                        img: ''
                    },
                    {
                        id: 3,
                        name: '上海麦当劳仙乐斯餐厅',
                        activity: '满65减10',
                        type: '2',
                        pei: '9',
                        pid: '1',
                        news: '新用户下单立减17元',
                        desc: '品牌',
                        send: '蜂鸟专送',
                        img: ''
                    },
                    {
                        id: 4,
                        name: '上海麦当劳仙乐斯餐厅',
                        activity: '满65减10',
                        type: '5',
                        pei: '9',
                        pid: '1',
                        news: '新用户下单立减17元',
                        desc: '品牌',
                        send: '蜂鸟专送',
                        img: ''
                    },
                ],
                filterHead: [
                    {id: 1, name: '分类'},
                    {id: 2, name: '排序'},
                    {id: 3, name: '筛选'},

                ],
                filter: [
                    {id: 1, name: '全部商家', count: '907'},
                    {id: 2, name: '美食', count: '907'},
                    {id: 3, name: '快餐便当', count: '907'},
                    {id: 4, name: '全部商家', count: '907'},
                    {id: 5, name: '美食', count: '907'},
                    {id: 6, name: '快餐便当', count: '907'},
                    {id: 7, name: '全部商家', count: '907'},
                    {id: 8, name: '美食', count: '907'},
                    {id: 9, name: '快餐便当', count: '907'},
                ],
                name: [
                    {id: 1, name: '全部', count: '1075', pisid: 1},
                    {id: 2, name: '全部', count: '1075', pisid: 1},
                    {id: 3, name: '全部', count: '1075', pisid: 1},
                ],
                order: [
                    {id: 1, name: '智能排序'},
                    {id: 2, name: '距离最近'},
                    {id: 1, name: '销量最高'},
                ],
                business: [
                    {id: 1, name: '品牌商家', label: '品'},
                    {id: 2, name: '品牌商家', label: '品'},
                    {id: 3, name: '品牌商家', label: '品'},
                    {id: 4, name: '品牌商家', label: '品'},
                    {id: 5, name: '品牌商家', label: '品'},
                ]
            }
        },
        methods: {
            setState: function (state) {
                this.state=!state;
                return this.state = state;
            }
        }
    }
</script>
<style>
    /*头部开始*/
    .find {
        width: 100%;
        height: 0.44rem;
        background-image: linear-gradient(90deg, #FAD0C4, #ff9a9e);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
    }

    .header_1 {
        height: 0.36rem;
        padding: 0.1rem 0.13rem;
        font-size: 0.2rem;
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
        font-size: 0.2rem;
    }

    /*头部结束*/
    /*筛选开始*/
    .find + div {
        position: fixed;
        width: 100%;
        left: 0;
        z-index: 100;
        top: 0.44rem;
        height: auto;
    }

    .filter {
        position: relative;
        border-bottom: 1px solid #ddd;
        height: 0.4rem;
        background: #fff;
        left: 0;
        top: 0;
        width: 100%;
        line-height: 0.4rem;
        z-index: 100;
    }

    .filter-header {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
    }

    .filter-nav {
        width: 33.333%;
        display: block;
        text-align: center;
        font-size: 0.14rem;
        position: relative;
        color: #666;
    }

    .filter-nav.active {
        color: #ff9a9e;
    }

    .san1 {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #999;
    }

    .filter-extend {
        position: absolute;
        left: 0;
        right: 0;
        height: auto;
        background: #fff;
        z-index: 100;
        border-top: 0.01rem solid #ddd;
    }

    .filter-scroller {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        background: #fafafa;
        height:4rem;
        overflow-y: auto;
    }
    .filter-scroller1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fafafa;

    }
    .filter-scroller ul:first-child {
        height: 100%;
        overflow-y: auto;
        min-width: 35%;
        position: relative;
        z-index: 100;
        background: #fafafa;
    }

    .filter-scroller ul {
        background: #fff;
    }

    .filter-scroller ul:first-child li {
        padding: 0 .06rem 0 .13rem;
        line-height: 0.5rem;
        position: relative;
        font-size: 0.14rem;
        color: #333;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .count {
        color: #666;
        font-weight: 700;
    }

    .filter-scroller ul:last-child {
        width: 65%;
        background: #fff;
        height: 100%;
        overflow-y: auto;
    }

    .filter-scroller ul:last-child li {
        position: relative;
        padding: 0 .06rem 0 .13rem;
        line-height: 0.5rem;
        font-size: 0.14rem;
        color: #333;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .filter-scroller ul:last-child li img {
        width: 0.25rem;
        height: 0.25rem;
        vertical-align: middle;
    }

    .filter-scroller ul:last-child li span.count {
        position: absolute;
        right: 0.1rem;
    }

    .filter-oreder ul li {
        position: relative;
        padding-left: 0.3rem;
        line-height: 0.5rem;
        color: #333;
        font-size: 0.14rem;
        background: #fff;
        border-bottom: 0.01rem solid #ddd;
    }

    .filter-scroller1 {
        background: #fff;
    }

    .filter-scroller1 dl {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.1rem;
        font-size: 0.14rem;
        margin: .13rem 0;
        background: #fff;
    }

    .filter-scroller1 dl dt {
        color: #666;
        width: 100%;
        margin-bottom: .1rem;
    }

    .filter-scroller1 dl dd {
        display: flex;
        justify-content: flex-start;
        margin-right: 1%;
        border: 0.01rem solid #ddd;
        margin-bottom: .1rem;
        border-radius: 0.06rem;
        padding: .09rem 0;
        width: 32%;

    }

    .filter-scroller1 dl dd i {
        display: inline-block;
        vertical-align: middle;
        font-style: normal;
        border: 0.01rem solid rgb(63, 189, 230);
        margin: 0 .06rem 0 .1rem;
        width: .25rem;
        height: 0.25rem;
        color: rgb(63, 189, 230);
        line-height: .25rem;
        text-align: center;
        border-radius: .04rem;
        font-size: .14rem;
    }

    .filter-scroller1 dl dd span {
        line-height: 0.25rem;
    }

    .filter-btn {
        border-top: 0.01rem solid #eee;
        padding: 0.06rem;
        height: 0.7rem;
        display: flex;
        background: #fafafa;
        justify-content: center;
        align-items: center;
    }

    .filter-btn a {
        font-size: 0.20rem;
        border-radius: 0.04rem;
        text-align: center;
        width: 45%;
        padding: 0.1rem 0.2rem;
        line-height: 0.24rem;
        margin-right: 0.1rem;

    }

    .filter-btn a:first-child {

        background: #fff;
        display: inline-block;
        border: 0.01rem solid #fff;
        color: #333;
    }

    .filter-btn a:last-child {
        background: #56d176;
        color: #fff;
    }

    /*筛选结束*/

    /*列表开始*/
    .shoplist {
        margin-top: 0.8rem;
        background: #fff;
    }

    .index-container {
        display: flex;
        position: relative;
        border-bottom: 1px solid #eee;
        color: #666;
        font-size: 0.14rem;
    }

    .logo-container {
        position: relative;
        padding: .2rem .13rem;
    }

    .logo-img {
        position: relative;
        width: 0.6rem;
        height: 0.6rem;
    }

    .logo-img img {
        width: 100%;
        height: 100%;
    }

    .index-main {
        width: 80%;
        padding: .1rem .2rem .1rem 0;
        flex-direction: column;
    }

    .text-el {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .index-shopname {
        max-width: 2.5rem;
        color: #333;
        font-size: 0.14rem;
    }

    .index-shopname:before {
        margin-right: .06rem;
        padding: 0 .03rem;
        height: .2rem;
        border-radius: .053333rem;
        background-color: #ffd930;
        color: #52250a;
        content: "\54C1\724C";
        vertical-align: top;
        text-align: center;
        white-space: nowrap;
        font-weight: 700;
        font-size: .14rem;
        line-height: .2rem
    }

    .index-line {
        width: 100%;
        padding-top: 0.1rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .index-support {
        justify-content: flex-end;
        display: flex;
        font-size: 0.12rem;
    }

    .index-support i {
        margin-left: 0.03rem;
        background: rgb(221, 221, 221);
        color: rgb(153, 153, 153);
    }

    .index-sale {
        display: flex;
        margin-top: 0.1rem;
        justify-content: space-between;
    }

    .index_wrap {
        font-size: 0.12rem;
    }

    .rate {
        color: #ff6000;
    }

    .index_icon {
        background: #2395ff;
        color: #fff;
        font-size: 0.12rem;
        border-radius: 0.053333rem;
        border: 1px solid #44a5ff;
        padding: 0 0.025rem;
    }

    .index_activity {
        display: flex;
        position: relative;
        margin-top: 0.1rem;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        border-top: 1px solid #eee;
        color: #939393;
    }

    .activity-container {
        margin-top: 0.03rem;
        display: flex;
        font-size: 0.12rem;
        padding-right: 0.5rem;
    }

    .activity-container i {
        background-color: rgb(240, 115, 115);
        color: rgb(255, 255, 255);
        margin-right: .06rem;
        font-size: .12rem;
        font-style: normal;
        line-height: 1;
        height: .15rem;
        display: inline-block;
        text-align: center;
        border: 1px solid rgb(240, 115, 115);
        border-radius: .02rem;
    }

    .activity-btn {
        position: absolute;
        right: 0;
        padding: 0.13rem 0 .1rem;
        height: 100%;
        color: #999;
        top: 0;
        font-size: 0.14rem;
    }

    /*列表结束*/
</style>