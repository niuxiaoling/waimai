<template>
    <div>
        <section class="reg-header">
            <div class="header_1"> < </div>
            <div class="header-title">我的</div>
        </section>
        <a href="#/login">
            <section class="user-main">
                <div class="info-img">
                </div>

                <div class="main-name">
                    <span class="zhanghao">登录</span>
                    <span>/</span>
                    <span class="tel">注册</span>
                    <p class="rload">登录后享受更多特权</p>
                </div>
                <span> > </span>
            </section>
        </a>
    </div>
</template>
<script>

</script>
<style scoped>
    .reg-header {
        width: 100%;
        background-image: linear-gradient(90deg, #0af, #0085ff);
        position: relative;
    }

    .header_1 {
        height: 0.36rem;
        padding: 0.05rem 0.13rem;
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

    .user-main {
        background-image: linear-gradient(90deg, #0af, #0085ff);
        height: 1.1rem;
        padding: 0.2rem 0.2rem;
        display: flex;
        position: relative;
    }

    .info-img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        display: inline-block;
        background: #fff;
    }

    .info-img img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .main-name {
        color: #fff;
        font-size: 0.28rem;
        margin-left: 0.24rem;
    }
    .zhanghao{
        font-size: 0.24rem;
    }
    .tel {
        font-size: 0.24rem;
    }
    .rload{
        padding:0.05rem 0 0 0.2rem;
        font-size: 0.14rem;
    }
    .main-name + span {
        height: 100%;
        color: #fff;
        font-family: '宋体';
        font-size: 0.2rem;
        position: absolute;
        right: 0.2rem;
        top: 0;
        transform: translateY(30%);
    }
</style>