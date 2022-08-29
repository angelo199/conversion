import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import AboutViewVue from '../views/AboutView.vue'; 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: LoginView },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutViewVue }
  ]
})

export default router
