<template>
	<div class="container">
		<PrHeader :project="project" />
		<div class="container__bg">
			<img :src="require(`@/assets/projects/${project.img}/${project.img}_mobile.jpg`)" :alt="project.name" />
		</div>
		<p class="container__desc">{{ project.description_1 }}</p>
		<div class="container__img">
			<img :src="require(`@/assets/projects/${project.img}/${project.img}.gif`)" alt="app working" />
		</div>
		<PrTryme :project="project" />
		<p class="container__desc">{{ project.description_2 }}</p>
		<div class="scroll">
			<img
				class="img"
				v-for="item in 3"
				:key="item"
				:src="require(`@/assets/projects/${project.img}/${project.img}_extra${item}.jpg`)"
				alt=""
			/>
		</div>
		<div class="made-with">
			<span>MADE WITH</span>
			<made-with :items="project.made_with" />
		</div>
	</div>
</template>

<style scoped lang="scss">
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 0.5rem;
	}
	.container__bg {
		width: 100%;
		height: 16rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.container__desc {
		width: 80%;
		font-size: 0.875rem;
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}
	.container__img {
		width: 18rem;
		height: 24rem;
		border-radius: 0.75rem;
		-webkit-box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.15);
		box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.15);
		margin-bottom: 1.5rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 0.75rem;
		}
	}
	.scroll {
		width: 100%;
		display: flex;
		flex-direction: row;
		overflow-x: auto;
		white-space: nowrap;
		overscroll-behavior-x: contain;
		scroll-snap-type: x proximity;
	}
	.img {
		scroll-snap-align: center;
		object-fit: contain;
		padding: 0 1.5rem;
	}
	.made-with {
		width: 7rem;
		height: 3.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 5rem;
		span {
			margin-bottom: 0.5rem;
		}
	}
</style>

<script>
	import PrHeader from '@/components/project/PrHeader';
	import MadeWith from '@/components/utils/MadeWith';
	import PrTryme from '@/components/project/PrTryme';

	export default {
		name: 'Project',
		components: {
			PrHeader,
			MadeWith,
			PrTryme,
		},
		props: {
			slug: {
				type: String,
				required: true,
			},
		},
		computed: {
			project() {
				return this.$store.getters.projects.find((project) => project.slug === this.slug);
			},
		},
	};
</script>
