<script lang="ts">
	import { onMount } from "svelte";
	import Logo from "./Logo.svelte";

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
		style="--opacity: {opacity}; transform: scale({scale})"
	>
		<div class="sticky-logo">
			<Logo />
			<p>Creative digital agency nestled in the mountains of Beautiful British Columbia</p>
		</div>
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
		/* Change height to lengthen sticky scroll */
		height: 100svh;
		height: var(--js-vh);
		padding: 0;
	}

	.sticky-container {
		position: sticky;
		top: 0;
		height: 100svh;
		height: var(--js-vh);
		width: 100%;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 2rem;
		overflow: hidden;
		text-align: center;
	}

	.sticky-logo p {
		max-width: 80vw;
		font-size: var(--font-body-m);
		color: var(--color-white);
		z-index: 1;
	}

	.sticky-logo {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		mix-blend-mode: difference;
	}

	@media (max-width: 350px) {
		.sticky-logo {
			scale: 0.75;
		}
	}

	@media (min-width: 1024px) {
		.sticky-logo p {
			max-width: 30rem;
		}

		.sticky-container {
			opacity: var(--opacity);
		}
	}

	@media (min-width: 1440px) {
		.sticky-logo {
			scale: 1.5;
		}
	}
</style>
