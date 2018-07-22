<template>
    <div>
        <!--按钮-->
       <!--<el-button :plain="true" :disabled="true">主要按钮</el-button>-->
        <!--<span class="wrapper">-->
            <!--<el-button :plain="true" type="success">成功按钮</el-button>-->
            <!--<el-button :plain="true" type="warning">警告按钮</el-button>-->
            <!--<el-button :plain="true" type="danger">危险按钮</el-button>-->
            <!--<el-button :plain="true" type="info">信息按钮</el-button>-->
       <!--</span>-->
        <!--&lt;!&ndash;过度效果&ndash;&gt;-->
        <!--<transition name="el-fade-in">-->
            <!--<div v-show="show" class="transition-box">显示盒子</div>-->
        <!--</transition>-->
        <!--<el-button :plain="true" type="success" @click="show=!show">点击显示</el-button>-->
        <!--<transition name="el-zoom-in-top">-->
            <!--<div v-show="show" class="transition-box">显示盒子</div>-->
        <!--</transition>-->
        <!--<el-button :plain="true" type="success" @click="show=!show">点击缩放</el-button>-->
        <!--<el-collapse-transition>-->
            <!--<div v-show="show3">-->
               <!--<div v-show="show" class="transition-box">下拉盒子</div>-->
               <!--<div v-show="show" class="transition-box">下拉盒子</div>-->
            <!--</div>-->
        <!--</el-collapse-transition>-->
        <!--<el-button :plain="true" type="success" @click="show3=!show3">点击展开</el-button>-->
        <!--form表单-->
        <!--<el-radio-group v-model="radio" >-->
            <!--<el-radio :label="1">商品</el-radio>-->
            <!--<el-radio :label="2">店铺</el-radio>-->
            <!--<el-radio :label="3" @change="submit">店铺</el-radio>-->
        <!--</el-radio-group>-->
        <!--<el-radio-group v-model="radio" >-->
            <!--<el-radio-button label="1" size="large" >商品</el-radio-button>-->
            <!--<el-radio-button label="2" disabled>店铺</el-radio-button>-->
            <!--<el-radio-button label="3" >店铺</el-radio-button>-->
        <!--</el-radio-group>-->
        <!--多选框-->
        <!--<el-checkbox-group v-model="list">-->
            <!--<el-checkbox label="A"></el-checkbox>-->
            <!--<el-checkbox label="B"></el-checkbox>-->
            <!--<el-checkbox label="C"></el-checkbox>-->
        <!--</el-checkbox-group>-->
        <el-checkbox :indeterminate="isdis" v-model="checkALL" @change="checkALLchange"></el-checkbox>
        <el-checkbox-group v-model="checkcity" @change="handleCheck">
            <el-checkbox v-for="v in citys" :label="v" :key="v"></el-checkbox>
        </el-checkbox-group>
        <el-input v-model="input" placeholder="请输入内容" icon="search" class="input" :on-icon-click="search">
        </el-input>
        <el-input v-model="textarea" type="textarea"  placeholder="请输入内容" icon="search" class="input" :on-icon-click="search" autosize >

        </el-input>
        <el-input  icon="search" >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>

        </el-input>
        <el-input-number v-model="num1" @change="number" :min="1" :max="10"></el-input-number>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="i in options"
                    :key="i.value"
                    :label="i.label"
                    :value="i.value">
            </el-option>
        </el-select>
        <el-color-picker v-model="color3" show-alpha></el-color-picker>
        <el-switch
                v-model="value1"
                on-text="开了"
                off-text="关了"
                on-color="#13ce66"
                off-color="#ff4949">
        </el-switch>
        <el-slider v-model="value2"  show-input :show-tooltip="false"></el-slider>
        <el-time-picker
                v-model="value3"
                :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="任意时间点">
        </el-time-picker>
        <el-rate
                v-model="value4"
                show-text
                :texts="text">
        </el-rate>

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
             <el-button type="primary" >查询</el-button>
        </el-form-item>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
        </el-form>
        <el-progress type="circle" :percentage="99" status="success"></el-progress>
        <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-pagination>

        </el-pagination>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                show:true,
                show3:true,
                radio:1,
                list:['A','C'],
                checkALL:true,
                isdis:true,
                checkcity:['上海'],
                citys:['上海','北京','江苏'],
                input:'',
                textarea:'',
                select:'',
                num1:'',
                options:[{value:'1',label:'黄金糕'},{value:'2',label:'黄金糕'},{value:'3',label:'黄金糕'}],
                value:'',
                value1:true,
                value2:0,
                value3: new Date(2016, 9, 10, 18, 40),
                value4:null,
                text:['哈哈','不错','喜欢'],
                color3:'red',
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        methods:{
            submit:function (value) {

            },
            checkALLchange:function (value) {
                this.checkcity=value.target.checked? citys:[];
                this.isdis=false;
            },
            handleCheck:function (value) {
                let length=value.length;
                this.checkAll=length===this.citys.length;
                this.isdis = length > 0 && length < this.cities.length;
            },
            search:function (event) {
                console.log(event);
            },
            number:function (value) {
                console.log(value);
            }
        }
    }
</script>
<style>
    .transition-box{
        width: 100px;
        height: 100px;
        border-radius: 4px;
        background-color: #20A0FF;
        text-align: center;
        color:#fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
    .el-select,.el-input{
        width:110px;
    }
    .input{
        width:300px;

    }
</style>
