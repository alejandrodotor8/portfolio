<template>
	<header class="header">
		<router-link class="header__link" to="/">
			<img src="@/assets/svg/infinito.svg" alt="Logo @alejandrodotor8" />
			<span>ALEJANDRO DOTOR</span>
		</router-link>

		<button>
			<div></div>
			<div></div>
		</button>
	</header>
</template>

<style scoped lang="scss">
	.header {
		width: 80%;
		margin: 1rem auto;
		display: inline-flex;
		justify-content: space-around;
		&__link {
			width: 100%;
			display: inline-flex;
			text-decoration: none;
		}
		img {
			width: 1.5rem;
		}
		span {
			font-family: 'Poppins', sans-serif;
			font-weight: 500;
			font-size: 0.875rem;
			width: 60%;
			padding-left: 0.75rem;
			margin: 0.25rem 0;
		}
	}
	button {
		border: none;
		background: none;
		div {
			width: 1.5rem;
			height: 0.25rem;
			border-radius: 0.125rem;
			background-color: var(--color-secondary);
			margin: 0.25rem 0;
		}
	}
	/* Breakpoint -- SM */
	@media (min-width: 640px) {
		.header {
			width: 60%;
			img {
				width: 2.25rem;
			}
			span {
				font-size: 1rem;
			}
		}
	}
</style>
