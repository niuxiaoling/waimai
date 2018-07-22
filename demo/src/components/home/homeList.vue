<template>
    <div>
         <h3>推荐商家</h3>
        <div class="home-list">
        <!--推荐商家开始-->

        <div v-for="(v,i) in shops" :key="v.id">
            <router-link :to="{name:'shop',query:{sid:v.id}}">
                <div class="container-tuijian">
                    <div class="logo-img">
                        <img :src="v.src" alt="" class="logo">
                    </div>
                    <div class="detail">
                        <p class="name"><b>{{v.name}}</b></p>
                        <p class="sale">
                            <span class="star icon-star"></span>
                            <span class="star icon-star"></span>
                            <span class="star icon-star"></span>
                            <span class="star icon-star"></span>
                            <span class="star iscon-star"></span>
                            <span class="fen"><b> &nbsp{{v.price}}</b></span>
                            <span class="shumu">月售100单</span>
                        </p>
                        <p class="money">
                            <span class="send">￥{{v.qisong}}元起送</span>
                            <span class="send">配送费￥{{v.fei}}</span>
                            <span class="time">469M/{{v.time}}分钟</span>
                        </p>
                        <p class="fan">
                            <span class="remove">减</span>
                            <span class="activity">{{v.info}}</span>
                        </p>
                        <p class="fan">
                            <span class="news">新</span>
                            <span class="activity">{{v.message}}</span>
                        </p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    </div>
    <!--推荐结束-->
</template>

<script>
    export default{
        props: ['shops'],
    }
</script>
<style scoped>
    h3 {
        margin-top: 2.6%;
        font-weight: 600;
        padding:4.2% 2.6% 0;
        border-bottom: 1px solid #eee;
        font-size: .42rem;
        background: #fff;
        color: #333;
    }
    /*推荐开始*/
    .home-list {
        overflow-y: auto;
    }

    .container-tuijian {
        width: 100%;
        display: flex;
        background: #fff;
        display: -webkit-flex;
        color: #555;
    }

    .logo-img {
        padding:.4rem .266667rem;
    }

    .logo {
        width: 1.733333rem;
        height:1.733333rem;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
    }
    .logo img{
        width: 100%;
        height:100%;
    }
    .detail {
        width: 70%;
        padding:.4rem .266667rem .4rem 0;
    }

    .name {
        font-size: 0.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sale {
        font-size: 0.29rem;
        margin:0 1.06%;
    }

    .star {
        font-size: 10px;
        color: #FFAA0C;

    }
    .line{
        width: 0;
        height:0;
        border:0.01rem solid #ddd;
        padding:0.1rem 0;
    }
    .fan {
        color: #FF6000;
        font-size: .346667rem;
    }
    .send, .time {
        color: #6C6C6C;
        font-size: 0.29rem;
    }
    .money {
        font-size: 0.29px;
        margin-top: .24rem;
    }
    .time {
        color: #6C6C6C;
        font-size: .29333rem;
        margin-left: 45px;
    }

    .remove, .news {
        color:#fff;
        font-size: .346667rem;
        background-color: rgb(240, 115, 115);
        border-radius: 0.1rem;
    }
     .news{
         background-color: rgb(0, 183, 98);
         color: #fff;
     }
    .activity {
        color: #6C6C6C;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .346667rem;
    }

</style>