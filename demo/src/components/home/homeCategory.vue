<template>
    <!--分类开始-->
    <div class="category-box">
        <div class="category">
            <div class="list">
                <a  :href="v.url" v-for="(v,i) in categories">
                    <div class="container">
                        <img :src="v.pic" alt="">
                    </div>
                    <span>{{v.name}}</span>
                </a>
            </div>
            <ul class="circle">
                <li class="active"></li>
                <li></li>
            </ul>
        </div>

    </div>
    <!--分类结束-->
</template>
<script>
    export default{
       props:['categories'],
    }
</script>
<style scoped>
    .category-box {
    }

    .category {
        padding:0 0 0.6rem 0;
        overflow: hidden;
        background: #fff;
        display: block;
        position: relative;
    }

    .category a {
        display: block;
        width: 25%;
        margin-top: 3%;
        float: left;
    }

    .category a .container {
        display: block;
        width:48%;
        height:48%;
        margin: 0 auto;
    }

    .category a .container img {
        display: block;
        width:100%;
        height: 100%;
    }

    .category a .container + span {
        display: block;
        color: #666;
        font-size: 0.32rem;
        text-align: center;
    }

    ul.circle {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.1rem;

    }

    ul.circle > li {
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
        /*display: flex;*/
        justify-content: center;
        background: #000;
        opacity: 0.2;
        float: left;
        margin: 0 0.36rem;
    }

    ul.circle > li.active {
        opacity: 0.6;
    }

</style>
