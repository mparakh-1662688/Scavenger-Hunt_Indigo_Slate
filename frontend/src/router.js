import Vue from 'vue'
import Router from 'vue-router'
import ItemView from './views/item.vue'
import ListView from './views/list.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'list',
            component: ListView
        },
        {
            path: '/item1',
            name: 'item1',
            props: true,
            component: ItemView
        }
    ]
})

