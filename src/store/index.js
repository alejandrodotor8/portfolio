import Vue from 'vue';
import Vuex from 'vuex';
import projects from '@/assets/projects.json';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		projects,
	},
	mutations: {},
	actions: {},
	modules: {},
	getters: {
		projects: (state) => state.projects,
	},
});
