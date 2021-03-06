import Vue from 'vue'
import Router from 'vue-router'
//import App from '/components/App'
//import zoo from '/components/butterflyZoo'
//import blog from '/components/butterflyBlog'
//import faq from '/components/butterflyFaq'

Vue.use(Router)


export default new Router({
   routes: [
     {
       path: '/',
       name: 'Home',
       component: buterfly-home
     },
     {
       path: '/butterfly-zoo',
       name: 'Butterfly Museum',
       component: buterfly-zoo
     },
     {
       path: '/butterfly-blog',
       name: 'Butterfly Blog',
       component: buterfly-blog
     },
     {
       path: '/butterfly-faq',
       name: 'Butterfly FAQ',
       component: buterfly-faq
     }
   ]
})
