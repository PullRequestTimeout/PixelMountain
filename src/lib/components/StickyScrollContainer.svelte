<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import Logo from "./Logo.svelte";

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	let scrollY = $state(0);
	let stickyContainer: HTMLDivElement;
	let containerTop = $state(0);
	let containerHeight = $state(0);
	let containerBottom = $state(0);
	let windowInnerHeight = $state(0);

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

	// Fades in as the container scrolls into view, then fades out as it scrolls past
	let opacity = $derived.by(() => {
		if (containerBottom < containerHeight) {
			return (containerBottom - 50) / containerHeight;
		}
		return Math.min(1, Math.max(0, (scrollY - containerTop + windowInnerHeight) / containerHeight));
	});

	let scale = $derived(
		Math.min(
			1,
			Math.max(0.75, 0.75 + 0.25 * ((scrollY - containerTop + windowInnerHeight) / containerHeight))
		)
	);
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
		{@render children?.()}
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
		height: var(--vh, 100svh);
		padding: 0;
	}

	.sticky-container {
		position: sticky;
		top: 0;
		height: var(--vh, 100svh);
		width: 100vw;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 2rem;
		overflow: hidden;
		text-align: center;
		filter: grayscale(1);
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
