<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";

	let imageNumber = 82;
	let lightboxOpen = false;
	let currentImage = 0;
	$: if (!lightboxOpen) {
		currentImage = 0;
	}

	// Add event listeners for keyboard navigation while lightbox is open
	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === "ArrowRight") {
			currentImage = (currentImage + 1) % imageNumber;
		} else if (event.key === "ArrowLeft") {
			currentImage = (currentImage - 1 + imageNumber) % imageNumber;
		} else if (event.key === "Escape") {
			lightboxOpen = false;
		}
	};

	$: if (lightboxOpen) {
		window.addEventListener("keydown", handleKeydown);
	} else {
		window.removeEventListener("keydown", handleKeydown);
	}
</script>

<svelte:head>
	<title>Gallery | Pixel Mountain Creative</title>
	<meta
		name="description"
		content="A showcase of the stunning visuals and projects created by Pixel Mountain Creative, a boutique digital agency in British Columbia."
	/>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero__text">
			<h2>Visuals that tell your <span class="highlight">story</span></h2>
			<p>
				A curated collection of photography and project imagery created to capture moments, places,
				and the essence behind every brand.
			</p>
		</div>
		<img src="/assets/vectors/wireframe-3.svg" alt="wireframe vector" />
	</section>
	<section class="gallery">
		{#each Array(imageNumber) as _, i}
			<button
				class="gallery-item"
				on:click={() => {
					lightboxOpen = true;
					currentImage = i;
				}}
			>
				<img src={`/assets/images/gallery/${String(i + 1)}.jpg`} alt={`Gallery image ${i + 1}`} />
			</button>
		{/each}
	</section>
	{#if lightboxOpen}
		<div class="lightbox">
			<img
				src={`/assets/images/gallery/${String(currentImage + 1)}.jpg`}
				alt={`Gallery image ${currentImage + 1}`}
			/>
			<button
				class="lightbox-close"
				aria-label="Close lightbox"
				on:click={() => {
					lightboxOpen = false;
				}}><Icon name="close" color="white" size="32" /></button
			>
			<button
				class="lightbox-next"
				on:click={() => {
					currentImage = (currentImage + 1) % imageNumber;
				}}><Icon name="arrow-right" color="white" size="32" /></button
			>
			<button
				class="lightbox-prev"
				on:click={() => {
					currentImage = (currentImage - 1 + imageNumber) % imageNumber;
				}}><Icon name="arrow-left" color="white" size="32" /></button
			>
		</div>
	{/if}
</main>

<style>
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: calc(var(--vh, 100svh) * 0.3);
		color: var(--color-white);
		text-align: center;
	}

	.hero__text {
		max-width: 45rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero__text h2 {
		font-size: var(--font-heading-l);
	}

	.hero__text p {
		font-size: var(--font-body-m);
	}

	.hero img {
		position: absolute;
		top: 0;
		right: 0;
		z-index: -1;
		width: 50rem;
		opacity: 0.5;
	}

	@media screen and (min-width: 640px) {
		.hero img {
			width: 60rem;
		}
	}

	@media screen and (min-width: 768px) {
		.hero img {
			width: 70rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.hero img {
			width: 90rem;
		}
	}

	@media screen and (min-width: 1440px) {
		.hero {
			padding-top: calc(var(--vh, 100svh) * 0.35);
		}

		.hero__text {
			max-width: 60rem;
		}

		.hero__text p {
			max-width: 45rem;
		}

		.hero img {
			width: 100vw;
		}
	}

	/* Gallery */
	section.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1rem;
	}

	@media (min-width: 768px) {
		section.gallery {
			gap: 2rem;
		}
	}

	button.gallery-item img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	button.gallery-item {
		background: none;
		border: none;
		display: block;
		cursor: pointer;
		position: relative;
	}

	@media (hover: hover) {
		button.gallery-item img {
			transition: 0.2s;
		}

		button.gallery-item:hover img {
			transform: scale(0.95);
			box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.5);
		}
	}

	/* Lightbox */
	div.lightbox {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(5px);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		cursor: pointer;
	}

	div.lightbox img {
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
		cursor: default;
	}

	div.lightbox button {
		position: absolute;
		background: none;
		border: none;
	}

	@media (hover: hover) {
		div.lightbox button {
			opacity: 0.75;
			transition: 0.2s;
		}

		div.lightbox button:hover {
			opacity: 1;
		}
	}

	div.lightbox button.lightbox-close {
		top: 2rem;
		right: 2rem;
	}

	div.lightbox button.lightbox-next {
		top: 50%;
		right: 2rem;
		transform: translateY(-50%);
	}

	div.lightbox button.lightbox-prev {
		top: 50%;
		left: 2rem;
		transform: translateY(-50%);
	}
</style>
