<script lang="ts">
	import emblaCarouselSvelte from "embla-carousel-svelte";
	import ClassNames from "embla-carousel-class-names";
	import { setupTweenOpacity } from "$lib/utils/tweenOpacity.js";
	import Autoplay from "embla-carousel-autoplay";

	// Add file names to lengthen slideshow
	const images = ["DSC08900.jpg", "DSC03363.jpg", "DSC03570.jpg"];

	// Add data to lengthen slideshow
	type Slide = {
		image: string;
		alt: string;
		clientFeedback: string;
		clientName: string;
	};

	const slides: { [key: string]: Slide } = {
		slide1: {
			image: "DSC08900.jpg",
			alt: "Image number 1 of the carousel.",
			clientFeedback:
				"The website Pixel Mountain created for my business was beyond expectations! I love the design, and attention to detail with the animations and function, and many of my own clients have given numerous compliments on the quality of the site and how easy it was to book in. The increase in business since the launch more than pays for the cost of the services.",
			clientName: "Michelle — rootedinmotion.ca"
		},
		slide2: {
			image: "DSC03363.jpg",
			alt: "Image number 2 of the carousel.",
			clientFeedback:
				"Working with the team at Pixel Mountain has been a great experience, so happy with the results! They are professional, creative, and always deliver on time. I would highly recommend them!",
			clientName: "Chloe — Multimedia Services"
		},
		slide3: {
			image: "DSC03570.jpg",
			alt: "Image number 3 of the carousel.",
			clientFeedback:
				"Working with the team at Pixel Mountain has been a great experience, so happy with the results! They are professional, creative, and always deliver on time. I would highly recommend them!",
			clientName: "Chloe — Multimedia Services"
		}
	};

	let emblaApi: any;
	const options = { loop: true, duration: 60 };
	let plugins = [ClassNames(), Autoplay({ delay: 10000 })];
	let resize: number;

	const onInit = (event: any) => {
		emblaApi = event.detail;
		const { applyTweenOpacity, removeTweenOpacity } = setupTweenOpacity(emblaApi);
		emblaApi
			.on("init", applyTweenOpacity)
			.on("scroll", applyTweenOpacity)
			.on("reInit", applyTweenOpacity)
			.on("destroy", removeTweenOpacity);
	};
</script>

<!-- rerender component on window resize to stop carousel items from disappearring -->
<svelte:window
	on:resize={() => {
		setTimeout(() => {
			resize = window.innerWidth;
		}, 500);
	}}
/>

{#key resize}
	<section class="embla" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
		<div class="embla__container">
			{#each Object.keys(slides) as slide}
				<div class="embla__slide">
					<img
						src={`/assets/images/carousel/${slides[slide].image}`}
						alt={slides[slide].alt}
						class="embla__slide"
					/>
					<div class="embla__slide-content">
						<p class="embla__slide-feedback">{slides[slide].clientFeedback}</p>
						<p class="embla__slide-client-name">{slides[slide].clientName}</p>
					</div>
				</div>
			{/each}
		</div>
		<button class="embla__prev" on:click={emblaApi.scrollPrev} aria-label="Carousel Previous">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
				><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg
			></button
		>
		<button class="embla__next" on:click={emblaApi.scrollNext} aria-label="Carousel Next">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
				><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg
			></button
		>
	</section>
{/key}

<style>
	section.embla {
		margin-top: -2px;
		position: relative;
		overflow: hidden;
		padding: 0;
		background-color: var(--color-white);
	}

	div.embla__container {
		display: flex;
	}

	div.embla__container img {
		filter: brightness(0.5);
		width: 100%;
		object-fit: cover;
	}

	div.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		position: relative;
	}

	div.embla__slide-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		max-width: 30rem;
		padding: 1rem;
		color: #fff;
		text-align: center;
		font-size: var(--font-body-m);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.embla__slide-feedback {
		font-style: italic;
		font-size: 0.7rem;
	}

	.embla__slide-feedback::before {
		content: "“";
	}

	.embla__slide-feedback::after {
		content: "”";
	}

	.embla__slide-client-name {
		font-weight: bold;
	}

	section.embla > button {
		position: absolute;
		top: 50%;
		cursor: pointer;
		display: flex;
		border: none;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		translate: 0 -50%;
		padding: 0.5rem;
		display: none;
	}

	section.embla > button > svg {
		fill: #fff;
		width: 2rem;
		height: 2rem;
	}

	button.embla__next {
		right: 1rem;
	}

	button.embla__prev {
		left: 1rem;
	}

	button.embla__prev > svg {
		translate: 0.75rem 0;
	}

	@media screen and (min-width: 365px) {
		.embla__slide-feedback {
			font-size: var(--font-body-m);
		}
	}

	@media screen and (min-width: 640px) {
		div.embla__slide-content {
			gap: 1rem;
		}
	}

	@media screen and (min-width: 768px) {
		section.embla > button {
			display: flex;
		}

		section.embla > button > svg {
			width: 3rem;
			height: 3rem;
			filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.75));
		}

		div.embla__slide {
			flex: 0 0 80%;
			padding: 0 1rem;
		}

		div.embla__slide-content {
			max-width: 70%;
		}
	}

	@media screen and (min-width: 1024px) {
		div.embla__slide {
			flex: 0 0 60%;
			padding: 0 1rem;
		}
	}

	@media (hover: hover) {
		section.embla > button > svg {
			opacity: 0.75;
			transition-duration: 0.2s;
		}

		section.embla > button:hover > svg,
		section.embla > button:active > svg {
			opacity: 1;
		}
	}
</style>
