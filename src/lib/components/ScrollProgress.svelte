<!--
    Client height needs to be passed to the ScrollProgress component from the most top-level element in /routes/+page.svelte or /routes/+layout.svelte:
    
    <main bind:clientHeight>
	    <ScrollProgress totalHeight={clientHeight} />
    </main>
 -->

<script>
	export let totalHeight = 0;
	let scrollPos = 0;
	let innerHeight = 0;
	$: scrollPercentage = (scrollPos / (totalHeight - innerHeight)) * 100;
</script>

<svelte:window bind:scrollY={scrollPos} bind:innerHeight />

{#if scrollPos && totalHeight && innerHeight}
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
		background-color: rgb(0, 174, 255);
		/* background-color: var(--clr-primary); */
	}
</style>
