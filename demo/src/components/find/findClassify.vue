<template>
    <div>
        <section class="find">
            <a href="">
                <div class="header_1 iconfont icon-fanhui"> </div>
                <div class="header-title">发现</div>
            </a>
        </section>
        <section class="classify">
            <div class="entry">
                <a href="">
                    <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
                         alt="">
                    <p class="jifen_title">积分商城</p>
                    <p class="tips">0元好物在这里！</p>
                </a>
                <div class="entry-one">
                    <a href="" class="list1">
                        <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/"
                             alt="">
                        <p class="jifen_title title1">美味爆料</p>
                        <p class="tips">无啤酒不夏天！</p>
                    </a>
                    <a href="">
                        <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/"
                             alt="">
                        <p class="jifen_title title2">推荐有奖</p>
                        <p class="tips">5元现金拿不停！</p>
                    </a>
                </div>

            </div>
            <div class="entry">
                <a href="">
                    <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/"
                         alt="">
                </a>

            </div>
        </section>
    </div>
</template>
<script>
    export default{
        name: 'findClassify',
        props: ['finddata'],
    }
</script>

<style>
    /*头部开始*/
    .find {
        width: 100%;
        height: 0.44rem;
        background: linear-gradient(45deg,#FFF6B7,#F6416C);
        position: relative;
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
    /*分类开始*/
    .classify {
        margin-bottom: 0.14rem;
    }

    .entry:first-child {
        margin-bottom: 0.14rem;
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    }

    .entry:first-child a {
        display: block;
        position: relative;
        border-bottom: 1px solid #ededed;
    }

    .entry:first-child > a {
        height: 2.32rem;
        padding: 0.15rem;
        padding-top: 0.3rem;
        border-right: 1px solid #ededed;
    }

    .entry:first-child > a {
        width: 50%;
        height: 2.32rem;
    }

    .entry:first-child > a > img {
        position: absolute;
        bottom: 0.32rem;
        width: 0.75rem;
        height: 0.75rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .jifen_title {
        font-size: .20rem;
        margin-bottom: .04rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: rgb(255, 151, 0);
    }

    .tips {
        font-size: .16rem;
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .entry-one {
        width: 50%;
        position: relative;
        height: auto;
    }

    .entry:first-child .entry-one a:nth-child(1),
    .entry:first-child .entry-one a:nth-child(2) {
        width: 100%;
        height: 50%;
        position: relative;
        padding: 0.32rem 0.2rem;
    }

    .entry:first-child .entry-one a:nth-child(1) img,
    .entry:first-child .entry-one a:nth-child(2) img {
        position: absolute;
        bottom: 0.32rem;
        width: 0.45rem;
        height: 0.45rem;
        right: 0.1rem;
    }

    .title1 {
        color: rgb(245, 120, 93);
    }

    .title2 {
        color: rgb(27, 169, 225);
    }

    .entry:last-child {
        height: 0.85rem;
        box-sizing: border-box;
        border-top: 1px solid #ededed;
    }

    .entry:last-child a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        border-bottom: 1px solid #ededed;
    }

    .entry:last-child > a > img {
        width: 100%;
        height: 100%;
    }

    /*分类结束*/
</style>