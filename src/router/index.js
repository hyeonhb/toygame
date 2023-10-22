// routers
import { createWebHistory, createRouter } from 'vue-router';
// components
import The404Page from '@/views/The404Page.vue';
import TheLobby from '@/views/TheLobby.vue';

const routes = [
	{
		path: '/:catchAll(.*)',
		name: '404Page',
		component: The404Page,
	},
	{
		path: '/',
		name: 'home',
		component: TheLobby,
	},
	{
		path: '/lobby',
		name: 'lobby',
		component: TheLobby,
	}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;