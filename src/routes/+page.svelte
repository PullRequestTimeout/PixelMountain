<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import StickyScrollContainer from "$lib/components/StickyScrollContainer.svelte";
	import ParallaxHero from "$lib/components/ParallaxHero.svelte";
	import Carousel from "$lib/components/Carousel.svelte";
	import RecentWork from "$lib/components/RecentWork.svelte";
	import GetInTouch from "$lib/components/GetInTouch.svelte";
	import ScrollProps from "$lib/components/ScrollProps.svelte";
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
			<h2>
				A creative web agency dedicated to <span class="highlight">saving you time</span>
			</h2>
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
	<div class="video-hero">
		<StickyScrollContainer>
			<video
				src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4"
				loop
				muted
				autoplay
				playsinline
			></video>
		</StickyScrollContainer>
	</div>
	<div class="parallax-hero">
		<ParallaxHero />
	</div>
	<section class="services">
		<ScrollProps let:props className="show" threshold={1} once={true}>
			<div class="accent-title {props.class}">
				<img src="/assets/vectors/arrow-1.svg" width="40px" alt="arrow right" />
				<h2>What We Do</h2>
			</div>
		</ScrollProps>
		<div class="services__item">
			<div class="services__item-heading">
				<h3>End to End Website Creation</h3>
				<p class="services__item-heading-number">01.</p>
			</div>
			<p class="services__item-text">
				We design and build websites that are tailored to your business, ensuring a professional
				online presence from day one. Our process takes you from concept to launch, without
				requiring any technical input from you. We handle all the complexities of web development,
				leaving you with a site that works perfectly and aligns with your business goals.
			</p>
		</div>
		<ScrollProps let:props className="show" threshold={1} once={false}>
			<div class="services__divider {props.class}"></div>
		</ScrollProps>
		<div class="services__item">
			<div class="services__item-heading">
				<h3>Ongoing Management</h3>
				<p class="services__item-heading-number">02.</p>
			</div>
			<p class="services__item-text">
				Once your website is live, we take care of everything from updates to security, ensuring
				your site stays fast, secure, and up-to-date. Our focus is to save you the time and stress
				of managing your website, allowing you to concentrate on running your business. With us
				handling the tech, you’ll never have to worry about maintaining your site again.
			</p>
		</div>
		<ScrollProps let:props className="show" threshold={1} once={false}>
			<div class="services__divider {props.class}"></div>
		</ScrollProps>
		<div class="services__item">
			<div class="services__item-heading">
				<h3>Multimedia Services</h3>
				<p class="services__item-heading-number">03.</p>
			</div>
			<p class="services__item-text">
				From high-quality photography and video production to custom graphics, we provide the
				professional media your business needs to stand out. Whether for your website, social media,
				or promotional materials, we manage the entire process, so you don’t have to worry about
				creating or maintaining the visuals that keep your brand fresh and engaging.
			</p>
		</div>
		<ScrollProps let:props className="show" threshold={1} once={false}>
			<div class="services__divider {props.class}"></div>
		</ScrollProps>
		<a href="/services" class="services__link button button-secondary"
			>Learn More <Icon name="arrow-right" color="#fff"></Icon></a
		>
	</section>
	<section class="about">
		<div class="about__images">
			<img src="/assets/images/rossland.jpg" width="100%" alt="rossland from above" />
			<img src="/assets/images/DSC09910.jpg" alt="jacob snowboarding" />
			<img src="/assets/images/DSC02102.jpg" alt="old glory mountain" />
		</div>
		<div class="about__text">
			<h3 class="about__text-heading">Explorers, Creators, Innovators</h3>
			<p class="about__text-body">
				Pixel Mountain are a boutique creative agency nestled in the mountains of British Columbia.
				We come from a background of small business and love helping the local community achieve
				their digital dreams.
			</p>
			<a href="/about-us" class="button button-secondary"
				>About Us<Icon name="arrow-right" color="#000"></Icon></a
			>
		</div>

		<h3 class="about__accent-text">Every creation purpose-built to <span>suit your needs</span></h3>
		<img class="about__wireframe" src="/assets/vectors/wireframe-2.svg" alt="wireframe vector" />
	</section>
	<section class="carousel">
		<Carousel />
	</section>
	<RecentWork />
	<GetInTouch />
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
		height: calc(var(--vh, 100svh) * 0.7);
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
		max-width: 60rem;
	}

	.hero__text p {
		font-size: var(--font-body-m);
	}

	.hero__wireframe {
		position: absolute;
		z-index: -1;
		top: 0;
		right: 0;
		width: 60rem;
		user-select: none;
	}

	@media screen and (min-width: 768px) {
		.hero__wireframe {
			width: 80rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.hero__wireframe {
			width: 100rem;
		}
	}

	@media screen and (min-width: 1440px) {
		.hero__wireframe {
			width: 120rem;
		}
	}

	@media screen and (min-width: 1536px) {
		.hero__wireframe {
			width: 140rem;
		}
	}

	/* Scroll Hero ---------------------------------------------------------- */

	.video-hero {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		.video-hero {
			display: block;
		}

		.parallax-hero {
			display: none;
		}
	}

	/* Services-------------------------------------------------------------- */

	.services {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: var(--color-background);
	}

	.services__divider {
		width: 0;
		border-bottom: 2px solid var(--color-white);
		transition: 1s ease-in-out;
	}

	.services__divider.show {
		width: 100%;
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

	/* About ------------------------------------------------- */

	.about {
		background-color: var(--color-white);
		color: var(--color-black);
		padding: 0;
		position: relative;
		overflow: hidden;
	}

	.about__images {
		padding: 0;
		position: relative;
		z-index: 1;
	}

	.about__images img:nth-child(2),
	.about__images img:nth-child(3) {
		display: none;
	}

	.about__text {
		position: relative;
		z-index: 10;
		padding: 2rem var(--padding-inline);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.about__text a {
		margin-top: 1rem;
	}

	.about__text-heading,
	.about__accent-text {
		font-size: var(--font-heading-l);
	}

	.about__accent-text {
		position: relative;
		z-index: 10;
		text-align: center;
		padding: 0 var(--padding-inline);
		margin-bottom: 4rem;
	}

	.about__accent-text span {
		background-color: var(--color-primary-transparent);
	}

	.about__wireframe {
		position: absolute;
		width: 70rem;
		top: -10rem;
		left: -15rem;
		user-select: none;
		opacity: 0.5;
		z-index: 0;
	}

	@media screen and (min-width: 640px) {
		.about {
			padding: 4rem var(--padding-inline);
		}

		.about__images {
			display: flex;
			justify-content: center;
		}

		.about__images img {
			height: 17rem;
			width: 13rem;
			border-radius: 1rem;
			object-fit: cover;
			box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.5);
		}

		.about__images img:nth-child(1) {
			translate: 1rem -1rem;
		}

		.about__images img:nth-child(2),
		.about__images img:nth-child(3) {
			display: block;
		}

		.about__images img:nth-child(2) {
			translate: 0 0rem;
		}

		.about__images img:nth-child(3) {
			translate: -1rem -2rem;
		}

		.about__text {
			max-width: 90%;
			padding: 0;
			margin: 4rem 0;
		}

		.about__text p {
			font-size: var(--font-body-m);
		}

		.about__accent-text {
			padding: 0;
			margin-bottom: 0;
			padding: 0 10%;
		}

		.about__wireframe {
			width: 90rem;
			top: -20rem;
			left: -20rem;
		}
	}

	@media screen and (min-width: 768px) {
		.about__images img {
			height: 20rem;
			width: 15rem;
		}

		.about__wireframe {
			width: 110rem;
			top: -30rem;
			left: -30rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.about {
			padding: 6rem var(--padding-inline);
		}

		.about__wireframe {
			width: 120rem;
			top: -30rem;
			left: -30rem;
		}

		.about__text {
			max-width: 60%;
		}
	}

	@media screen and (min-width: 1440px) {
		.about {
			padding: 8rem var(--padding-inline);
		}

		.about__images img {
			height: 25rem;
			width: 20rem;
		}

		.about__wireframe {
			width: 150rem;
			top: -40rem;
			left: -40rem;
		}
	}

	@media screen and (min-width: 1536px) {
		.about {
			padding: 10rem var(--padding-inline);
		}
	}

	/* Carousel ------------------------------------ */
	.carousel {
		padding: 0;
		background-color: var(--color-white);
		color: var(--color-black);
	}
</style>
