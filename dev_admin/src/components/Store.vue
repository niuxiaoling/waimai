<template>
    <div>
        <admin>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    size="tiny"
            >
                <span>请输入要添加的名字</span>
                <el-form>
                    <el-form-item label="名称">
                        <el-input  v-model="catename"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addCate">确 定</el-button>
                </span>
            </el-dialog>

            <el-tabs  v-model="active">
                <el-tab-pane label="店铺信息" name="info">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="店铺名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="配送方式" prop="type">
                            <el-select v-model="form.type" placeholder="请选择配送方式">
                                <el-option label="蜂鸟配送" value="shanghai"></el-option>
                                <el-option label="小区配送" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="配送时间">
                            <el-col :span="8">
                                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.time"
                                                style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="即时配送">
                            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                        </el-form-item>
                        <el-form-item label="配送费">
                            <template>
                                <el-input-number v-model="form.num1" :min="1"></el-input-number>
                            </template>
                        </el-form-item>
                        <el-form-item label="起送费">
                            <template>
                                <el-input-number v-model="form.qisong" :min="1"></el-input-number>
                            </template>
                        </el-form-item>
                        <el-form-item label="公告">
                            <el-input v-model="form.message"></el-input>
                        </el-form-item>
                        <el-form-item label="活动">
                            <el-input v-model="form.info"></el-input>
                        </el-form-item>
                        <el-form-item label="商家地址">
                            <el-input v-model="form.pos"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">修改信息</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>


                <el-tab-pane label="管理商品" name="manager">
                    <el-tabs v-model="value" type="card" editable @edit="handleTabsEdit">
                        <el-tab-pane v-for="(v ,i) in cateInfo"
                                     :name="v.name"
                                     :label="v.name"
                                     :key="v.id">
                            <!--:data绑定的是this.tableData的值-->
                            <el-table style="width: 100%" :data="filter(v.id)">
                                <el-table-column prop="id" label="编号" width="100">
                                </el-table-column>
                                <el-table-column prop="name" label="商品名字" width="180">
                                </el-table-column>
                                <el-table-column prop="info" label="描述" width="180">
                                </el-table-column>
                                <el-table-column prop="price" label="价格" width="100">
                                </el-table-column>
                                <el-table-column prop="pic" label="图片" >
                                </el-table-column>
                                <el-table-column label="操作">
                                    <template scope="scope">
                                        <el-button
                                                size="small"
                                                @click="handleEdit(scope.$index, scope.row)"
                                              >编辑</el-button>
                                        <el-button
                                                size="small"
                                                type="danger"
                                              >删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>

                </el-tab-pane>
            </el-tabs>
        </admin>
    </div>
</template>
<script>
    import Admin from  './Admin.vue'
    export default{
        name: 'store',
        components: {Admin},
        data(){
            return {
                uid: this.$route.query.uid,
                active: 'manager',
                form: {
                    name: '',
                    time: '',
                    delivery: false,
                    type: '',
                    info: '',
                    message: '',
                    pos: '',
                    fei: 1,
                    qisong: 1,
                },
                //name控制value，value是高亮的那个块
                value: '',
                storeInfo:{},
                tableData: [],
                cateInfo: [],
                dialogVisible:false,
                catename:'',
            }
        },
        mounted(){
            fetch('/api/get_user_store_info?uid=' + this.uid)
                .then(res => res.json())
                .then(data => {
                    this.storeInfo=data;
                    this.form=data;
                    fetch('/api/get_cates?sid=' + data.id)
                        .then(res => res.json())
                        .then(r => {
                            this.cateInfo = r;
                            this.value=r[0].name;
                        });
                    fetch('api/get_goods?sid=' + data.id)
                        .then(res => res.json())
                        .then(d => {
                            this.tableData = d;

                        })
                })
        },
        methods: {
            addCate:function () {
                this.dialogVisible=false;
               let o={
                   id:1000,
                   sid:this.form.id,
                   name:this.catename,
               }
                this.cateInfo.push(o);
               this.catename='';
            },
            handleTabsEdit: function (targetName, action) {
                if (action == 'add') {
                    this.dialogVisible=true;

                } else if (action == 'remove') {
                    this.cateInfo = this.cateInfo.filter((v, i) => {
                        if (v.name == targetName) {
                            if (targetName == this.value) {
                                let d = this.cateInfo[i + 1] || this.cateInfo[i - 1];
                                if (d) {
                                    this.value = d.value;
                                }
                            }
                        }
                        return v.name != targetName;
                    })
                }
            },
            filter: function (cid) {
                return this.tableData.filter(v => v.cid == cid);
            },
            onSubmit: function () {
                this.form.uid = this.uid;
                fetch('/api/update_store', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.form),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.code == 2) {
                            this.$message({
                                message: '信息更改成功',
                                duration: '500',
                                type: 'success',
                            })
                        }else{
                            this.$message({
                                    message:'信息更改失败',
                            }
                            )
                        }
                    })
            },


        }

    }
</script>
<style>
    .el-tabs__new-tab{
        width: 30px;
        height: 30px;
        background: #000;
        margin:auto 200px;
    }
    .el-icon-plus{
        font-size: 20px;
        text-align: center;
        line-height: 30px;
    }
</style>
