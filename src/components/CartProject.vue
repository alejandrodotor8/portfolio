<template>
	<router-link :to="{ name: 'Project', params: { slug: project.slug } }" style="text-decoration: none;">
		<div class="project">
			<div class="img">
				<img :src="require(`@/assets/projects/${project.img}/${project.img}_cart.jpg`)" :alt="project.alt" />
			</div>
			<div class="info">
				<h4>
					{{ project.name }}
				</h4>
				<made-with :items="project.made_with" />
			</div>
		</div>
	</router-link>
</template>

<style scoped lang="scss">
	.project {
		scroll-snap-align: center;
		width: 14rem;
		height: 18rem;
		border-radius: 0.375rem;
		background-size: cover;
		margin: 0.75rem 2rem 3.5rem 2rem;
		display: inline-block;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
	}
	.img {
		width: 100%;
		height: 70%;
		img {
			width: 100%;
			height: 100%;
			border-top-left-radius: 0.25rem;
			border-top-right-radius: 0.25rem;
			object-fit: cover;
		}
	}
	.info {
		width: 100%;
		height: 30%;
		background-color: white;
		border-bottom-right-radius: 0.25rem;
		border-bottom-left-radius: 0.25rem;
		border-top-width: 2px;
		border-color: var(--color-primary-dark);
		padding: 0.5rem 1.5rem;
		h4 {
			font-family: 'Poppins', sans-serif;
			font-weight: 500;
			font-size: 1rem;
			margin-bottom: 0.5rem;
		}
	}
</style>

<script>
	import MadeWith from '@/components/utils/MadeWith';
	export default {
		name: 'CartProject',
		props: ['project'],
		components: {
			MadeWith,
		},
	};
</script>
