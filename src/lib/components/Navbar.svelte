<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import Icon from "$lib/components/Icon.svelte";

	// import LangToggle from "$lib/components/LangToggle.svelte";

	//Hamburger menu logic
	let isOpen = false;
	const handleMenu = () => {
		isOpen = !isOpen;
	};

	// Show navbar only when at the top of the page or scrolling back up
	let scrolling = true;
	let lastScroll = 0;
	onMount(() => {
		window.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll <= 0) {
				scrolling = true;
			} else if (currentScroll > lastScroll) {
				scrolling = false;
			} else {
				scrolling = true;
			}
			lastScroll = currentScroll;
		});
	});
</script>

{#if scrolling}
	<nav class="navbar" transition:slide={{ duration: 300, axis: "y" }}>
		<div class="navbar__logo">
			<Logo />
		</div>
		<button aria-label="menu button" on:click={handleMenu} class="hamburger btn-green">
			<div class:active={isOpen} />
		</button>
		{#if isOpen}
			<ul transition:slide={{ duration: 400, axis: "x" }} class="navbar__link-list small-screens">
				<li class="navbar__link" class:open={isOpen}>
					<a href="/services">Services</a>
				</li>
				<div class="navbar__divider-line" class:open={isOpen}></div>
				<li class="navbar__link" class:open={isOpen}>
					<a href="/our-work">Our&nbsp;Work</a>
				</li>
				<div class="navbar__divider-line" class:open={isOpen}></div>
				<li class="navbar__link" class:open={isOpen}>
					<a href="/about">About&nbsp;Us</a>
				</li>
				<div class="navbar__divider-line" class:open={isOpen}></div>
				<li class="navbar__link button button-primary" class:open={isOpen}>
					<a href="/contact">Contact<Icon name="arrow-right" color="#fff" /></a>
				</li>
			</ul>
		{/if}
		<ul class="navbar__link-list big-screens">
			<li class="navbar__link">
				<a href="/services">Services</a>
			</li>
			<li class="navbar__link">
				<a href="/our-work">Our Work</a>
			</li>
			<li class="navbar__link">
				<a href="/about-us">About Us</a>
			</li>
			<li class="navbar__link">
				<a href="/contact" class="button button-primary"
					><span>Contact</span><Icon name="arrow-right" color="#fff" /></a
				>
			</li>
		</ul>
	</nav>
{/if}

<style>
	.navbar {
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		background-color: #151515;
		color: white;
		backdrop-filter: blur(10px);
		width: 100vw;
	}

	.navbar__logo {
		transform: scale(0.5);
		transform-origin: left;
		width: 11rem;
		z-index: 100;
	}

	ul {
		display: flex;
		list-style-type: none;
		gap: 1rem;
		overflow-x: hidden;
	}

	ul li {
		font-weight: 700;
		position: relative;
	}

	ul.big-screens {
		display: none;
	}

	ul.small-screens {
		position: absolute;
		top: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		max-width: 375px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #1e1e1e;
	}

	.navbar__divider-line {
		width: 10rem;
		border-bottom: 2px solid var(--color-white);
	}

	ul.small-screens li,
	.navbar__divider-line {
		opacity: 0;
	}

	ul.small-screens li.open,
	.navbar__divider-line.open {
		animation: fadeIn 0.2s forwards;
		animation-delay: 0.3s;
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		to {
			opacity: 0;
		}
	}

	button.hamburger {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border: none;
		border-radius: 50%;
		width: 3rem;
		aspect-ratio: 1;
		background-color: transparent;
		z-index: 100;
	}

	button.hamburger:hover {
		cursor: pointer;
	}

	button.hamburger div {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 60%;
	}

	button.hamburger div,
	button.hamburger div::after,
	button.hamburger div::before {
		background-color: var(--color-white);
		height: 3px;
		border-radius: 2px;
		transition-duration: 200ms;
	}

	button.hamburger div::after,
	button.hamburger div::before {
		content: "";
		position: absolute;
		width: 100%;
	}

	button.hamburger div::after {
		transform: translateY(-0.5rem);
	}

	button.hamburger div::before {
		transform: translateY(0.5rem);
	}

	button.hamburger div.active {
		background-color: transparent;
	}

	button.hamburger div.active::before,
	button.hamburger div.active::after {
		background-color: var(--color-white);
		height: 3px;
	}

	button.hamburger div.active::before {
		transform: rotate(45deg);
	}

	button.hamburger div.active::after {
		transform: rotate(-45deg);
	}

	@media (min-width: 768px) {
		.navbar {
			padding: 0 2rem;
		}

		ul.small-screens {
			display: none;
		}

		button.hamburger {
			display: none;
		}

		ul.big-screens {
			display: flex;
			align-items: center;
		}
	}

	@media (min-width: 1440px) {
		.navbar {
			padding: 0 4rem;
		}

		ul {
			gap: 2rem;
		}
	}

	@media (hover: hover) {
		.navbar__link:not(:last-child)::after {
			content: "";
			position: absolute;
			z-index: -1;
			top: 0;
			width: 0;
			height: 100%;
			background-color: var(--color-primary-transparent);
			transition: 0.2s;
			animation: out 0.2s forwards;
		}

		.navbar__link:not(:last-child):hover::after {
			animation: in 0.2s forwards;
		}

		@keyframes in {
			from {
				width: 0;
				left: 0;
			}
			to {
				left: 0;
				width: 100%;
			}
		}

		@keyframes out {
			from {
				width: 100%;
				right: 0;
			}
			to {
				width: 0;
				right: 0;
			}
		}
	}
</style>
