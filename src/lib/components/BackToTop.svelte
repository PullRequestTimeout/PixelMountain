<script>
	import { fade } from "svelte/transition";
	/**
	 * @typedef {Object} Props
	 * @property {number} [showAtPixel]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { showAtPixel = 200, children } = $props();

	let scrollHeight = $state(0);
	function goToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	let showGotoTop = $derived(scrollHeight > showAtPixel);
</script>

{#if showGotoTop}
	<button class="btn" transition:fade={{ duration: 200 }} onclick={goToTop} title="Go to top"
		>{@render children?.()}</button
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
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: var(--color-primary-transparent);
		backdrop-filter: blur(5px);
	}
</style>
