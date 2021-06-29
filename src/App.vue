<template>
	<div id="app">
		<router-view />
		<PFooter />
	</div>
</template>

<script>
	import PFooter from '@/components/PFooter.vue';
	export default {
		name: 'App',
		components: {
			PFooter,
		},
	};
</script>

<style scoped lang="scss">
	#app {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding-top: 0.5rem;
	}
</style>
