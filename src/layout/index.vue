<template>
	<div>2222</div>
	<!-- <div class="layout">
		<aside class="sidebar" :class="{ collapsed: isSidebarCollapsed }">
			<div class="logo">
				<img src="@/assets/logo.png" alt="Logo" />
				<span v-if="!isSidebarCollapsed">工作室後台</span>
			</div>
			<nav class="menu">
				<router-link v-for="route in routes" :key="route.path" :to="route.path" class="menu-item"
					:class="{ active: currentRoute === route.path }">
					<i :class="route.meta?.icon"></i>
					<span v-if="!isSidebarCollapsed">{{ route.meta?.title }}</span>
				</router-link>
			</nav>
		</aside>
		<div class="main-container">
			<header class="header">
				<button class="collapse-btn" @click="toggleSidebar">
					<i class="icon-menu"></i>
				</button>
				<div class="header-right">
					<div class="user-info">
						<img :src="userInfo?.avatar" alt="Avatar" class="avatar" />
						<span class="username">{{ userInfo?.username }}</span>
					</div>
					<button class="logout-btn" @click="handleLogout">登出</button>
				</div>
			</header>
			<main class="main-content">
				<router-view></router-view>
			</main>
		</div>
	</div> -->
</template>
<!-- 
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const isSidebarCollapsed = ref(false)
const userInfo = computed(() => userStore.userInfo)
const currentRoute = computed(() => route.path)

const routes = computed(() =>
	router.options.routes
		.find(route => route.path === '/')
		?.children?.filter(route => route.meta?.title) || []
)

const toggleSidebar = () => {
	isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const handleLogout = async () => {
	userStore.logout()
	await router.push('/login')
}
</script>

<style scoped lang="scss">
.layout {
	display: flex;
	height: 100vh;
}

.sidebar {
	width: $sidebar-width;
	background-color: #001529;
	color: white;
	transition: width 0.3s;

	&.collapsed {
		width: 80px;
	}
}

.logo {
	height: $header-height;
	display: flex;
	align-items: center;
	padding: 0 16px;

	img {
		width: 32px;
		height: 32px;
	}

	span {
		margin-left: 12px;
		font-size: 18px;
		font-weight: 600;
	}
}

.menu {
	padding: 16px 0;

	.menu-item {
		display: flex;
		align-items: center;
		padding: 12px 24px;
		color: rgba(255, 255, 255, 0.65);
		text-decoration: none;

		&:hover,
		&.active {
			color: white;
			background-color: #1890ff;
		}

		i {
			font-size: 18px;
		}

		span {
			margin-left: 12px;
		}
	}
}

.main-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.header {
	height: $header-height;
	background-color: white;
	border-bottom: 1px solid #f0f0f0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 24px;
}

.collapse-btn {
	background: none;
	border: none;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		color: $primary-color;
	}
}

.header-right {
	display: flex;
	align-items: center;
	gap: 16px;
}

.user-info {
	display: flex;
	align-items: center;
	gap: 8px;

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	.username {
		font-weight: 500;
	}
}

.logout-btn {
	padding: 4px 12px;
	border: 1px solid #d9d9d9;
	border-radius: $border-radius-base;
	background: white;
	cursor: pointer;

	&:hover {
		color: $primary-color;
		border-color: $primary-color;
	}
}

.main-content {
	flex: 1;
	padding: $content-padding;
	overflow-y: auto;
}
</style> -->