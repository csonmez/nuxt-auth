<script setup lang="ts">
import { useAuthStore } from '~/store/useAuthStore'

const { register, login, getMe } = useAuthStore()
await useAsyncData('users', () => getMe())

const user = useUser()

const handleRegister = async () => {
    try {
        await register({ name: 'cem', surname: 'sönmez', email: 'cem@cem.com', password: 'Cem123..' })
    } catch (err) {
        console.log('err', err)
    }
}

const handleLogin = async () => {
    try {
        await login({ email: 'cem@cem.com', password: 'Cem123..' })
        await getMe()
    } catch (err) {
        console.log('err', err)
    }
}
</script>

<template>
    <div>
        <button @click="handleRegister">Register</button>
        <button @click="handleLogin">Login</button>
        <span>{{ user && user.email }}</span>
    </div>
</template>
