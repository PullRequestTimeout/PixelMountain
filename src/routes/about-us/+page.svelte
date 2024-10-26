<script lang="ts">
	import StickyScrollContainer from "$lib/components/StickyScrollContainer.svelte";
	import AboutImageScroller from "$lib/components/AboutImageScroller.svelte";
	import GetInTouch from "$lib/components/GetInTouch.svelte";
	import ScrollProps from "$lib/components/ScrollProps.svelte";
</script>

<svelte:head>
	<title
		>About Us | Pixel Mountain Creative - Boutique digital agency nestled in the mountains of
		Beautiful British Columbia</title
	>
	<meta
		name="description"
		content="Get to know more about us at Pixel Mountain Creative, a boutique digital agency in British Columbia. See our featured projects and learn more about our services."
	/>
</svelte:head>

<main>
	<section class="hero hero--top-pad">
		<div class="hero__text">
			<h2>
				We're a boutique digital agency in the mountains of <span class="highlight"
					>British Columbia</span
				>
			</h2>
			<p>
				At Pixel Mountain Creative we're dedicated to creating an engaging, polished online presence
				for your business
			</p>
		</div>
	</section>
	<StickyScrollContainer>
		<video
			src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4"
			loop
			muted
			autoplay
			playsinline
		></video>
	</StickyScrollContainer>
	<section class="who-we-are">
		<ScrollProps let:props className="show" threshold={1} once={true}>
			<div class="accent-title {props.class}">
				<img src="/assets/vectors/arrow-1.svg" width="40px" alt="arrow right" />
				<h2>Who We Are</h2>
			</div>
		</ScrollProps>
		<div class="who-we-are__text">
			<h3>We are creative collective with a passion for crafting engaging digital experiences</h3>
			<div class="who-we-are__paragraphs">
				<p>
					Pixel Mountain Creative was founded by a passionate programmer, photographer, and designer
					aiming to create a one-stop shop for businesses looking to elevate their digital presence.
				</p>
				<p>
					We are a small boutique agency that can almost always see a digital project through from
					concept to completion in-house, but if anything is a little outside our wheelhouse we have
					a large network of local creative professionals at our disposal to make sure our creation
					is everything you need.
				</p>
			</div>
		</div>
	</section>
	<AboutImageScroller />
	<section class="hero">
		<div class="hero__text">
			<h2>
				Every creation purpose-built to <span class="highlight">suit your needs </span>
			</h2>
			<p>We take great pride in the meticulous attention to detail in all of our work</p>
		</div>
	</section>
	<section class="why-us">
		<ScrollProps let:props className="show" threshold={1} once={true}>
			<div class="accent-title {props.class}">
				<img src="/assets/vectors/arrow-1.svg" width="40px" alt="arrow right" />
				<h2>Why Us?</h2>
			</div>
		</ScrollProps>
		<div class="why-us__container">
			<div class="why-us__text">
				<h3>Uncompromising Quality</h3>
				<p>
					We are committed to delivering top-notch digital solutions that exceed your expectations,
					ensuring every project is crafted to perfection.
				</p>
			</div>
			<div class="why-us__text">
				<h3>Comprehensive Management</h3>
				<p>
					Our approach goes beyond one-time projects; we offer ongoing support and management to
					keep your digital presence thriving.
				</p>
			</div>
			<div class="why-us__text">
				<h3>In-House Expertise</h3>
				<p>
					From web development to photography, our team handles every aspect of your project
					in-house, guaranteeing seamless integration and a cohesive final product.
				</p>
			</div>
			<div class="why-us__text">
				<h3>Client-Centric Approach</h3>
				<p>
					Your satisfaction is our priority. We tailor our services to meet your specific needs,
					ensuring a personalized and effective digital strategy.
				</p>
			</div>
		</div>
		<div class="why-us__wireframe-container">
			<img
				class="why-us__wireframe-1"
				src="/assets/vectors/wireframe-5.svg"
				alt="wireframe vector"
			/>
			<img
				class="why-us__wireframe-2"
				src="/assets/vectors/wireframe-6.svg"
				alt="wireframe vector"
			/>
		</div>
	</section>
	<section class="the-team">
		<ScrollProps let:props className="show" threshold={1} once={true}>
			<div class="accent-title {props.class}">
				<img src="/assets/vectors/arrow-1.svg" width="40px" alt="arrow right" />
				<h2>The Team</h2>
			</div>
		</ScrollProps>
		<div class="the-team__container">
			<p>
				Pixel Mountain is a boutique agency with a small, dedicated team, and we take pride in
				overseeing every project from start to finish personally. If your projects require more
				specialized services than our team currently has available, our expansive auxiliary network
				of creative professionals is available to take your creation to the next level.
			</p>
			<div class="the-team__image-container">
				<img
					src="/assets/images/jacob-snowboarding-circle.png"
					alt="jacob snowboarding"
					width="1000"
					height="1000"
				/>
			</div>
		</div>
	</section>
	<GetInTouch />
