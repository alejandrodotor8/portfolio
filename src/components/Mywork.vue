<template>
	<div class="container">
		<h3>My work</h3>
		<p>
			These are some of my personal projects, some are just design, others design and develop
		</p>
		<div class="projects">
			<CartProject v-for="item in $store.getters.projects" :key="item.id" :project="item" />
		</div>
	</div>
</template>

<script>
	import CartProject from '@/components/CartProject.vue';

	export default {
		name: 'Mywork',
		components: {
			CartProject,
		},
	};
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		h3 {
			width: 75%;
			margin: 0 auto;
			font-weight: 700;
			padding-right: 2rem;
			font-size: 1.125rem;
			text-align: right;
		}
		p {
			width: 75%;
			margin: 0 auto;
			padding: 0.5rem;
			font-size: 0.875rem;
		}
	}
	.projects {
		overflow-x: auto;
		white-space: nowrap;
		overscroll-behavior-x: contain;
		scroll-snap-type: x proximity;
		padding: 0 2rem;
	}
	/* Breakpoint -- SM */
	@media (min-width: 640px) {
		.container {
			h3,
			p {
				width: 60%;
			}
		}
	}
</style>
