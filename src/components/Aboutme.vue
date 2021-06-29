<template>
	<div class="container">
		<h3>About me</h3>
		<p>
			Currently working as a developer at Techedge Colombia, not only do I like to develop web applications, I also
			enjoy designing and creating user-friendly experiences, in my spare time I continue learning and playing sports.
		</p>
		<div class="images">
			<div class="svg">
				<img src="@/assets/svg/js.svg" alt="javaScript" />
			</div>
			<div class="svg">
				<img src="@/assets/svg/bike.svg" alt="bike" />
			</div>
			<div class="svg">
				<img src="@/assets/svg/support.svg" alt="support" />
			</div>
			<div class="svg">
				<img src="@/assets/svg/tenis.svg" alt="tenis" />
			</div>
			<div class="svg">
				<img src="@/assets/svg/reactjs.svg" alt="reactjs" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.container {
		width: 80%;
		margin: 2rem auto;
		h3 {
			width: 100%;
			font-weight: 700;
			padding-left: 2rem;
			font-size: 1.125rem;
		}
		p {
			width: 90%;
			font-size: 0.875rem;
			padding: 0.5rem 0;
			margin: 0 auto;
		}
		.images {
			width: 100%;
			display: inline-flex;
			justify-content: space-around;
			margin-top: 1rem;
			margin-bottom: 1rem;
		}
		.svg {
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 0.25rem;
			box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
	}
	/* Breakpoint -- SM */
	@media (min-width: 640px) {
		.container {
			width: 60%;
		}
	}
</style>
