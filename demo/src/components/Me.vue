<template>
    <div>
        <me-header></me-header>
        <me-name></me-name>
        <me-list ></me-list>
        <app-footer></app-footer>
    </div>
</template>
<script>
   import meHeader from './me/meHeader.vue'
   import meName from  './me/meName.vue'
   import meList from  './me/meList.vue'
   import Footer from './Footer.vue';
   export default{
       name:'me',
       data(){
         return{
         }
       },
       components:{
           'me-header':meHeader,
           'me-name':meName,
           'me-list':meList,
           'app-footer':Footer
       },

   }
</script>
<style>
    body{
        background: #F5F5F5;
    }
</style>