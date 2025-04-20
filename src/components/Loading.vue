<template>
	<div></div>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import { ElLoading } from 'element-plus'

const props = defineProps<{
	visible: boolean
	text?: string
}>()

let loadingInstance: ReturnType<typeof ElLoading.service> | null = null

const showLoading = () => {
	if (loadingInstance) return
	loadingInstance = ElLoading.service({
		lock: true,
		text: props.text,
		background: 'rgba(255, 255, 255, 0.8)'
	})
}

const hideLoading = () => {
	if (loadingInstance) {
		loadingInstance.close()
		loadingInstance = null
	}
}

// 立即監聽 visible 的變化
watch(() => props.visible, (newValue) => {
	if (newValue) {
		showLoading()
	} else {
		hideLoading()
	}
}, { immediate: true })

// 組件卸載時確保關閉 loading
onUnmounted(() => {
	hideLoading()
})
</script>

<style scoped lang="scss"></style>
