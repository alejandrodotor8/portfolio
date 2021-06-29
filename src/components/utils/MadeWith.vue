<template>
	<div>
		<img v-for="item in items" :key="item" :src="require(`@/assets/svg/${item}.svg`)" :alt="item" />
	</div>
</template>

<style scoped lang="scss">
	div {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		img {
			width: 1.5rem;
			height: 1.5rem;
			margin: 0 0.25rem;
		}
	}
</style>

<script>
	export default {
		name: 'MadeWith',
		props: ['items'],
	};
</script>
