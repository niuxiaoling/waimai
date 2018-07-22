<template>
    <div>
        <section class="activity" v-for="v in findactivity">
            <div class="activity-header">
                <span class="line"></span>
                <span class="activity-icon">
                    {{v.name}}
                </span>
                <span class="line right"></span>
            </div>
            <p class="activity-sub-title">{{v.sub_title}}</p>
            <div class="activity-body" v-for="(v,i) in activitydetail">
                <a href="" class="discover-food"  v-for="s in v">
                    <img src="https://fuss10.elemecdn.com/0/53/47a80976e90c99f40b745cde5246fjpeg.jpeg?imageMogr/format/webp/" alt="">
                    <div>
                        <p class="food-name ui-ellipsis">{{s.name}}</p>
                        <p class="food-info">
                            <span class="price ui-ellipsis">{{s.price}}积分</span>
                            <span class="original-price ui-ellipsis">¥{{v.original_price}}</span>
                        </p>
                    </div>
                    <span class="discount ui-ellipsis">{{s.discount}}</span>
                </a>


            </div>
            <p class="activity-more">查看更多 ></p>
        </section>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import  Footer  from '../Footer.vue'
    export default{
        props:['findactivity','activitydetail'],
        components:{
            'app-footer':Footer,
        }
    }
</script>
<style>
    .activity{
        background: #fff;
        margin-bottom: 0.15rem;
    }
   .activity-header{
       padding-top: .13rem;
       text-align: center;
       font-size: .20rem;
       font-weight: 700;
       color: #333;
   }
    .line{
        display: inline-block;
        margin: .10rem .045rem .09rem;
        border: 1px solid #333;
        width: .2rem;
        height: 0;
        position: relative;
    }
    .line:before{
        position: absolute;
        top: -.03rem;
        right:0;
        content: "";
        background: #333;
        height: .06rem;
        width: .06rem;
        border-radius: 50%
    }
    .line.right:before{
        left:0;
    }
    p.activity-sub-title{
        font-size: .12rem;
        color: #999;
        text-align: center;
        padding-bottom: .105rem
    }
    .activity-body{
        display: flex;
        padding:0.16rem  0  0.1rem .2rem;
    }
    a.discover-food{
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        width: 1.11rem;
        margin-right: .08rem;
        display: flex;
        flex-wrap: wrap;
    }
    .ui-ellipsis{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .discover-food img{
        width: 100%;
        height: 1.11rem;
        margin-bottom: .125rem;
    }
    span.discount{
        position: absolute;
        top: 0;
        left: 0;
        font-size: .12rem;
        color: #fff;
        background: #413d3c;
        padding: .03rem;
    }
    .discover-food .food-name{
        font-size: .12rem;
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        color: #333;
        font-weight: 700;
        margin-bottom: .06rem;
    }
    .food-info{
        height: 0.32rem;
        line-height: 0.32rem;
        display: flex;
    }
    .food-info .price{
        font-size: 0.14rem;
        height: 0.24rem;
        line-height: 0.24rem;
        color: #ff5339;
        margin-right: 0.045rem;
        max-width: 0.7rem;
    }

    .food-info   .original-price{
        font-size: .14rem;
        color: #aaa;
        max-width: 0.5rem;
        text-decoration: line-through;
    }
    .activity-more{
       font-size: 0.16rem;
        color: #999;
        text-align: center;
        padding: 0.1rem  0  0.12rem;
    }
</style>