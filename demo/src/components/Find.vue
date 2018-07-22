<template>
    <div>
        <find-classify :finddata="findData"></find-classify>
        <find-activity :findactivity="findActivity" :activitydetail="activityDetail"></find-activity>
    </div>
</template>
<script>
    import findClassify from './find/findClassify.vue'
    import findActivity from './find/findActivity.vue'
    export default{
        name: 'find',
        data(){
            return {
                findData: [
                    {id: 1, name: '积分商城', desc: '0元好物在这里！', url: ''},
                    {id: 2, name: '美味爆料', desc: '无啤酒不夏天！', url: ''},
                    {id: 3, name: '推荐有奖', desc: '5元现金拿不停！', url: ''},
                ],
                findActivity: [
                    {id: 1, name: '限时好礼', sub_title: '小积分换豪礼'},
                    {id: 2, name: '推荐有奖', sub_title: '小积分换豪礼'},
                ],
                activityDetail: {
                    '限时好礼': [{
                        id: 1,
                        parent_id: 1,
                        name: 'iPhone 7 32G',
                        price: '499',
                        original_price: '4499',
                        discount: '抽奖活动',
                        pic: ''
                    },
                        {
                            id: 2,
                            parent_id: 1,
                            name: '7元饿了么红包',
                            price: '3500',
                            original_price: '7',
                            discount: '抽奖活动',
                            pic: ''
                        },
                        {
                            id: 3,
                            parent_id: 1,
                            name: 'iPhone 7 32G',
                            price: '499',
                            original_price: '4499',
                            discount: '抽奖活动',
                            pic: ''
                        }],

                    '推荐有奖': [{
                        id: 4,
                        parent_id: 1,
                        name: 'iPhone 7 32G',
                        price: '499',
                        original_price: '4499',
                        discount: '抽奖活动',
                        pic: ''
                    },
                        {
                            id: 5,
                            parent_id: 1,
                            name: '7元饿了么红包',
                            price: '3500',
                            original_price: '7',
                            discount: '抽奖活动',
                            pic: ''
                        },
                        {
                            id: 6,
                            parent_id: 1,
                            name: 'iPhone 7 32G',
                            price: '499',
                            original_price: '4499',
                            discount: '抽奖活动',
                            pic: ''
                        }],
                }
            }
        },
        components: {
            'find-classify': findClassify,
            'find-activity': findActivity
        }
    }
</script>
<style>

</style>