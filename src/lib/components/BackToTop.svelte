<script>
	import { fade } from "svelte/transition";
	export let showAtPixel = 200;

	let scrollHeight = 0;
	function goToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	$: showGotoTop = scrollHeight > showAtPixel;
</script>

{#if showGotoTop}
	<button class="btn" transition:fade={{ duration: 200 }} on:click={goToTop} title="Go to top"
		><slot /></button
	>
{/if}

<svelte:window bind:scrollY={scrollHeight} />

<style>
	button {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		cursor: pointer;
		z-index: 999;
	}
</style>
