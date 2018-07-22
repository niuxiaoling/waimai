import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Me  from '../components/Me'
import Order from '../components/Order'
import Shop from '../components/Shop'
import Find from '../components/Find'
import meMess from '../components/me/meMess'
import homeMain from '../components/home/homeMain'
import Login  from '../components/Login.vue'
import Register from '../components/Register.vue'
import checkOut from '../components/shop/checkOut'
import Search  from '../components/Search'
import orderFinish from '../components/order/orderFinish'
import orderList from '../components/order/orderList'
import shopFooter from '../components/shop/shopFooter'
import onlinePay  from '../components/shop/onlinePay'
import shopPosition from '../components/shopPosition'
import Addaddress from '../components/position/Addaddress'
import AddressList from '../components/position/AddressList'
import update_address from '../components/position/update_address'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/me',
            name: 'me',
            component: Me
        },
        {
            path:'/login',
            name:'login',
            component:Login

        },
        {
            path:'/register',
            name:'register',
            component:Register

        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children:[
                {
                    path:'orderfinish',
                    name:'orderfinish',
                    component:orderFinish
                },
                {
                    path:'',
                    name:'orderlist',
                    component:orderList
                },
            ]
        },
        {
            path:'/order/orderFinish',
            name:'orderFinish',
            component:orderFinish
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/find',
            name: 'find',
            component: Find
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path:'/me/meMess',
            name:'meMess',
            component:meMess

        },
        {
            path:'/home/homeMain',
            name:'homeMain',
            component:homeMain

        },
        {
            path:'/shop/checkout',
            name:'checkout',
            component:checkOut

        },
        {
            path:'/shop/shopFooter',
            name:'shopFooter',
            component:shopFooter
        },
        {
            path:'/shopPosition',
            name:'shopPosition',
            component:shopPosition,
            children:[
                {
                    path:'',
                    name:'address-list',
                    component:AddressList
                },
                {
                    path:'addaddress',
                    name:'addaddress',
                    component:Addaddress
                },
                {
                    path:'update_address',
                    name:'update_address',
                    component:update_address
                },
            ]
        },
        {
            path:'/shop/onlinePay',
            name:'onlinePay',
            component:onlinePay
        }
    ]
})
