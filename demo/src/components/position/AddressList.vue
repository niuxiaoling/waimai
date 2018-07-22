<template>
    <div>
        <section class="checkout">
            <router-link :to="{name:'checkout',query:$route.query}">
                <div class="header_1"> < </div>
                <div class="header-title">选择地址</div>
            </router-link>
        </section>
        <section class="addressView">
            <div class="current" v-for="(v,i) in data" :key="v.id" >
                <div>
                    <img src="../../assets/img/input1.png" alt="" v-if="v.is_default==1">
                </div>
                <div @click="setAddress(v.id)">
                    <p>
                        <span>{{v.name}}</span>
                        <span>{{v.gender}}</span>
                        <span>{{v.phone}}</span>
                    </p>
                    <p>
                        <span class="farHome">{{v.label}}</span>
                        <span>{{v.address}}</span>
                    </p>
                </div>
                <div @click="updateAddress(v.id)">
                    <a href="javascript:;">
                        <img src="../../assets/img/edit.png" alt="" >
                    </a>
                </div>
            </div>
        </section>
        <router-link :to="{name:'addaddress',query:$route.query}">
            <div class="add">
                <img src="../../assets/img/add.png" alt="">
                <span>新增收货地址</span>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                uid:localStorage.user,
                data:[],
                sid:this.$route.query.sid,
            }
        },
        mounted() {
            fetch('/api/get_c_user?uid='+this.uid)
                .then(res=>res.json())
                .then(r=>{
                    if(r.code===2){
                        this.data=r.data;
                    }
                })
        },
        methods:{
            setAddress:function (id) {
                fetch('/api/set_default_address?uid='+this.uid+'&id='+id)
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.code == 2){
                            location.href='#/shop/checkout?sid='+this.sid;
                        }
                     })
            },
            updateAddress:function (id) {
                location.href='#/shopPosition/update_address?sid='+this.sid+'&id='+id;
            }
        }

    }
</script>
<style scoped>

    .checkout {
    width: 100%;
    height: 0.44rem;
    background-image: linear-gradient(90deg, #FAD0C4, #ff9a9e);
    position: fixed;
    left:0;
    z-index: 100;
    top:0;
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
    .addressView{
    width: 100%;
    position: absolute;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100% - 0.5rem);
    overflow-y: auto;
    background-color: #efeff4;
    padding: 0.44rem 0 0.52rem;
    box-sizing: border-box;
    }
    .current{
    border-top: .01rem solid #ddd;
    background-color: #fff;
    padding: .15rem;
    border-bottom: 0.005rem solid #ddd;
    display: flex;
    font-size: 0.16rem;
    justify-content: flex-start;
    }
    .current>div:first-child{
    display: flex;
    align-items: center;
    }
    .current>div:nth-child(2){
    width: 80%;
    margin-left: 0.2rem;

    }
    .current>div:first-child>img{
    width: 0.2rem;
    height: 0.2rem;
    }
    .current>div:nth-child(2)>p:first-child{
    font-weight: 600;
    color: #333;
    font-size: 0.2rem;
    }
    .current>div:nth-child(2)>p:last-child{
    font-size: 0.16rem;
    }
    .current>div:last-child{
    display: flex;
    align-items: center;
    }
    .current>div:last-child>a>img{
    width: 0.2rem;
    height: 0.2rem;
    }

    .far>div:first-child{
    width: 100%;
    padding: 0.14rem 0.15rem 0.2rem;
    color: #666;
    font-size: 0.14rem;
    }
    .far>.farList{
    width: 100%;
    background-color: #fff;
    padding: .15rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    }

    .far>.farList>div:first-child>p:first-child{
    font-size: 0.16rem;
    font-weight: 500;
    color: #bbb;
    }
    .far>.farList>div:first-child>p:last-child{
    font-size: 0.14rem;
    font-weight: 400;
    color: #bbb;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    }
    .far>.farList>div:last-child>img{
    width: 0.2rem;
    height: 0.2rem;
    display: flex;
    }
    .farHome{
    display: inline-block;
    background-color: #ff5722;
    border-radius: .053333rem;
    font-size: .12rem;
    color: #fff;
    width: 0.4rem;
    text-align: center;
    }

    .add{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 0.5rem;
    background: #fff;
    align-items: center;
    justify-content: center;
    }
    .add span{
    border-top: .01rem solid #ddd;
    color: #3190e8;
    font-size: .16rem;
    font-weight: 500;
    }
    .add  img{
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.1rem;
    }
</style>