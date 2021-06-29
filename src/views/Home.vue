<template>
	<div class="home">
		<PHeaderHome />
		<Intro />
		<Scroll />
		<Aboutme />
		<Mywork />
		<Morein />
	</div>
</template>

<style scoped lang="scss">
	.home {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding-top: 0.5rem;
	}
</style>

<script>
	import PHeaderHome from '@/components/PHeaderHome.vue';
	import Intro from '@/components/Intro.vue';
	import Scroll from '@/components/Scroll.vue';
	import Aboutme from '@/components/Aboutme.vue';
	import Mywork from '@/components/Mywork.vue';
	import Morein from '@/components/Morein.vue';

	export default {
		name: 'Home',
		components: {
			PHeaderHome,
			Intro,
			Scroll,
			Aboutme,
			Mywork,
			Morein,
		},
	};
</script>
