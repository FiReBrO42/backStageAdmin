import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from './i18n'

import App from './App.vue'
import router from './router'

// 樣式
import '@/assets/styles/main.scss'

const app = createApp(App)

// 使用 Element Plus
app.use(ElementPlus)

// 使用 Pinia
app.use(createPinia())

// 使用 Router
app.use(router)

app.use(i18n)

app.mount('#app')
