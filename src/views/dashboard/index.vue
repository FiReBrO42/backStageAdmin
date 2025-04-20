<template>
	<div class="dashboard">
		<h1 class="page-title">儀表板</h1>
		<div class="stats-grid">
			<div class="stat-card">
				<h3>今日訂單</h3>
				<div class="stat-value">{{ stats.todayOrders }}</div>
				<div class="stat-trend" :class="{ up: stats.orderTrend > 0, down: stats.orderTrend < 0 }">
					{{ stats.orderTrend > 0 ? '+' : '' }}{{ stats.orderTrend }}%
				</div>
			</div>
			<div class="stat-card">
				<h3>本月營收</h3>
				<div class="stat-value">$ {{ formatNumber(stats.monthlyRevenue) }}</div>
				<div class="stat-trend" :class="{ up: stats.revenueTrend > 0, down: stats.revenueTrend < 0 }">
					{{ stats.revenueTrend > 0 ? '+' : '' }}{{ stats.revenueTrend }}%
				</div>
			</div>
			<div class="stat-card">
				<h3>活躍商品</h3>
				<div class="stat-value">{{ stats.activeProducts }}</div>
				<div class="stat-trend">總計</div>
			</div>
			<div class="stat-card">
				<h3>待處理訂單</h3>
				<div class="stat-value">{{ stats.pendingOrders }}</div>
				<div class="stat-trend">待處理</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 模擬數據
const stats = reactive({
	todayOrders: 25,
	orderTrend: 12.5,
	monthlyRevenue: 158900,
	revenueTrend: -2.3,
	activeProducts: 48,
	pendingOrders: 5
})

const formatNumber = (num: number) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
</script>

<style scoped lang="scss">
.dashboard {
	padding: 24px;
}

.page-title {
	margin-bottom: 24px;
	font-size: 24px;
	font-weight: 500;
	color: $text-color;
}

.stats-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 24px;
}

.stat-card {
	padding: 24px;
	background: white;
	border-radius: $border-radius-base;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

	h3 {
		margin: 0 0 16px;
		color: rgba($text-color, 0.85);
		font-size: $font-size-base;
		font-weight: normal;
	}

	.stat-value {
		margin-bottom: 8px;
		font-size: 30px;
		font-weight: 500;
		color: $text-color;
	}

	.stat-trend {
		font-size: $font-size-sm;
		color: rgba($text-color, 0.65);

		&.up {
			color: $success-color;
		}

		&.down {
			color: $error-color;
		}
	}
}
</style>