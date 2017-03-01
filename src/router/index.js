import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'


import Home from '@/views/home/index.vue'
import About from '@/views/about/index.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

//  配置前端请求路径
const configPath = '/static/mock/'
window.configPath = configPath

//
Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
}
Vue.http.options.emulateJSON = true

const router = new VueRouter({
    mode: 'history',   //URL 不会带#
    base: __dirname,
    //设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。
    linkActiveClass: 'router-link-active',
    routes: [
        { path: '/', redirect: '/home' },   //默认页面
        { path: '/home', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About }
    ]
})

// 页面跳转前的钩子函数
// 注册路由切换前
router.beforeEach((to, from, next) => {
    //console.log(to, from, next)
    console.log(to.path)
    next()
})

//  注册路由切换后
router.afterEach(route => {
    //console.log(route)
})

export default router
