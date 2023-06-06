import { defineStore } from 'pinia'
import cookie from 'js-cookie'

export const useAuthStore = defineStore('auth', {
    state: () => ({ user: null, isLoggedIn: false, token: '' }),
    getters: {
        getUser: (state) => state.user,
        getIsLoggedIn: (state) => state.isLoggedIn,
    },
    actions: {
        async register({ name, surname, email, password }: { name: string; surname: string; email: string; password: string }) {
            return $fetch('http://localhost:3000/auth/register', {
                method: 'post',
                body: { name, surname, email, password },
            })
        },
        async login({ email, password }: { email: string; password: string }) {
            const response: { token: string } = await $fetch('http://localhost:3000/auth/login', {
                method: 'post',
                body: { email, password },
            })
            this.token = `Bearer ${response.token}`
            cookie.set('token', `Bearer ${response.token}`)
        },
        async getMe() {
            const token = cookie.get('token')

            if (!token) return

            this.user = await $fetch('http://localhost:3000/my', {
                headers: {
                    Authorization: token,
                },
            })
        },
    },
})
