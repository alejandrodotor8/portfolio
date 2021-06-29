<template>
	<div class="container">
		<span>MORE IN</span>
		<div class="social">
			<a href="https://www.github.com/alejandrodotor8" rel="noreferrer" target="_blank">
				<img src="@/assets/svg/github.svg" alt="GitHub" />
			</a>
			<a href="https://www.behance.net/alejandrodotor8" rel="noreferrer" target="_blank">
				<img src="@/assets/svg/behance.svg" alt="Behance" />
			</a>
			<a href="https://www.linkedin.com/in/alejandrodotor8/" rel="noreferrer" target="_blank">
				<img src="@/assets/svg/linkedin.svg" alt="Linkedin" />
			</a>
			<a href="https://www.instagram.com/alejandrodotor8/" rel="noreferrer" target="_blank">
				<img src="@/assets/svg/instagram.svg" alt="Instagram" />
			</a>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.container {
		width: 80%;
		margin: 2rem auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		span {
			width: 100%;
			text-align: center;
			font-weight: 300;
			margin-bottom: 1rem;
			animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
	.social {
		width: 9rem;
		height: 2.5rem;
		background-color: white;
		border-radius: 0.25rem;
		-webkit-box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.15);
		box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 0;
		img {
			width: 1.25rem;
			height: 1.25rem;
			margin: 0 0.25rem;
		}
	}
</style>