</main>

<style>
	/* Hero ------------------------------------------ */

	* {
		color: var(--color-white);
	}

	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.hero--top-pad {
		padding-top: calc(var(--vh, 100svh) * 0.3);
	}

	.hero__text {
		position: relative;
		z-index: 100;
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

	@media screen and (min-width: 1440px) {
		.hero__text {
			max-width: 60rem;
		}

		.hero__text p {
			max-width: 45rem;
		}

		.hero--top-pad {
			padding-top: calc(var(--vh, 100svh) * 0.35);
		}
	}

	/* Who We Are */

	.who-we-are,
	.who-we-are__text,
	.who-we-are__paragraphs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.who-we-are__text h3 {
		font-size: var(--font-heading-m);
	}

	.who-we-are__text p {
		font-size: var(--font-body-m);
	}

	@media screen and (min-width: 768px) {
		.who-we-are__text,
		.who-we-are__paragraphs {
			gap: 2rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.who-we-are__text {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
		}

		.who-we-are__text h3 {
			font-size: var(--font-heading-l);
		}
	}

	@media screen and (min-width: 1440px) {
		.who-we-are__text {
			gap: 6rem;
		}
	}

	/* Why Us ---------------------------------------- */
	.why-us {
		position: relative;
		padding: 0 var(--padding-inline);
		z-index: 10;
	}

	.why-us .accent-title {
		margin-bottom: 1rem;
	}

	.why-us__container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.why-us__text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.why-us__text h3 {
		font-size: var(--font-heading-l);
	}
	.why-us__text p {
		font-size: var(--font-body-m);
	}

	.why-us__wireframe-container {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		max-width: 100vw;
		overflow: hidden;
		border: 1;
	}

	.why-us__wireframe-1,
	.why-us__wireframe-2 {
		top: 0;
		left: 0;
		height: 70rem;
		opacity: 0.35;
	}

	.why-us__wireframe-2 {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		.why-us__container {
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
		}

		.why-us__wireframe-1 {
			display: none;
		}

		.why-us__wireframe-container {
			translate: 0 -20rem;
		}

		.why-us__wireframe-2 {
			display: block;
			height: 100rem;
			width: 100vw;
		}
	}

	@media screen and (min-width: 1440px) {
		.why-us__container {
			gap: 6rem;
		}
	}

	/* The Team -------------------------------------- */

	.the-team,
	.the-team__container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;
		z-index: 100;
	}

	.the-team__container P {
		font-size: var(--font-body-m);
	}

	.the-team__image-container {
		display: flex;
		justify-content: center;
	}

	.the-team__image-container img {
		width: auto;
		height: auto;
		max-width: 15rem;
	}

	@media screen and (min-width: 640px) {
		.the-team__container {
			gap: 2rem;
		}
	}

	@media screen and (min-width: 768px) {
		.the-team__image-container img {
			max-width: 20rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.the-team__container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
		}

		.the-team__image-container {
			translate: 0 -4rem;
		}
	}

	@media screen and (min-width: 1440px) {
		.the-team__container {
			gap: 6rem;
		}
	}
</style>
