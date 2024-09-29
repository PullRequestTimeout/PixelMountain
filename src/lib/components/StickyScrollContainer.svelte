<script lang="ts">
	import { onMount } from "svelte";

	let scrollY = 0;
	let stickyContainer: HTMLDivElement;
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
		background: linear-gradient(
			0deg,
			rgba(21, 21, 21, 1) 80%,
			rgba(21, 21, 21, 0.8576564414828431) 90%,
			rgba(21, 21, 21, 0) 100%
		);
		height: 200vh;
		padding: 0;
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
		opacity: 0;
	}
</style>
