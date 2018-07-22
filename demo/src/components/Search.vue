<template>
   <div>
       <div class="search-box">
           <form class="searchdesc">
               <a href="#/">&lt;</a>
               <input type="search" placeholder="请输入商品名称">
           </form>
           <section class="searchHistory">
               <div class="History1">
                   <span>历史搜索</span>
               </div>
               <div class="History2">
                   <span v-for="v in history">{{v.name}}</span>
               </div>
           </section>
           <section class="searchHistory">
               <div class="History1">
                   <span>热门搜索</span>
               </div>
               <div class="History2">
                   <span v-for="v in hot">{{v.name}}</span>
               </div>
           </section>
       </div>

   </div>
</template>
<script>
    export default{
        name:'search',
        data(){
            return{
                history:[
                    {id:1,name:'粥'},
                    {id:2,name:'刀削面'},
                    {id:3,name:'饺子'},
                    {id:4,name:'烧麦'}
                ],
                hot:[
                    {id:1,name:'包子'},
                    {id:2,name:'鱼肉'},
                    {id:3,name:'沙拉'},
                    {id:4,name:'兰州拉面'},
                    {id:5,name:'锅包肉'},
                    {id:6,name:'炒米粉'},
                    {id:7,name:'沙拉'},
                    {id:8,name:'烧麦'}
                ]
            }
        }
    }
</script>
<style>
    .search-box{
        background: #fff;
    }
    .searchdesc{
        width: 100%;
        height: 0.57rem;
        display: flex;
        align-items: center;
        padding: .11rem;
        position: relative;
        z-index: 101;
        box-sizing: border-box;
        font-size: 0.26rem;
    }
    .searchdesc>a{
        width: .5rem;
        height: .5rem;
        fill: #999;
        padding: .05rem .05rem .05rem 0;
        font-family: '宋体';
        font-weight: 900;
        color: #999;
        text-align: center;
    }
    .searchdesc>input{
        width: 3.18rem;
        height: 0.35rem;
        flex-grow: 1;
        border-radius: .4rem;
        background-color: #f8f8f8;
        padding: .065rem .15rem;
        font-size: .16rem;
        color: #666;
        outline: none;
        border: 0;
    }
    .searchHistory{

    }
    .History1{
        width: 100%;
        height: 0.36rem;
        padding: 0.075rem 0.125rem;
        box-sizing: border-box;
        font-size: 0.18rem;
        font-weight: 600;
        color:#666;
    }
    .History2{
        width: 100%;
        padding: 0 0.125rem 0.125rem;
        box-sizing: border-box;
        font-size: 0.16rem;
    }
    .History2>span{
        display: inline-block;
        border-radius: .066667rem;
        padding: .1rem .13333rem;
        font-size: .16rem;
        margin-right: .16666rem;
        margin-top: .16666rem;
        color: #666;
        background-color: #f7f7f7;
    }
</style>