
<template>
    <div>
        <admin>
            <el-table
                    :data="orders"
                    style="width: 100%">
                <el-table-column type="expand">
                    <template scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="店铺名称">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="下单时间">
                                <span>{{ props.row.ctime }}</span>
                            </el-form-item>
                            <el-form-item label="店铺 ID">
                                <span>{{ props.row.id }}</span>
                            </el-form-item>
                            <el-form-item label="店铺 图片">
                                <span>{{ props.row.pic }}</span>
                            </el-form-item>
                            <el-form-item label="下单用户">
                                <span>{{ props.row.cname }}({{ props.row.gender }})</span>
                            </el-form-item>
                            <el-form-item label="用户地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="用户电话">
                                <span>{{ props.row.phone }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        label="订单 ID"
                        prop="id">
                </el-table-column>
                <el-table-column
                        label="店铺名称"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="下单时间"
                        prop="ctime">
                </el-table-column>
                <el-table-column
                        label="状态"
                        prop="state">
                </el-table-column>
            </el-table>
        </admin>

    </div>
</template>
<script>
    import Admin from './Admin.vue'
    export default{
        name:'orders',
        components:{Admin},
        data(){
            return {
                uid:this.$route.query.uid,
                tableData5: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '牛奶',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }
                ],
                orders:[],
                goods:[]
            }
        },
        mounted(){
            fetch('/api/get_order?uid='+this.uid)
                .then(res=>res.json())
                .then(r=>{
                     this.orders=r.data.orders;
                     this.goods=r.data.goods;
                })
        }
    }
</script>
<style scoped>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
