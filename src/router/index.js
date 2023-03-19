import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/lobby',
		component: () => import('@/views/TheLobby.vue'),
	}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;