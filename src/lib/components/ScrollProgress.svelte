<script>
	import { onMount } from "svelte";

	let scrollY = $state(0);
	let scrollHeight = $state(0);
	let innerHeight = $state(0);
	let scrollPercentage = $derived((scrollY / (scrollHeight - innerHeight)) * 100);

	onMount(() => {
		// get total height of the document
		// Needs a delay while the dynamic content loads
		setTimeout(() => {
			scrollHeight = document.documentElement.scrollHeight;
		}, 200);
	});
</script>

<svelte:window
	bind:scrollY
	bind:innerHeight
	onresize={() => {
		setTimeout(() => {
			scrollHeight = document.documentElement.scrollHeight;
		}, 200);
	}}
/>

{#if scrollY && scrollHeight && scrollY > 0}
	<div class="scroll-pos-bar" style="--scroll-percent: {scrollPercentage}%">
		<div class="scroll-pos-progress"></div>
	</div>
{/if}

<style>
	.scroll-pos-bar {
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100%;
		background-color: transparent;
		height: 4px;
		touch-action: none;
	}

	.scroll-pos-progress {
		width: 0;
		width: var(--scroll-percent);
		height: 100%;
		background-color: var(--color-primary);
	}
</style>
