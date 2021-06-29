<template>
	<footer>
		<span class="text-white font-bold text-lg pr-4">Contact</span>
		<a href="mailto:alejandrodotor8@gmail.com" target="_blank">
			<img class="w-5 h-5" src="@/assets/svg/mail.svg" alt="mail" />
		</a>
		<a href="https://wa.me/573008833644?text=👋" target="_blank">
			<img class="w-5 h-5" src="@/assets/svg/wa.svg" alt="mail" />
		</a>
		<a href="https://linktr.ee/alejandrodotor8" target="_blank" class="linktree">@alejandrodotor8</a>
	</footer>
</template>

<style scoped lang="scss">
	footer {
		width: 100%;
		height: 4rem;
		background-color: var(--color-primary-dark);
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		padding: 0 0.75rem;
		span {
			color: white;
			font-weight: 700;
			font-size: 1.125rem;
			padding-right: 1rem;
		}
		img {
			width: 1.25rem;
			height: 1.25rem;
		}
	}
	.linktree {
		font-family: sans-serif;
		color: white;
		font-weight: 300;
		font-size: 1.125rem;
	}
</style>
