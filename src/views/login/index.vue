<template>
	<div class="login-container">
		<!-- 添加 Loading 組件 -->
		<Loading :visible="isLoading" :text="t('common.loading')" />

		<div class="login-content">
			<!-- 左側圖片區域 -->
			<div class="login-image">
				<div class="image-placeholder">
					<i class="far fa-image"></i>
				</div>
			</div>

			<!-- 右側登入表單 -->
			<div class="login-box">
				<!-- 添加語言切換器 -->
				<div class="language-switcher">
					<LanguageSwitch />
				</div>

				<div class="logo-section">
					<h1 class="brand">{{ t('login.title') }}</h1>
					<p class="subtitle">{{ t('login.subtitle') }}</p>
				</div>

				<div class="social-login">
					<button class="social-btn google">
						<i class="fab fa-google"></i>
					</button>
					<button class="social-btn facebook">
						<i class="fab fa-facebook-f"></i>
					</button>
				</div>

				<form @submit.prevent="handleSubmit" class="login-form">
					<div class="form-item">
						<label for="email">{{ t('login.email') }}</label>
						<input type="email" id="email" v-model="formData.email" :placeholder="t('login.emailPlaceholder')"
							required />
					</div>
					<div class="form-item">
						<label for="password">{{ t('login.password') }}</label>
						<div class="password-input">
							<input :type="showPassword ? 'text' : 'password'" id="password" v-model="formData.password"
								:placeholder="t('login.passwordPlaceholder')" required />
							<button type="button" class="toggle-password" @click="togglePassword">
								<i :class="showPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
							</button>
						</div>
						<div class="forgot-password">
							<a href="#" @click.prevent="handleForgotPassword">{{ t('login.forgotPassword') }}</a>
						</div>
					</div>
					<button type="submit" class="submit-btn" :disabled="isLoading">
						{{ isLoading ? t('login.signingIn') : t('login.signIn') }}
					</button>
				</form>

				<div class="register-link">
					{{ t('login.newUser') }} <a href="#" @click.prevent="handleRegister">{{ t('login.register') }}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useI18n } from 'vue-i18n'
import LanguageSwitch from '@/components/LanguageSwitch.vue'
import Loading from '@/components/Loading.vue'

const router = useRouter()
const userStore = useUserStore()
const { t } = useI18n()
const isLoading = ref(false)
const showPassword = ref(false)

const formData = reactive({
	email: '',
	password: ''
})

const togglePassword = () => {
	showPassword.value = !showPassword.value
}

const handleSubmit = async () => {
	try {
		isLoading.value = true
		// TODO: 實現實際的登入邏輯
		// 模擬登入成功
		const mockToken = 'mock-token'
		const mockUserInfo = {
			id: 1,
			username: formData.email.split('@')[0],
			avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
			role: 'admin'
		}

		userStore.setToken(mockToken)
		userStore.setUserInfo(mockUserInfo)

		await new Promise(resolve => setTimeout(resolve, 1500))

		await router.push('/')
	} catch (error) {
		console.error(
			'🚀 [Login/handleSubmit]',
			'登入失敗',
			{
				email: formData.email,
				errorMessage: error instanceof Error ? error.message : '未知錯誤',
				timestamp: new Date().toISOString()
			}
		)
	} finally {
		await new Promise(resolve => setTimeout(resolve, 1500))
		isLoading.value = false
	}
}

const handleForgotPassword = () => {
	// TODO: 實現忘記密碼功能
	console.warn(
		'🚀 [Login/handleForgotPassword]',
		'功能尚未實現',
		{
			feature: '忘記密碼',
			status: 'pending',
			timestamp: new Date().toISOString()
		}
	)
}

const handleRegister = () => {
	// TODO: 實現註冊功能
	console.warn(
		'🚀 [Login/handleRegister]',
		'功能尚未實現',
		{
			feature: '註冊',
			status: 'pending',
			timestamp: new Date().toISOString()
		}
	)
}
</script>

<style scoped lang="scss">
.login-container {
	min-height: 100vh;
	background-color: #f5f6ff;
	display: flex;
	align-items: stretch;
	justify-content: stretch;
	padding: 0;
}

.login-content {
	display: flex;
	width: 100%;
	background: white;
	overflow: hidden;

	@media (max-width: $screen-md) {
		flex-direction: column;
	}
}

