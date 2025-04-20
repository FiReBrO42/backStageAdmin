<template>
	<div class="language-switch">
		<el-dropdown trigger="click" @command="handleLanguageChange">
			<span class="language-switch__current">
				<i class="fas fa-globe"></i>
				{{ currentLanguage }}
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item v-for="lang in languages" :key="lang.code" :command="lang.code"
						:class="{ active: currentLanguage === lang.name }">
						{{ lang.name }}
					</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'

const { locale } = useI18n()

const languages = [
	{ code: 'zh-TW', name: '繁體中文' },
	{ code: 'en-US', name: 'English' }
]

const currentLanguage = computed(() => {
	return languages.find(lang => lang.code === locale.value)?.name || '繁體中文'
})

const handleLanguageChange = (langCode: string) => {
	locale.value = langCode
	localStorage.setItem('language', langCode)
}
</script>

<style lang="scss" scoped>
.language-switch {
	&__current {
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		padding: 5px 10px;
		border-radius: 4px;
		transition: background-color 0.3s;
		color: inherit;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}

		i {
			font-size: 16px;
		}
	}
}

:deep(.el-dropdown-menu__item) {
	&.active {
		color: var(--el-color-primary);
		background-color: var(--el-color-primary-light-9);
	}
}
</style>