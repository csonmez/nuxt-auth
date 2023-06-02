import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({ user: null, isLoggedIn: false }),
    getters: {
        getUser: (state) => state.user,
        getIsLoggedIn: (state) => state.isLoggedIn,
    },
})
