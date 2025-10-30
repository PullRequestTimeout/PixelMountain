<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import StickyScrollContainer from "$lib/components/StickyScrollContainer.svelte";
	import ParallaxHero from "$lib/components/ParallaxHero.svelte";
	import RecentWork from "$lib/components/RecentWork.svelte";
	import GetInTouch from "$lib/components/GetInTouch.svelte";
	import Loader from "$lib/components/Loader.svelte";
	import { clickOutside } from "$lib/utils/click_outside";
	import { fade, slide } from "svelte/transition";

	type TabType = "landing-page" | "e-commerce" | "multimedia";
	let currentTab: TabType = "landing-page";

	// Form state
	let formState = {
		modalPage: 1,
		error: false,
		errorMessage: "",
		loading: false,
		success: false
	};

	// Client information for funnel
	let clientInfo = {
		packageName: "",
		businessName: "",
		businessIndustry: "",
		websiteGoal: "",
		name: "",
		email: "",
		phone: ""
	};

	// $: console.log(clientInfo);

	let modalOpen = false;
	function handleGetStarted(packageName?: string) {
		modalOpen = true;
		if (packageName) {
			clientInfo.packageName = packageName;
		}
	}

	$: if (!modalOpen) {
		formState.modalPage = 1;
		clientInfo = {
			packageName: "",
			businessName: "",
			businessIndustry: "",
			websiteGoal: "",
			name: "",
			email: "",
			phone: ""
		};
		formState.error = false;
		formState.errorMessage = "";
	}

	async function handleFormSubmit() {
		if (
			!clientInfo.packageName ||
			!clientInfo.name ||
			!clientInfo.email ||
			!clientInfo.phone ||
			!clientInfo.businessName ||
			!clientInfo.businessIndustry ||
			!clientInfo.websiteGoal
		) {
			formState.error = true;
			formState.errorMessage = "Please fill out all fields.";
			return;
		}
		formState.loading = true;
		try {
			await sendEmail();
			formState.success = true;
			formState.modalPage = 3;
			formState.loading = false;
		} catch (error) {
			formState.error = true;
			formState.errorMessage = "An error occurred. Please try again later.";
			formState.loading = false;
		}
	}

	async function sendEmail() {
		const response = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(clientInfo)
		});
		if (!response.ok) {
			throw new Error("An error occurred.");
		}
		console.log(response, "Email sent successfully.");
	}
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
			<!-- <div class="services__item"> -->
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
					<div class="package-tier package-tier__essential">
						Essential <img
							src="/assets/vectors/essential-package.svg"
							alt="essential package icon"
						/>
					</div>
					<p class="services__card-subtitle">
						Perfect for startups and small businesses wanting a clean, professional online presence
					</p>
					<div class="services__card-heading">
						<h3><span>149/mo</span></h3>
					</div>
					<div class="services__card-details">
						<ul>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Custom landing page website
								with up to 5 pages
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Basic monthly maintenance
								and updates
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Contact form for easy client
								connection
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Mobile-responsive and
								SEO-friendly design
							</li>
						</ul>
					</div>
					<button on:click={() => handleGetStarted("essential")} class="button button-primary"
						><span>Get Started</span><Icon name="arrow-right" color="#fff" /></button
					>
				</div>
				<div class="services__card">
					<div class="package-tier package-tier__pro">
						Pro <img src="/assets/vectors/pro-package.svg" alt="essential package icon" />
					</div>
					<p class="services__card-subtitle">
						Ideal for growing businesses that want to share their latest updates with customers
					</p>
					<div class="services__card-heading">
						<h3><span>169/mo</span></h3>
					</div>
					<div class="services__card-details">
						<ul>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Everything in Essential,
								plus:
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Integrated blog
								functionality
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Customized blog layout to
								match brand aesthetics
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>SEO-optimized for blog
								content
							</li>
						</ul>
					</div>
					<button on:click={() => handleGetStarted("pro")} class="button button-primary"
						><span>Get Started</span><Icon name="arrow-right" color="#fff" /></button
					>
				</div>
				<div class="services__card">
					<div class="package-tier package-tier__pro package-tier__elite">
						Elite <img src="/assets/vectors/elite-package.svg" alt="essential package icon" />
					</div>
					<p class="services__card-subtitle">
						Tailored for businesses seeking an interactive, dynamic web presence
					</p>
					<div class="services__card-heading">
						<h3><span>199/mo</span></h3>
					</div>
					<div class="services__card-details">
						<ul>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Everything in Pro, plus:
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Monthly multimedia creation
								(custom photography, video, or graphics)
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Advanced monthly website
								updates and optimizations
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Regular content refreshes to
								keep visuals engaging
							</li>
						</ul>
					</div>
					<button on:click={() => handleGetStarted("elite")} class="button button-primary"
						><span>Get Started</span><Icon name="arrow-right" color="#fff" /></button
					>
				</div>
			</div>
		</div>

		<div class="services__item services__item--wide" class:active={currentTab === "e-commerce"}>
			<!-- <div class="services__item services__item--wide"> -->
			<div class="services__item-text-container">
				<div class="services__item-heading">
					<h3>Tailored eCommerce Platform</h3>
					<p class="services__item-heading-number">02.</p>
					<p class="services__item-subtitle"><em>Engage, Analyze, Grow</em></p>
				</div>
				<p class="services__item-text">
					Custom eCommerce solutions on industry-leading platforms to expand your reach. Our
					mobile-first, responsive designs ensure a seamless user experience, supported by
					analytics, marketing tools, and scalable growth options. We also offer maintenance so you
					can focus on growing your business.
				</p>
			</div>
			<div class="services__card-container">
				<div class="services__card services__card--large">
					<div class="package-tier package-tier__pro">
						E-Commerce <img
							src="/assets/vectors/ecommerce-package.svg"
							alt="ecommerce package icon"
						/>
					</div>
					<p class="services__card-subtitle">
						Designed for businesses ready to sell online with ease, combining style, functionality,
						and scalability
					</p>
					<div class="services__card-heading">
						<p>Starting from</p>
						<h3><span>2499</span></h3>
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
								display
							</li>
							<li>
								<Icon name="circle-check" color="#000" size="24"></Icon>Inventory integration,
								performance analytics
							</li>
						</ul>
					</div>

					<button on:click={() => handleGetStarted("ecommerce")} class="button button-primary"
						><span>Contact Sales</span><Icon name="arrow-right" color="#fff" /></button
					>
				</div>
			</div>
		</div>

		<div class="services__item services__item--wide" class:active={currentTab === "multimedia"}>
			<!-- <div class="services__item services__item--wide"> -->
			<div class="services__item-text-container">
				<div class="services__item-heading">
					<h3>Premium Multimedia Services</h3>
					<p class="services__item-heading-number">03.</p>
					<p class="services__item-subtitle"><em>Visualize, Captivate, Inspire</em></p>
				</div>
				<p class="services__item-text">
					Elevate your business with versatile multimedia services, including photo and video
					content, social media visuals, and event coverage. We craft digital assets to enhance your
					brand, from product showcases to promotional materials, ensuring your audience stays
					engaged.
				</p>
				<a href="/gallery" class="button button-primary"
					><span>See the gallery</span><Icon name="arrow-right" color="#fff" /></a
				>
			</div>
			<div class="services__card-container">
				<div class="services__card">
					<div class="package-tier package-tier__pro">
						Multimedia <img
							src="/assets/vectors/multimedia-package.svg"
							alt="multimedia package icon"
						/>
					</div>
					<p class="services__card-subtitle">
						Elevate your brand with stunning visuals and captivating content that tell your story
						and engage your audience
					</p>
					<div class="services__card-heading">
						<h3><span>100/hr</span></h3>
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

					<button on:click={() => handleGetStarted("multimedia")} class="button button-primary"
						><span>Contact Sales</span><Icon name="arrow-right" color="#fff" /></button
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
{#if modalOpen}
	<div transition:fade={{ duration: 200 }} class="modal__overlay">
		<div
			class="modal__content"
			use:clickOutside
			on:outclick={() => {
				modalOpen = false;
			}}
		>
			<form class="modal__form" on:submit|preventDefault={handleFormSubmit}>
				<h2>Get Started with the <span>{clientInfo.packageName}</span> Package</h2>

				{#if formState.modalPage === 1}
					<label>
						<span>Business Name:</span>
						<input
							class="text-input"
							type="text"
							bind:value={clientInfo.businessName}
							placeholder="John's Plumbing"
							required
						/>
					</label>
					<label>
						<span>Business Industry:</span>
						<input
							class="text-input"
							type="text"
							bind:value={clientInfo.businessIndustry}
							placeholder="Plumbing, HVAC, etc."
							required
						/>
					</label>
					<label>
						<span>Website Goal:</span>
						<input
							class="text-input"
							type="text"
							bind:value={clientInfo.websiteGoal}
							placeholder="Generate leads, sell products, etc."
							required
						/>
					</label>
					<button
						type="button"
						class="button button-primary"
						on:click={() => {
							if (
								!clientInfo.businessName ||
								!clientInfo.businessIndustry ||
								!clientInfo.websiteGoal
							) {
								formState.error = true;
								formState.errorMessage = "Please fill out all fields.";
								return;
							}
							formState.modalPage = 2;
							formState.error = false;
							formState.errorMessage = "";
						}}
					>
						<span>Next</span><Icon name="arrow-right" color="#fff" />
					</button>
				{/if}
				{#if formState.modalPage === 2}
					<label>
						<span>Your Name:</span>
						<input
							class="text-input"
							type="text"
							bind:value={clientInfo.name}
							placeholder="John Smith"
							required
						/>
					</label>
					<label>
						<span>Your Email:</span>
						<input
							class="text-input"
							type="email"
							bind:value={clientInfo.email}
							placeholder="johnsmith@email.com"
							required
						/>
					</label>
					<label>
						<span>Your Phone:</span>
						<input
							class="text-input"
							type="tel"
							bind:value={clientInfo.phone}
							placeholder="+1 (###) ###-####"
							required
						/>
					</label>
					<div class="modal__buttons">
						<button
							type="button"
							class="button button-secondary"
							on:click={() => {
								formState.modalPage = 1;
							}}
						>
							Back
						</button>
						{#if !formState.loading}
							<button
								type="submit"
								class="button button-primary"
								on:click={() => {
									if (!clientInfo.name || !clientInfo.email || !clientInfo.phone) {
										formState.error = true;
										formState.errorMessage = "Please fill out all fields.";
										return;
									}
									formState.error = false;
									formState.errorMessage = "";
								}}><span>Let's Go!</span></button
							>
						{:else}
							<button
								type="submit"
								class="button button-primary"
								style="cursor: default; display: flex; justify-content: center; align-items: center; overflow: hidden;"
								disabled><Loader /></button
							>
						{/if}
					</div>
				{/if}
				{#if formState.modalPage === 3}
					<div class="modal__content--success">
						<div class="success-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 -960 960 960"
								width="30px"
								fill="var(--color-white, #fff)"
								><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg
							>
						</div>
						<p>
							Thanks for reaching out to Pixel Mountain! Our sales team will be in touch with you
							soon.
						</p>
						<button
							class="button button-primary"
							on:click={() => {
								modalOpen = false;
								formState.success = false;
								formState.modalPage = 1;
							}}>Close</button
						>
					</div>
				{/if}
				{#if formState.error}
					<p transition:slide={{ axis: "y" }} class="error">{formState.errorMessage}</p>
				{/if}
			</form>
		</div>
	</div>
{/if}

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

	.services__card-container {
		margin-top: 1rem;
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

	.services__card-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
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
		width: 100%;
		height: 100%;
	}

	.services__card-subtitle {
		font-style: italic;
		max-width: 20rem;
		text-align: center;
	}

	.package-tier {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 2rem;
		font-weight: 700;
		padding: 0.5rem 1rem;
		border: 3px solid var(--color-black);
	}

	.package-tier__pro {
		color: var(--color-white);
		background-color: var(--color-black);
	}

	.package-tier__elite {
		filter: drop-shadow(0 0 0.5rem var(--color-black));
	}

	.services__card .button-primary {
		color: var(--color-white);
	}

	.services__card-heading {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.services__card-heading p {
		margin-top: 0.5rem;
		margin-bottom: -1rem;
	}

	.services__card h3 {
		font-size: calc(var(--font-heading-l) * 1.5);
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

	/* h3.services__card-heading--large {
		font-size: calc(var(--font-heading-l) * 1.5);
	} */

	.services__card-details {
		max-width: 25rem;
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
		display: grid;
		/* align-items: flex-start; */
		grid-template-columns: auto 10fr;
		justify-content: start;
		gap: 0.5rem;
	}

	.services__card button.button-primary {
		margin-top: auto;
	}

	/* Modal */
	.modal__overlay {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		touch-action: none;
	}

	.modal__content {
		width: 100%;
		max-width: 30rem;
	}

	.modal__content form * {
		color: var(--color-white);
	}

	.modal__content form {
		background-color: var(--color-background);
		border-radius: 1rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.modal__content form label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.modal__content h2 {
		font-size: var(--font-heading-m);
		text-align: center;
	}

	.modal__content h2 span {
		text-transform: capitalize;
	}

	.modal__content .modal__buttons {
		display: flex;
		justify-content: space-between;
	}

	.modal__content .button-primary {
		margin-left: auto;
	}

	.modal__content .error {
		color: var(--color-error, red);
		opacity: 0.8;
		text-align: center;
	}

	.modal__content .success-icon {
		display: flex;
		justify-content: center;
		background-color: #0ac40a;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		filter: drop-shadow(0 0 0.5rem #00ff00);
	}

	.modal__content--success {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
		font-size: var(--font-body-s);
	}

	@media (min-width: 640px) {
		.services__card {
			padding: 2rem;
			max-width: 25rem;
			min-height: 35rem;
		}

		.services__card h3 span::before {
			translate: -1rem 0.5rem;
		}
	}

	@media (min-width: 1024px) {
		.services {
			padding: 0 var(--padding-inline) 6rem var(--padding-inline);
		}

		.services__card-container {
			margin-top: 2rem;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 2rem 1rem;
			width: 100%;
			justify-content: space-evenly;
		}

		.services__item {
			align-items: flex-start;
			justify-content: space-between;
		}

		.services__card {
			padding: 2rem;
			min-width: 25rem;
			max-width: calc(33.333% - 2rem);
		}

		.services__card h3 span::before {
			font-size: 1.4rem;
		}

		.services__item-text-container:not(
				.services__item.services__item--wide .services__item-text-container
			) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}

		.services__item.services__item--wide {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
	}
</style>
