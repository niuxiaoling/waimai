<template>
    <div>
        <div class="index">
            <a href="">
              <p>
                  <span>0</span>个
              </p>
                <p>优惠</p>
            </a>
            <a href="">
                <p>
                    <span>0</span>个
                </p>
                <p>积分</p>
            </a>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
   .index{
       background: #fff;
       border-bottom: 0.01rem solid #ddd;
       width: 100%;
       display: table;
   }
    .index>a:first-child{
        border-right: 0.01rem solid #ddd;
    }
    .index a{
        display: table-cell;
        width: 33.33%;
        height: 100%;
        text-align: center;
        padding: 0.1rem 0;
    }
   .index>a p{
        font-size: 0.32rem;
        color:#000;
   }
   .index>a p span{
       font-size: 0.6933333rem;
       margin: 0 auto;

   }
   .index>a:first-child p span{
       color: rgb(255,95,62);
   }
   .index>a:last-child p span{
       color: rgb(106, 194, 11);
   }
</style>