import { createI18n } from 'vue-i18n'
import enUS from '../locales/en-US'
import zhTW from '../locales/zh-TW'

// 從 localStorage 獲取已保存的語言設置
const getSavedLanguage = () => {
	const savedLanguage = localStorage.getItem('language')
	if (savedLanguage) {
		return savedLanguage
	}
	// 如果沒有保存的語言設置，則檢測瀏覽器語言
	const language = navigator.language
	if (language.includes('zh')) {
		return 'zh-TW'
	}
	return 'en-US'
}

const i18n = createI18n({
	legacy: false, // 使用 Composition API 模式
	locale: getSavedLanguage(), // 使用保存的語言或瀏覽器語言
	fallbackLocale: 'en-US', // 若當前語言無翻譯則使用英文
	messages: {
		'en-US': enUS,
		'zh-TW': zhTW
	},
	missingWarn: false, // 關閉缺少翻譯的警告
	fallbackWarn: false // 關閉回退翻譯的警告
})

export default i18n 