<template>
	<div class="top-nav">
		<div class="top-nav__left">
			<el-button type="text" @click="toggleSidebar">
				<i class="fas fa-bars"></i>
			</el-button>
		</div>
		<div class="top-nav__right">
			<LanguageSwitch />
			<el-dropdown trigger="click">
				<span class="user-info">
					<el-avatar :size="32" src="https://avatars.githubusercontent.com/u/1234567?v=4" />
					<span class="username">Admin</span>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>個人資料</el-dropdown-item>
						<el-dropdown-item divided @click="handleLogout">登出</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import LanguageSwitch from './LanguageSwitch.vue'

const router = useRouter()

const toggleSidebar = () => {
	// TODO: 實現側邊欄切換功能
}

const handleLogout = () => {
	// TODO: 實現登出功能
	router.push('/login')
}
</script>

<style lang="scss" scoped>
.top-nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	height: 60px;
	background-color: #fff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

	&__left {
		.el-button {
			font-size: 20px;
			padding: 0;

			&:hover {
				color: var(--el-color-primary);
			}
		}
	}

	&__right {
		display: flex;
		align-items: center;
		gap: 20px;

		.user-info {
			display: flex;
			align-items: center;
			gap: 8px;
			cursor: pointer;
			padding: 5px 10px;
			border-radius: 4px;
			transition: background-color 0.3s;

			&:hover {
				background-color: rgba(0, 0, 0, 0.05);
			}

			.username {
				font-size: 14px;
				color: #333;
			}
		}
	}
}
</style>