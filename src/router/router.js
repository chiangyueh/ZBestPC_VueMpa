import Router from 'vue-router'
import Vue from 'vue'
import Home from '../Home.vue'
Vue.use(Router)

export default new Router({
    routes : [
        {
            path : '/',
            redirect : '/home'
        },
        {
            path : '/home',
            component : ()=>import("../Home.vue")
        },
        {
            path : '/login',
            component : ()=>import("../Login.vue")
        }
    ]
})