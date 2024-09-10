export default [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: {
            title: '主页',
            nav:true
        }
    },
    {
        path: '/shop',
        name: 'shop',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
        meta:{
            title:'商品',
            nav:true
        }
    },
    {
        path: '/blog',
        name: 'blog',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
        meta:{
            title:'博客',
            nav:true
        }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
        meta:{
            title:'联系我们',
            nav:true
        }
    },
    // 重定向 在项目跑起来的时候 访问“/”的时候 定位在主页
    {
        path: '/',
        redirect: '/shop'
    }
]