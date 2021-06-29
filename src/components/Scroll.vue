<template>
	<div class="scroll">
		<span>SCROLL</span>
		<div class="arrow">
			<img src="@/assets/svg/scroll.svg" alt="Logo @alejandrodotor8" />
			<img src="@/assets/svg/scroll.svg" alt="Logo @alejandrodotor8" />
			<img src="@/assets/svg/scroll.svg" alt="Logo @alejandrodotor8" />
			<img src="@/assets/svg/scroll.svg" alt="Logo @alejandrodotor8" />
		</div>
	</div>
</template>

<style scoped lang="scss">
	.scroll {
		width: 80%;
		margin: 1rem auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		span {
			width: 100%;
			text-align: center;
			font-weight: 300;
			margin-bottom: 2.5rem;
			animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}
	}
	.arrow {
		width: 0.75rem;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		img {
			width: 0.75rem;
			transform: rotate(90deg);
			padding: 0.25rem 0;
		}
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
