<template>
    <div class="shop">
        <shop-header :data="shopData" ></shop-header>
        <shop-goods :goods="t" :categories="cateData"></shop-goods>
        <shop-footer :shopinfo="shopData" :choicedgoods="choicedgoods"></shop-footer>
    </div>

</template>
<script>
    import  shopHeader  from './shop/shopHeader.vue';
    import  shopGoods  from './shop/shopGoods.vue';
    import  shopFooter from './shop/shopFooter.vue'
    export default {
        name:'shop',
        data () {
            return {
                shopData:[],
                categories:[],
                goods:[],
            }
        },
        //原生发送ajax请求
        mounted:function(){
            let sid=this.$route.query.sid;
            //头部信息
            fetch('/api/get_store_info?id='+sid)
                .then(res=>res.json())
                .then(data=>this.shopData=data[0])

            fetch('/api/get_cates?sid='+sid)
                 .then(res=>res.json())
                 .then(data=>this.categories=data)
            fetch('/api/get_goods?sid='+sid)
                .then(res=>res.json())
                .then(data=>{
                    this.goods=data.map(v=>{
                        v.num=0;
                        return v;
                    })
                    if(localStorage.choicedgoods){
                        let arr=JSON.parse(localStorage.choicedgoods);
                        arr.forEach(v=>{
                            this.goods.forEach(c=>{
                               if(v.id==c.id){
                                   c.num=v.num;
                               }
                            })
                        })
                    }
                })
        },
        computed:{
            //用户选中的商品
            choicedgoods:function () {
               return this.goods.filter(v=>v.num);
            },
            cateData:function () {
              let r=[];
              this.categories.forEach(v=>{
                  let n=0;
                  this.goods.forEach(g=>{
                      if(v.id===g.cid){
                          n+=g.num;
                      }
                  })
                  v.num=n;
                  r.push(v);
              });
                return r;
            },
            t:function () {
                let r={};
                let o={};
                this.categories.forEach(v=>{
                    r[v.name]=[];
                    o[v.id]=v.name;
                });
                this.goods.forEach(v=>{
                    r[o[v.cid]].push(v);
                })
                return r;
            }
        },
        components:{
            'shop-header':shopHeader,
            'shopGoods':shopGoods,
            'shop-footer':shopFooter
        }
}
</script>

<style scoped>
     .shop{
         width: 100%;
         height:100vh;
     }
</style>
