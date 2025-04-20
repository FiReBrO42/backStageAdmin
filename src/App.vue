<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import '@/assets/styles/main.scss'

const userStore = useUserStore()
const router = useRouter()

onMounted(() => {
  const token = localStorage.getItem('token')
  if (token) {
    userStore.setToken(token)
  } else if (router.currentRoute.value.path !== '/login') {
    router.push('/login')
  }
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
