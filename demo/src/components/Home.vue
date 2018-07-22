<template>
    <div>
        <home-header :header="header"></home-header>
        <home-category :categories="categories"></home-category>
        <home-list :shops="shops"></home-list>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import  homeHeader  from './home/homeHeader.vue'
    import  homeCategory  from './home/homeCategory.vue'
    import  homeList   from './home/homeList.vue'
    import  Footer  from './Footer.vue'
    export default{
        name: 'home',
        data(){
            return {
                header: [
                    {id: 1, name: '粥', url: ''},
                    {id: 2, name: '烤冷面', url: ''},
                    {id: 3, name: '汉堡', url: ''},
                    {id: 4, name: '麻辣拌', url: ''},
                    {id: 5, name: '巧媳妇', url: ''},
                    {id: 6, name: '方便面', url: ''},
                ],
                categories: [
                    {
                        id: 1,
                        name: '美食',
                        pic: '//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                        url: '#/home/homeMain'
                    },
                    {
                        id: 2,
                        name: '甜品饮品',
                        pic: '//fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                        url: ''
                    },
                    {
                        id: 3,
                        name: '商超便利',
                        pic: '//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                        url: ''
                    },
                    {
                        id: 4,
                        name: '果蔬生鲜',
                        pic: '//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                        url: ''
                    },
                    {
                        id: 5,
                        name: '准时达',
                        pic: '//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                        url: ''
                    },
                    {
                        id: 6,
                        name: '异国料理',
                        pic: '//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                        url: ''
                    },
                    {
                        id: 7,
                        name: '大牌满减',
                        pic: '//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
                        url: ''
                    },
                    {
                        id: 8,
                        name: '美食',
                        pic: '//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/  ',
                        url: ''
                    },
                ],
                shops:[],
            }
        },
        mounted:function () {
            fetch('/api/get_shops')
                .then(res=>res.json())
                .then(data=>this.shops=data)
        },
        components: {
            'home-header': homeHeader,
            'app-footer': Footer,
            'home-category': homeCategory,
            'home-list': homeList
        }
    }
</script>

<style>

</style>