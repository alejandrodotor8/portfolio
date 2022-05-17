<template>
	<header>
		<router-link class="link" to="/">
			<img :src="require('@/assets/svg/back.svg')" alt="go back" />
		</router-link>
		<h1>{{ project.name }}</h1>
		<div class="social flex flex-row">
			<a v-if="project.repo" :href="project.repo" rel="noreferrer" target="_blank">
				<img :src="require('@/assets/svg/github.svg')" alt="github" />
			</a>
			<a v-if="project.behance" :href="project.behance" rel="noreferrer" target="_blank">
				<img :src="require('@/assets/svg/behance.svg')" alt="behance" />
			</a>
		</div>
	</header>
</template>

<style scoped lang="scss">
	header {
		width: 80%;
		margin: 1rem auto;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}
	.link {
		width: 1.75rem;
		height: 1.75rem;
	}
	h1 {
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		padding-left: 3rem;
		font-size: 1.2rem;
	}
	.social {
		display: flex;
		flex-direction: row;
		a {
			padding-left: 0.75rem;
			img {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
	}
	/* Breakpoint -- XS */
	@media (min-width: 350px) {
		h1 {
			font-size: 1.2rem;
			padding-left: 1.5rem;
		}
	}
</style>
<script>
	export default {
		name: 'PrHeader',
		props: ['project'],
	};
</script>
