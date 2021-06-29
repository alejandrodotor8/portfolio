<template>
	<a :href="project.link" target="_blank" rel="noreferrer">
		<span class="click">CLICK ME</span>
		<span class="try">TO TRY IT</span>
		<img src="@/assets/svg/touch.svg" alt="touch me" />
	</a>
</template>

<style scoped lang="scss">
	a {
		width: 7rem;
		height: 3.5rem;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 1.75rem;
		border-radius: 5px;
		img {
			width: 3rem;
			height: 3rem;
			position: absolute;
			top: 2.5rem;
			left: 5rem;
		}
	}
	.click {
		font-weight: 700;
	}
	.try {
		font-size: 0.75rem;
	}
</style>

<script>
	export default {
		name: 'PrTryme',
		props: ['project'],
	};
</script>
