import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/profile', component: Profile },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes
})