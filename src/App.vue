<template>
	<main class="w-full h-full flex flex-col items-center justify-center">
		<img src="/space.png" alt="space" class="w-1/6" />
		<h1 class="text-4xl font-semibold">Proximamente...</h1>
	</main>
</template>
<script setup>
	async function test(url) {
		const res = await fetch(url)
		return res
	}
	console.log(test('https://myexpress.up.railway.app/api/v1/products'))
</script>
