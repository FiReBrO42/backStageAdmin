import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Layout',
		component: () => import('@/layout/index.vue'),
		// redirect: '/dashboard',
		// children: [
		// 	{
		// 		path: 'dashboard',
		// 		name: 'Dashboard',
		// 		component: () => import('@/views/dashboard/index.vue'),
		// 		meta: { title: '儀表板', icon: 'dashboard' }
		// 	},
		// 	{
		// 		path: 'products',
		// 		name: 'Products',
		// 		component: () => import('@/views/products/index.vue'),
		// 		meta: { title: '商品管理', icon: 'shopping' }
		// 	},
		// 	{
		// 		path: 'orders',
		// 		name: 'Orders',
		// 		component: () => import('@/views/orders/index.vue'),
		// 		meta: { title: '訂單管理', icon: 'order' }
		// 	},
		// 	{
		// 		path: 'analytics',
		// 		name: 'Analytics',
		// 		component: () => import('@/views/analytics/index.vue'),
		// 		meta: { title: '數據分析', icon: 'chart' }
		// 	}
		// ]
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/index.vue'),
		meta: { title: '登入' }
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

// 全局前置守衛
// router.beforeEach((to, from, next) => {
// 	// 獲取 token
// 	const token = localStorage.getItem('token')

// 	// 如果前往的不是登入頁面且沒有 token，則重定向到登入頁面
// 	if (to.path !== '/login' && !token) {
// 		next('/login')
// 	} else {
// 		next()
// 	}
// })

export default router 