<template>
    <div>
        <section class="meList">
           <ul class="list-main">
               <li >
                   <router-link :to="{name:'order'}">
                       <i class="iconfont  icon-dingdan order"></i>
                       <div class="text" >
                           <span>我的订单</span>
                           <span class="iconfont icon-you jiantou">  </span>
                       </div>
                   </router-link>
               </li>
               <li >
                   <router-link :to="{name:'find'}">
                       <i class="iconfont  icon-integral jifen"></i>
                       <div class="text" >
                           <span>积分商城</span>
                           <span class="iconfont icon-you jiantou">  </span>
                       </div>
                   </router-link>
               </li>
               <li >
                   <router-link :to="{name:'find'}">
                       <i class="iconfont  icon-bao1 huiyuan"></i>
                       <div class="text" >
                           <span>饿了么会员卡</span>
                           <span class="iconfont icon-you jiantou">  </span>
                       </div>
                   </router-link>
               </li>
           </ul>
            <ul class="list-main">
                <li >
                    <router-link :to="{name:'home'}">
                        <i class="iconfont icon-qijilogo server "></i>
                        <div class="text">
                            <span>服务中心</span>
                            <span class="iconfont icon-you jiantou">  </span>
                        </div>
                    </router-link>
                </li>
                <li >
                    <router-link :to="{name:'home'}">
                        <i class="iconfont icon-dibucaidanlan-"></i>
                        <div class="text">
                            <span>下载外卖到APP</span>
                            <span class="iconfont icon-you jiantou">  </span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    export default{
    }
</script>
<style  scoped>
    .list-main{
        margin-top: 0.26777rem;
        border-top: 0.01rem solid #ddd;
        background: #fff;
    }
    .list-main  li{
        display: flex;
        border-bottom: 0.01rem solid #ddd;
    }
    .list-main  li a{
        display: flex;
        width: 100%;
        font-size: 0.426667rem;
        color: #333;
    }
    .list-main  li a i{
         width:15%;
         text-align: center;
         align-items: center;
         margin-top: 0.2rem;
    }
    .list-main  li a  .text{
        display: flex;
        font-family: '宋体';
        justify-content: space-between;
        width: 90%;
        padding: .12rem .13rem .16rem 0.1rem;
    }
    .order{
        color:rgb(106, 194, 11);
    }
    .jifen{
        color:rgb(255,95,62);
    }
    .huiyuan{
        color:rgb(27, 169, 225);
    }
    .server{
      color:#28C76F;
    }
    .jiantou{
        color: #ddd;
        margin-top: 0.15rem;
        font-size: 0.24rem;
    }
</style>