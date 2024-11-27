<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import StickyScrollContainer from "$lib/components/StickyScrollContainer.svelte";
	import ParallaxHero from "$lib/components/ParallaxHero.svelte";
	import RecentWork from "$lib/components/RecentWork.svelte";
	import GetInTouch from "$lib/components/GetInTouch.svelte";

	type TabType = "landing-page" | "e-commerce" | "multimedia";
	let currentTab: TabType = "landing-page";

	type PlanType = "one-time" | "monthly";
	let landingPagePlan: PlanType = "monthly";
</script>

<svelte:head>
	<title>Services | Pixel Mountain Creative</title>
	<meta
		name="description"
		content="An overview of the services provided by Pixel Mountain Creative, a boutique digital agency in British Columbia. These include end-to-end website design, development, and management, as well as eCommerce solutions, and multimedia services."
	/>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero__text">
			<h2>Every creation <span class="highlight">purpose-built</span> to suit your needs</h2>
			<p>
				Personalized websites, eCommerce solutions, and multimedia designed to captivate and engage
				your audience.
			</p>
		</div>
		<img src="/assets/vectors/wireframe-3.svg" alt="wireframe vector" />
	</section>
	<section class="services">
		<div class="services__button-container">
			<button
				class="button button-secondary services__button"
				class:active={currentTab === "landing-page"}
				on:click={() => (currentTab = "landing-page")}>Landing Page</button
			>

			<button
				class="button button-secondary services__button"
				class:active={currentTab === "e-commerce"}
				on:click={() => (currentTab = "e-commerce")}>eCommerce</button
			>

			<button
				class="button button-secondary services__button"
				class:active={currentTab === "multimedia"}
				on:click={() => (currentTab = "multimedia")}>Multimedia</button
			>
		</div>

		<div class="services__item" class:active={currentTab === "landing-page"}>
			<div class="services__item-text-container">
				<div class="services__item-heading">
					<h3>Custom Landing Page Design & Development</h3>
					<p class="services__item-heading-number">01.</p>
					<p class="services__item-subtitle"><em>Create, Manage, Support</em></p>
				</div>
				<p class="services__item-text">
					Fully customized websites to suit your businesses needs. Mobile-first, accessible,
					responsive design, developed with a focus on performance and interactivity to boost your
					conversion rates and revenue. All ongoing maintenance included.
				</p>
			</div>
			<div class="services__card-container">
				<div class="services__card">
					<div class="services__button-container">
						<button
							class="button button-secondary services__button"
							class:active={landingPagePlan === "monthly"}
							on:click={() => (landingPagePlan = "monthly")}>Monthly</button
						>
						<button
							class="button button-secondary services__button"
							class:active={landingPagePlan === "one-time"}
							on:click={() => (landingPagePlan = "one-time")}>One Time</button
						>
					</div>
					{#if landingPagePlan === "monthly"}
						<div class="services__card-heading">
							<h3><span>0</span> Up Front</h3>
							<p>$150 / Month</p>
						</div>
						<div class="services__card-details">
							<ul>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>Unlimited Content Edits
								</li>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>7 Days/Week Technical
									Support
								</li>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>Up to 5 pages, including
									contact form
								</li>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>$100 one-time fee for each
									additional page
								</li>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>$500 one-time fee for blog
									integration
								</li>
							</ul>
						</div>
					{:else if landingPagePlan === "one-time"}
						<div class="services__card-heading">
							<p>Starting from</p>
							<h3><span>2000</span></h3>
						</div>
						<div class="services__card-details">
							<ul>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>Content Edits $50/hr
								</li>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>7 Days/Week Technical
									Support
								</li>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>Up to 5 pages, including
									contact form
								</li>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>$100 one-time fee for each
									additional page
								</li>
								<li>
									<Icon name="circle-check" color="#000" size="24"></Icon>$500 one-time fee for blog
									integration
								</li>
							</ul>
						</div>
					{/if}
					<a href="/contact" class="button button-primary"
						>Get Started<Icon name="arrow-right" color="#fff" /></a
					>
				</div>
			</div>
		</div>

		<div class="services__item" class:active={currentTab === "e-commerce"}>
			<div class="services__item-text-container">
				<div class="services__item-heading">
					<h3>Tailored eCommerce Platform</h3>
					<p class="services__item-heading-number">02.</p>
					<p class="services__item-subtitle"><em>Engage, Analyze, Grow</em></p>
				</div>
				<p class="services__item-text">
					Tailor-made eCommerce solutions leveraging industry-standard platforms to help your
					business reach a wider audience. Our mobile-first, accessible, and responsive design
					ensures a seamless shopping experience for all of your users. Benefit from robust
					analytics, integrated marketing tools, and scalable growth options. Comprehensive ongoing
					maintenance is available, allowing you to focus on expanding your business.
				</p>
			</div>
			<div class="services__card-container">
				<div class="services__card services__card--large">
					<div class="services__card-heading">
						<h3 class="services__card-heading--large">Let's Talk</h3>
					</div>
					<div class="services__card-details">
						<ul>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Customized design to support
								your company’s branding
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Social media integration
								Support
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Multimedia for product
								display contact form
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Inventory integration,
								performance analytics
							</li>
						</ul>
					</div>

					<a href="/contact" class="button button-primary"
						>Contact Sales<Icon name="arrow-right" color="#fff" /></a
					>
				</div>
			</div>
		</div>

		<div class="services__item" class:active={currentTab === "multimedia"}>
			<div class="services__item-text-container">
				<div class="services__item-heading">
					<h3>Premium Multimedia Services</h3>
					<p class="services__item-heading-number">03.</p>
					<p class="services__item-subtitle"><em>Visualize, Captivate, Inspire</em></p>
				</div>
				<p class="services__item-text">
					Elevate your business with our versatile multimedia services, specializing in compelling
					photo and video content, social media visuals, and event coverage. We create digital
					assets that enhance your brand's online presence, whether you need captivating product
					showcases, event highlights, or impactful promotional materials. Trust our team to deliver
					multimedia solutions that attract and engage your audience effectively.
				</p>
			</div>
			<div class="services__card-container">
				<div class="services__card">
					<div class="services__card-heading">
						<p>Starting from</p>
						<h3><span>100</span>/hr</h3>
					</div>
					<div class="services__card-details">
						<ul>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>High quality photo and video
								content
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Event, lifestyle, travel,
								wedding coverage
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Multimedia for product
								showcase
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Social media visuals,
								promotional materials
							</li>
						</ul>
					</div>

					<a href="/contact" class="button button-primary"
						>Get Started<Icon name="arrow-right" color="#fff" /></a
					>
				</div>
			</div>
		</div>
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
	<RecentWork />
	<GetInTouch />
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
			width: 100rem;
		}
	}

	/* Scroll Hero ------------------------------------------------ */

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

	/* Services ------------------------------------ */
	.services {
		color: var(--color-white);
		padding: 0 var(--padding-inline) 4rem var(--padding-inline);
	}

	.services__button-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	.services__button {
		cursor: pointer;
		min-width: fit-content;
		margin: 0;
		color: var(--color-white);
	}

	.services__button.active {
		background-color: var(--color-white);
		color: var(--color-black);
		border: 1px solid var(--color-white);
	}

	.services__item {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;
	}

	/* Fade transition -----*/
	.services__item {
		position: absolute;
		opacity: 0;
	}
	.services__item.active {
		opacity: 1;
		position: relative;
		transition: opacity 0.75s ease-in;
		transition-delay: 0.05s;
	}
	/* -------------------- */

	.services__item-text-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.services__item-heading {
		position: relative;
	}

	.services__item-text {
		font-size: var(--font-body-m);
	}

	.services__item-heading h3 {
		font-size: var(--font-heading-l);
	}

	.services__item-heading-number {
		font-size: 12rem;
		font-family: var(--heading-font);
		font-weight: 700;
		position: absolute;
		opacity: 0.1;
		top: -5rem;
		left: -5rem;
	}

	.services__card {
		color: var(--color-black);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: var(--color-white);
		padding: 1rem;
		border-radius: 1rem;
		align-items: center;
	}

	.services__card .button-secondary {
		color: var(--color-black);
	}

	.services__card .button-primary {
		color: var(--color-white);
	}

	.services__card .button-secondary.active {
		background-color: var(--color-black);
		color: var(--color-white);
		border: 1px solid var(--color-black);
	}

	@media (hover: hover) {
		.services__card .button-secondary:hover {
			outline: 1px solid var(--color-black);
		}
	}

	.services__card-heading {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.services__card h3 {
		font-size: var(--font-heading-l);
		position: relative;
	}

	.services__card h3 span {
		font-family: var(--system-font);
	}

	.services__card h3 span::before {
		content: "$";
		font-size: 1.2rem;
		position: absolute;
		translate: -0.75rem 0;
	}

	h3.services__card-heading--large {
		font-size: calc(var(--font-heading-l) * 1.5);
	}

	.services__card ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}

	.services__card ul li {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
	}

	@media (min-width: 640px) {
		.services__card-container {
			display: flex;
			justify-content: center;
		}

		.services__card {
			margin-top: 1rem;
			padding: 2rem;
			max-width: fit-content;
		}

		.services__card h3 span::before {
			translate: -1rem 0.5rem;
		}
	}

	@media (min-width: 1024px) {
		.services {
			padding: 0 var(--padding-inline) 6rem var(--padding-inline);
		}

		.services__item {
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
		}

		.services__card {
			padding: 2rem;
		}

		.services__card h3 span::before {
			font-size: 1.4rem;
		}

		.services__item-text-container {
			max-width: 50%;
		}

		.services__card--large {
			padding: 4rem 2rem;
		}
	}
</style>
