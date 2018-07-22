import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Admin from '../components/Admin'
import Step from '../components/Step'
import Store from '../components/Store'
import Orders from '../components/Orders'
import test from '../components/test'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/login',  //重定向
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/step',
            name: 'step',
            component: Step
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },

        {
            path: '/store',
            name: 'store',
            component:Store
        },
        {
            path: '/orders',
            name: 'orders',
            component:Orders
        },

    ]
})
