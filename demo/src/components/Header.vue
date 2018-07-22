<template>
    <div>
        <section class="header">
            <div class="header_1"> < </div>
            <div class="header-title">发现</div>
        </section>
    </div>
</template>
<script>
    export default{
        name:'header',
        data(){
            return{

            }
        },

    }
</script>
<style>
    /*头部开始*/
    .header {
        width: 100%;
        height: 0.44rem;
        background-image: linear-gradient(90deg, #0af, #0085ff);
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
</style>