.login-image {
	flex: 1.5;
	background-color: #f5f6ff;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: $screen-md) {
		flex: none;
		height: 300px;
	}

	@media (max-width: $screen-sm) {
		height: 200px;
	}

	.image-placeholder {
		width: 100%;
		height: 100%;
		background-color: rgba($primary-color, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;

		i {
			font-size: 48px;
			color: $primary-color;
			opacity: 0.5;
		}
	}
}

.login-box {
	flex: 1;
	padding: 40px;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	@media (max-width: $screen-md) {
		width: 100%;
		padding: 32px;
	}

	@media (max-width: $screen-sm) {
		padding: 24px;
	}
}

.logo-section {
	text-align: center;
	margin-bottom: 32px;

	.brand {
		font-size: 32px;
		font-weight: 700;
		color: $primary-color;
		margin: 0;
		letter-spacing: 1px;

		@media (max-width: $screen-sm) {
			font-size: 28px;
		}
	}

	.subtitle {
		font-size: $font-size-sm;
		color: #9ca3af;
		letter-spacing: 4px;
		margin: 4px 0 0;

		@media (max-width: $screen-sm) {
			letter-spacing: 3px;
		}
	}
}

.social-login {
	display: flex;
	justify-content: center;
	gap: 16px;
	margin-bottom: 32px;

	@media (max-width: $screen-sm) {
		margin-bottom: 24px;
	}

	.social-btn {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: 1px solid #e5e7eb;
		background: white;
		color: $text-color;
		font-size: 20px;
		cursor: pointer;
		transition: all 0.3s ease;

		@media (max-width: $screen-sm) {
			width: 40px;
			height: 40px;
			font-size: 18px;
		}

		&:hover {
			background: #f3f4f6;
		}

		&.google:hover {
			color: #ea4335;
			border-color: #ea4335;
		}

		&.facebook:hover {
			color: #1877f2;
			border-color: #1877f2;
		}
	}
}

.login-form {
	.form-item {
		margin-bottom: 24px;

		@media (max-width: $screen-sm) {
			margin-bottom: 20px;
		}

		label {
			display: block;
			margin-bottom: 8px;
			color: $text-color;
			font-size: $font-size-base;
		}

		input {
			width: 100%;
			padding: 12px 16px;
			border: 1px solid #e5e7eb;
			border-radius: $border-radius-base;
			font-size: $font-size-base;
			transition: all 0.3s;

			@media (max-width: $screen-sm) {
				padding: 10px 14px;
			}

			&:focus {
				border-color: $primary-color;
				outline: none;
				box-shadow: 0 0 0 3px rgba($primary-color, 0.1);
			}

			&::placeholder {
				color: #9ca3af;
			}
		}
	}
}

.password-input {
	position: relative;

	.toggle-password {
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		color: #9ca3af;
		cursor: pointer;
		padding: 0;
		font-size: $font-size-base;

		@media (max-width: $screen-sm) {
			right: 14px;
		}

		&:hover {
			color: $primary-color;
		}
	}
}

.forgot-password {
	text-align: right;
	margin-top: 8px;

	a {
		color: $primary-color;
		font-size: $font-size-sm;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
}

.submit-btn {
	width: 100%;
	padding: 12px;
	background-color: $primary-color;
	border: none;
	border-radius: $border-radius-base;
	color: white;
	font-size: $font-size-lg;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.3s;

	@media (max-width: $screen-sm) {
		padding: 10px;
		font-size: $font-size-base;
	}

	&:hover {
		filter: brightness(0.9);
	}

	&:disabled {
		filter: brightness(1.2);
		cursor: not-allowed;
	}
}

.register-link {
	text-align: center;
	margin-top: 24px;
	font-size: $font-size-base;
	color: $text-color;

	@media (max-width: $screen-sm) {
		margin-top: 20px;
		font-size: $font-size-sm;
	}

	a {
		color: $primary-color;
		text-decoration: none;
		font-weight: 500;

		&:hover {
			text-decoration: underline;
		}
	}
}

// 更新橫向模式支援
@media (max-height: 600px) and (orientation: landscape) {
	.login-content {
		min-height: 100vh;
	}

	.login-image {
		flex: 1.5;
	}

	.login-box {
		overflow-y: auto;
	}
}

// 添加語言切換器樣式
.language-switcher {
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 10;

	:deep(.language-switch) {
		.language-switch__current {
			color: $text-color;

			&:hover {
				background-color: rgba($primary-color, 0.1);
			}
		}
	}
}
</style>