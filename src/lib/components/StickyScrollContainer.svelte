<script>
	import { onMount } from "svelte";

	let scrollY = 0;
	let stickyContainer;
	let containerTop = 0;
	let containerHeight = 0;
	let containerBottom = 0;
	let windowInnerHeight = 0;

	onMount(() => {
		const updateContainerMetrics = () => {
			const rect = stickyContainer.getBoundingClientRect();
			containerTop = rect.top + window.scrollY;
			containerHeight = rect.height;
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

	$: opacity = Math.min(
		1,
		Math.max(0, (scrollY - containerTop + windowInnerHeight) / containerHeight)
	);

	$: scale = Math.min(
		1,
		Math.max(0.75, 0.75 + 0.25 * ((scrollY - containerTop + windowInnerHeight) / containerHeight))
	);

	$: if (containerBottom < containerHeight) {
		opacity = (containerBottom - 50) / containerHeight;
	}
</script>

<svelte:window bind:scrollY bind:innerHeight={windowInnerHeight} />

<section class="scroll-section">
	<div
		class="sticky-container"
		bind:this={stickyContainer}
		style="opacity: {opacity}; transform: scale({scale})"
	>
		<slot></slot>
	</div>
</section>

<style>
	section.scroll-section {
		position: relative;
		background-color: transparent;
		height: 200vh;
	}

	.sticky-container {
		position: sticky;
		top: 0;
		height: 100vh;
		height: 100svh;
		width: 100%;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
</style>
