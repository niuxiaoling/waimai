<template>
        <ul class="footer">
            <li>
                <a href="#/" >
                    <p class="iconfont icon-waimai icon-footer " :class="{'active':$route.path=='/'}"></p>
                </a>
            </li>
            <li>
                <a href="#/find">
                    <p class="iconfont icon-faxian icon-footer" :class="{'active':$route.path=='/find'}"></p>

                </a>
            </li>
            <li>
                <a href="#/order">
                    <p class="iconfont icon-dingdan icon-footer" :class="{'active':$route.path=='/order'}"></p>

                </a>
            </li>
            <li>
                <a href="#/me">
                    <p class="iconfont icon-wode-fuben_fuzhi icon-footer" :class="{'active':$route.path=='/me'}"></p>
                </a>
            </li>

        </ul>
</template>
<script>

</script>
<style>

  .footer{
      background-color: #fff;
      padding-top: 0.24rem;
      box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
      position: fixed;
      width:100%;
      left:0;
      bottom:0;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.16rem;
  }
    .footer li{
        width: 25%;
        text-align: center;

    }
  .icon-footer{
      color: rgb(255,95,62);
      font-size: 0.5rem;
      padding-bottom: 0.24rem;
  }
  .iconfont.active{
      color:#20A0FF;
  }
    .footer li a{
        color: #333;
        font-size: 0.16rem;
    }



</style>