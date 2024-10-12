<script>
	let scrollPos = 0;
	let innerHeight = 0;
	$: scrollPercentage = (scrollPos / innerHeight) * 100;
</script>

<svelte:window bind:scrollY={scrollPos} bind:innerHeight />

{#if scrollPos && innerHeight}
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
