<script lang="ts">
	import { onMount } from "svelte";

	// Programatically generate these two arrays
	let scrollerArray: string[] = [];
	for (let i = 1; i <= 10; i++) {
		scrollerArray.push(`scroller-${i}.jpg`);
	}

	let scrollerContainer: HTMLDivElement;
	let windowInnerHeight = $state(0);
	let scrollY = $state(0);
	let containerTop = $state(0);
	let containerBottom = $state(0);

	onMount(() => {
		const updateContainerMetrics = () => {
			const rect = scrollerContainer.getBoundingClientRect();
			containerTop = rect.top + window.scrollY;
			containerBottom = rect.bottom;
		};

		updateContainerMetrics();
		window.addEventListener("resize", updateContainerMetrics);
		window.addEventListener("scroll", updateContainerMetrics);

		return () => {
			window.removeEventListener("resize", updateContainerMetrics);
			window.removeEventListener("scroll", updateContainerMetrics);
		};
	});

	// Only updates while the scroller is in view, so it holds its last value otherwise
	let scrollAmount = $state(0);
	$effect.pre(() => {
		if (scrollY >= containerBottom - windowInnerHeight) {
			scrollAmount = (scrollY - containerTop) * 0.2;
		}
	});
</script>

<svelte:window bind:scrollY bind:innerHeight={windowInnerHeight} />

<div class="scroller-container" bind:this={scrollerContainer}>
	<div class="scroller-1" style="translate: {scrollAmount}px 0 ">
		{#each scrollerArray as image, i}
			{#if i < 5}
				<img src={`/assets/images/scroller/${image}`} alt="scroller item" class="scroller-image" />
			{/if}
		{/each}
	</div>
	<div class="scroller-2" style="translate: {-scrollAmount}px 0 ">
		{#each scrollerArray as image, i}
			{#if i >= 5}
				<img src={`/assets/images/scroller/${image}`} alt="scroller item" class="scroller-image" />
			{/if}
		{/each}
	</div>
</div>

<style>
	div.scroller-container {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow: hidden;
	}

	.scroller-1,
	.scroller-2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 130vw;
		gap: 1rem;
	}

	.scroller-2 {
		flex-direction: row-reverse;
	}

	.scroller-image {
		height: 30vw;
	}

	@media screen and (min-width: 768px) {
		div.scroller-container,
		.scroller-1,
		.scroller-2 {
			gap: 2rem;
		}

		.scroller-1 {
			transform: translateX(-10rem);
		}

		.scroller-2 {
			transform: translateX(10rem);
		}

		.scroller-image {
			height: 30vw;
		}
	}

	@media screen and (min-width: 1024px) {
		div.scroller-container,
		.scroller-1,
		.scroller-2 {
			gap: 3rem;
		}

		.scroller-image {
			height: 25vw;
		}
	}
</style>
