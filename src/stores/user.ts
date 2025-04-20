import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
	const token = ref<string>('')
	const userInfo = ref<{
		id: number
		username: string
		avatar: string
		role: string
	} | null>(null)

	function setToken(newToken: string) {
		token.value = newToken
		localStorage.setItem('token', newToken)
	}

	function setUserInfo(info: typeof userInfo.value) {
		userInfo.value = info
	}

	function logout() {
		token.value = ''
		userInfo.value = null
		localStorage.removeItem('token')
	}

	return {
		token,
		userInfo,
		setToken,
		setUserInfo,
		logout
	}
}) 