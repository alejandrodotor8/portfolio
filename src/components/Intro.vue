<template>
	<div class="intro">
		<div class="intro__image">
			<span>Hi, my name is <b>Alejandro</b></span>
			<img src="@/assets/pic1x.png" alt="Alejandro" />
		</div>
		<p>
			I’m a multimedia engineer and web developer from Bogotá, Colombia &#127464;&#127476;
		</p>
		<a href="https://wa.me/573008833644?text=👋" target="_blank" class="animate__animated animate__bounceInUp">
			Reach out to me
		</a>
	</div>
</template>

<style scoped lang="scss">
	.intro {
		width: 80%;
		margin: 1rem auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		p {
			width: 90%;
			margin: 4rem 0;
			text-align: center;
		}
		a {
			width: 10rem;
			height: 2.5rem;
			margin: 2.5rem 0;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: 'Poppins', sans-serif;
			font-weight: 500;
			font-size: 0.875rem;
			border: 2px solid var(--color-secondary);
			border-radius: 0.375rem;
			box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
			letter-spacing: -0.025em;
			transform: scale(1);
			transition: transform 500ms ease-in-out;
			&:hover {
				scale: (1.05);
			}
		}
	}
	.intro__image {
		width: 100%;
		display: flex;
		position: relative;
		justify-content: end;
		span {
			width: 10rem;
			font-size: 1.4rem;
			position: absolute;
			bottom: 2.5rem;
			left: 0;
		}
	}
	/* Breakpoint -- XS*/
	@media (min-width: 350px) {
		.intro__info h2 {
			width: 8rem;
			font-size: 1rem;
		}
	}
	/* Breakpoint -- SM */
	@media (min-width: 640px) {
		.intro {
			width: 60%;
		}
		.intro__info h2 {
			font-size: 1.125rem;
		}
	}
</style>
