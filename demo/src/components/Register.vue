<template>
    <div>
        <register-header></register-header>
        <me-name></me-name>
        <me-list :listmain="server" :listmain1="server1"></me-list>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import registerHeader from './register/registerHeader.vue'
    import meName  from './me/meName.vue'
    import meList from  './me/meList.vue'
    import Footer from './Footer.vue';
    export default{
        name:'register',
        components:{
            'register-header':registerHeader,
            'me-name':meName,
            'me-list':meList,
            'app-footer':Footer
        },
       data(){
           return{
               server:[
                   {id:1,name:'我的订单',src:'#/order'},
                   {id:2,name:'积分商城',src:''},
                   {id:3,name:'饿了么会员卡',src:''},
               ],
               server1:[
                   {id:1,name:'服务中心',src:'#/order'},
                   {id:2,name:' 下载饿了么APP',src:''},
               ],
           }
       },

    }
</script>
<style>

</style>