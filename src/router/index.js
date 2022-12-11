import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/signup',
		component: () => import('@/views/RegisterName.vue'),
	}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;