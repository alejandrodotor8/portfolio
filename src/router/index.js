import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Error from '@/components/Error.vue';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/MyWork/:slug',
		name: 'Project',
		props: true,
		component: () => import(/* webpackChunkName: "Project" */ '../views/Project.vue'),
	},
	{
		path: '*',
		name: 'Error',
		component: Error,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
