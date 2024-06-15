import { createRouter, createWebHistory } from 'vue-router';
import BodyComponent from '@/components/Products/BodyComponent.vue';
import HomeComponent from '@/components/Home/HomeComponent.vue'
import AboutComponent from '@/components/Home/AboutComponent.vue';
import Contact from '@/components/Contact/Contact.vue';
import WishlistComponent from '@/components/Orders/WishlistComponent.vue';
import CartComponent from '@/components/Orders/CartComponent.vue';
import LoginComponent from '@/components/Login/LoginComponent.vue';
import { requireAuth } from '../Guards/routerGuards'; // Adjust the path as per your project structure

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/body',
    name: 'body',
    component: BodyComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: WishlistComponent,
    meta: { requiresAuth: true }, 
    beforeEnter: requireAuth, 
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartComponent,
    meta: { requiresAuth: true }, 
    beforeEnter: requireAuth, 
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/', 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
