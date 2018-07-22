<template>
    <div>
        <section class="checkout">
            <router-link :to="{name:'address-list',query:$route.query}">
                <div class="header_1"> < </div>
                <div class="header-title">添加地址</div>
            </router-link>
        </section>
        <section class="addressfrom">
                <div class="username">
                    <div>联系人</div>
                    <div class="input-group-wrap">
                        <input type="text" placeholder="你的名字" class="input-wrap" v-model="data.name">
                        <div class="input-wrap bottom">
                            <span
                               :class="{radio:true,checked:data.gender==='先生'}"
                                    @click="setGender('先生')">先生</span>
                            <span :class="{radio:true,checked:data.gender==='女士'}" @click="setGender('女士')">女士</span>
                        </div>

                    </div>
                </div>
                <div class="username">
                    <div>联系电话</div>
                    <div>
                        <div class="userphone">
                            <input type="text" placeholder="你的手机号" class="input-wrap" v-model="data.phone" maxlength="11">
                            <!--<img src="../../assets/img/add.png" alt="">-->
                        </div>
                    </div>
                </div>
                <div class="username">
                    <div>送餐地址</div>
                    <div>
                        <div>
                            <input type="text" placeholder="小区/写字楼/学校等" class="input-wrap" v-model="data.address">
                        </div>
                        <div class="useraddress">
                            <input type="text" placeholder="详细地址 (如门牌号等)">
                        </div>
                    </div>
                </div>
                <div class="username">
                    <div>标签</div>
                    <div class="input-wrap bottom">
                        <span :class="{radio:true,checked:data.label===v}" @click="setLabel(v)" v-for="(v,i) in ['家','学校','公司']">{{v}}</span>
                    </div>
                </div>
               <router-link :to="{name:'address-list',query:$route.query}">
                   <div class="userbutton">
                       <a href="javascript:;" @click="submit"><button>确定</button></a>
                   </div>
               </router-link>
            </section>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               data:{
                 uid:localStorage.user,
                 name:'',
                 phone:'',
                 address:'',
                 gender:null,
                 label:null
               },
            }
        },
        methods:{
            setGender:function (v) {
               this.data.gender=v;
            },
            setLabel:function (v) {
               this.data.label=v;
            },
            submit:function () {
                let reg=/^\d{11}$/;
                if(!reg.test(this.data.phone)){
//                    alert('请输入合法的手机号');
                    console.log(this.data.phone);
                }else {
                    fetch('/api/set_c_address', {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify(this.data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if(data.code == 2){
//                                location.href='#/shopPosition/?sid=1'
                            }
                        })
                }
            }
        },
    }
</script>
<style scoped>
    /*头部开始*/
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
    /*内容开始*/
    .addressfrom{
        width: 100%;
        margin-top: 0.44rem;
        background-color: #f5f5f5;
    }
    .username{
        border-top: .01rem solid #eee;
        background-color: #fff;
        padding:0.15rem 0  0  0.15rem ;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .username>div:first-child{
        width:35%;
        padding: 0.15rem 0;
        font-size: 0.16rem;
    }
    .input-group-wrap{
        width: 65%;
        display:flex;
        flex-direction: column;
    }
    .input-wrap{
        outline: none;
        font-size: .16rem;
        border: 0;
        padding:0.1rem 0;
        color: #333;
    }
    .bottom{
        display: flex;
    }
    .radio{
        padding:0.03rem 0.1rem;
        border:0.01rem solid #ddd;
        border-radius: 0.05rem;
        background: #fff;
        margin-right: 0.13rem;
        display: block;
        text-align: center;
        font-size: 0.18rem;
        color: #666;
    }
    .radio.checked{
        color:#2395ff;
        background: #eef7ff;
        border-color: rgba(35,149,255,.18);
    }
    .username>div:last-child>div:first-child{
        display: flex;
        padding: 0.12rem 0;
        color: #333;
    }

    .username>div:last-child>div:last-child{
        border-top: 1px solid #eee;
        font-size: 0.16rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding:0.13rem 0;
    }
    .username>div:last-child>div:last-child>span:first-child,.username>div:last-child>div:last-child>span:last-child{
        display: flex;
        padding-top: 0.1rem;
        justify-content: space-between;
        padding-right: 0.2rem;
    }
    .username>div:last-child>div:last-child>span:first-child>span{
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.08rem;
        background: url("../../assets/img/input.png") no-repeat;
        background-size: contain;
    }
    .userphone{
        border-top: none !important;
        font-weight: 500;
    }
    .userphone>img{
        width: 0.16rem;
        height: 0.16rem;

    }

    .useraddress>input{
        outline: none;
        font-size: .16rem;
        border: 0;
        color: #333;
    }

    .usersign{
        width: 70%;
    }
    .usersign>div{
        float: right;
        font-size: 0.18rem;
        font-family: '宋体';
        color: #d5d5d5;
        font-weight: 500;
    }

    .userbutton{
        width: 100%;
        padding: 0.2rem 0.15rem;
        box-sizing: border-box;
        display: flex;

    }
    .userbutton>a{
        width: 100%;
        display: flex;
    }
    .userbutton>a>button{
        background: #ff9a9e;
        text-align: center;
        border-radius: .053333rem;
        width: 100%;
        height: 0.5rem;
        font-size: 0.2rem;
        color: #fff;
        border: none;
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