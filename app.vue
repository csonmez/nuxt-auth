<script setup lang="ts">
import { useAuthStore } from '~/store/useAuthStore'

const { register, login, getMe } = useAuthStore()
await useAsyncData('users', () => getMe())

const user = useUser()

const register2 = async () => {
    try {
        await register({ name: 'cem', surname: 'sönmez', email: 'cem@cem.com', password: 'Cem123..' })
        console.log('register')
    } catch (err) {
        console.log('err', err)
    }
}

const login2 = async () => {
    try {
        await login({ email: 'cem@cem.com', password: 'Cem123..' })
        console.log('login')
        await getMe()
        console.log('user2', user)
        // user = authStore.user
        // users = store.user.value
        // console.log('authStore.user', authStore.user.email)
        // console.log('store.user', store.user.value.email)
    } catch (err) {
        console.log('err', err)
    }
}

const update = () => {
    user.email.value = 'deneme@denene.com'
}
</script>

<template>
    <div>
        <button @click="register2">Register</button>
        <button @click="login2">Login</button>
        <span>{{ user && user.email }}</span>
        <button @click="update">Update email</button>
    </div>
</template>
