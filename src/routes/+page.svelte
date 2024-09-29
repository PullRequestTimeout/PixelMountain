<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import StickyScrollContainer from "$lib/components/StickyScrollContainer.svelte";
</script>

<svelte:head>
	<title
		>Pixel Mountain Creative - Boutique digital agency nestled in the mountains of Beautiful British
		Columbia</title
	>
</svelte:head>

<main>
	<section>
		<div class="hero__text">
			<h2><span>Simplifying</span> your digital experience</h2>
			<p>We look after <em>every pixel</em> of your digital presence, so you don't have to</p>
			<div class="hero__links">
				<a href="/services" class="button button-secondary">Learn More</a>
				<a href="/contact" class="button button-primary"
					><span>Work With Us</span><Icon color="#fff" name="arrow-right" /></a
				>
			</div>
		</div>
		<img class="hero__wireframe" src="/assets/vectors/wireframe-1.svg" alt="wireframe vector" />
	</section>
	<StickyScrollContainer>
		<video
			src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4"
			loop
			muted
			autoplay
		></video>
	</StickyScrollContainer>
	<section class="services">
		<div class="accent-title">
			<img src="/assets/vectors/arrow-1.svg" width="40px" alt="arrow right" />
			<h2>What We Do</h2>
		</div>
		<div class="services__item">
			<div class="services__item-heading">
				<h3>UI/UX Design</h3>
				<p class="services__item-heading-number">01.</p>
			</div>
			<p class="services__item-text">
				Fully customized websites to suit your businesses needs. Mobile-first, accessible,
				responsive design, developed with a focus on performance and interactivity to boost your
				conversion rates and revenue. All ongoing maintenance included.
			</p>
		</div>
		<div class="services__divider"></div>
		<div class="services__item">
			<div class="services__item-heading">
				<h3>Development</h3>
				<p class="services__item-heading-number">02.</p>
			</div>
			<p class="services__item-text">
				Get your digital store up and running fast, with a tailored design to match your brand. Gain
				access to full suite of analytics designed to give your business the tools you need to grow.
			</p>
		</div>
		<div class="services__divider"></div>
		<div class="services__item">
			<div class="services__item-heading">
				<h3>Multimedia</h3>
				<p class="services__item-heading-number">03.</p>
			</div>
			<p class="services__item-text">
				Bring your brand to life with bespoke digital media and asset creation. From eye-catching
				graphics and engaging video content to professional photography and immersive animations,
				every asset is crafted to captivate your audience. Seamlessly integrated with your overall
				strategy, ensuring consistency and enhancing your brand's presence across all platforms.
			</p>
		</div>
		<div class="services__divider"></div>
		<a href="/services" class="services__link button button-secondary"
			>Learn More <Icon name="arrow-right" color="#fff"></Icon></a
		>
	</section>
</main>

<style>
	main {
		color: var(--color-white);
	}

	/* Hero ------------------------------------------------- */
	div.hero__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: 1rem;
		height: 80vh;
	}

	div.hero__links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1rem;
	}

	.hero__text h2 {
		font-size: var(--font-heading-l);
	}

	.hero__text p {
		font-size: var(--font-body-m);
	}

	.hero__text h2 span {
		position: relative;
	}

	.hero__text h2 span::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 100%;
		z-index: -1;
		background-color: var(--color-primary-transparent);
		animation: highlight 0.4s ease-in-out forwards 1s;
	}

	.hero__wireframe {
		position: absolute;
		z-index: -1;
		top: 0;
		right: 0;
		opacity: 0.1;
		user-select: none;
	}

	@keyframes highlight {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* Services-------------------------------------------------------------- */

	.accent-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.accent-title img {
		translate: 0 -0.25rem;
	}

	.services {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.services__divider {
		width: 100%;
		border-bottom: 2px solid var(--color-white);
	}

	.services__item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.services__item-heading {
		display: flex;
		flex-direction: row-reverse;
		justify-content: start;
		gap: 0.25rem;
	}

	.services__item-heading h3 {
		font-size: var(--font-heading-m);
	}

	.services__item-heading-number {
		font-family: var(--heading-font);
		opacity: 0.25;
		align-self: flex-end;
		font-size: var(--font-heading-s);
	}

	.services__item-text {
		font-size: var(--font-body-m);
	}

	.services__link {
		align-self: flex-end;
	}

	@media screen and (min-width: 640px) {
		.services__divider {
			margin-top: 0.5rem;
		}
	}

	@media screen and (min-width: 768px) {
		.services {
			gap: 2rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.services__item {
			display: grid;
			grid-template-columns: 1fr 2fr;
		}

		.services__item-heading {
			flex-direction: column;
		}

		.services__item-heading-number {
			align-self: flex-start;
		}
	}
</style>
