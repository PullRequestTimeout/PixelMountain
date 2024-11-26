<script lang="ts">
	import Logo from "./Logo.svelte";
	import { onMount } from "svelte";

	let windowInnerHeight = 0;
	let top = 0;
	let scrollY = 0;
	let container: any;
	let containerTop = 0;
	let containerBottom = 0;
	let containerHeight = 0;

	onMount(() => {
		console.log(container.getBoundingClientRect());
		console.log(windowInnerHeight);
		if (container) {
			containerTop = container.getBoundingClientRect().top;
			containerBottom = container.getBoundingClientRect().bottom;
			containerHeight = container.getBoundingClientRect().height;
		}
		window.addEventListener("scroll", () => {
			if (container) {
				containerTop = container.getBoundingClientRect().top;
				containerBottom = container.getBoundingClientRect().bottom;
				containerHeight = container.getBoundingClientRect().height;
			}
		});
		window.addEventListener("resize", () => {
			if (container) {
				containerTop = container.getBoundingClientRect().top;
				containerBottom = container.getBoundingClientRect().bottom;
				containerHeight = container.getBoundingClientRect().height;
			}
		});
	});

	$: if (containerTop < windowInnerHeight && containerBottom > 0) {
		top = (((containerTop - windowInnerHeight) * -1) / (containerHeight + windowInnerHeight)) * 50;
	}
</script>

<svelte:window bind:scrollY bind:innerHeight={windowInnerHeight} />

<section class="parallax-container" bind:this={container}>
	<div class="parallax-logo">
		<Logo />
		<p>Creative digital agency nestled in the mountains of Beautiful British Columbia</p>
	</div>
	<img
		style="--top: -{top}%"
		class="parallax-image"
		sizes="(min-width: 50em) 50em, 100vw"
		srcset={`https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_640snowydronetrees_qnpimc.jpg 256w,
						https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_768/snowydronetrees_qnpimc.jpg 640w,
						https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_1024/snowydronetrees_qnpimc.jpg 768w,
						https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_1280/snowydronetrees_qnpimc.jpg 1024w`}
		src={`https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_512/snowydronetrees_qnpimc.jpg}`}
		alt={"Drone shot of snowy trees"}
	/>
</section>

<!-- <input type="range" bind:value={top} min={0} max={50} step={0.1} /> -->

<style>
	.parallax-container {
		top: 0;
		height: var(--vh, 100svh);
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		overflow: hidden;
		text-align: center;
		filter: grayscale(1);
	}

	.parallax-logo {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		mix-blend-mode: difference;
	}

	.parallax-logo p {
		max-width: 80vw;
		font-size: var(--font-body-m);
		color: var(--color-white);
		z-index: 1;
		font-weight: 700;
	}

	.parallax-image {
		position: absolute;
		z-index: -1;
		top: var(--top, 0);
		left: 0;
		min-width: 100%;
		height: 150%;
		object-fit: cover;
		/* filter: brightness(0.5); */
		filter: contrast(1.2) brightness(0.8);
	}

	@media (max-width: 350px) {
		.parallax-logo {
			scale: 0.75;
		}
	}
</style>
