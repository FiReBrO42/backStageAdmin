import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 樣式
import '@/assets/styles/main.scss'

const app = createApp(App)

// 使用 Pinia
app.use(createPinia())

// 使用 Router
app.use(router)

app.mount('#app')
