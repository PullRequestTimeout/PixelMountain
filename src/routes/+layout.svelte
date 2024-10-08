<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import BackToTop from "$lib/components/BackToTop.svelte";
	import CookieBanner from "$lib/components/CookieBanner.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import { onMount } from "svelte";
	import { beforeNavigate, afterNavigate } from "$app/navigation";

	// Fix smooth scrolling for internal links
	let root: any;
	onMount(() => {
		root = document.getElementsByTagName("html")[0];
		root?.classList.add("smoothscroll");
	});
	beforeNavigate(() => {
		root?.classList.remove("smoothscroll");
	});
	afterNavigate(() => {
		root?.classList.add("smoothscroll");
	});

	// fix the lack of dynamic viewport height on ios firefox (pls firefox my beloved 😢)
	let vh = 0;
	let isResizing = false;
	onMount(() => {
		// Set viewheight on initial page load
		vh = window.innerHeight;
		// Update vh on resize, shouldn't affect firefox ios
		window.addEventListener("resize", () => {
			if (!isResizing) handleResize();
		});

		function handleResize() {
			if (isResizing) {
				return;
			} else {
				isResizing = true;
				setTimeout(() => {
					vh = window.innerHeight;

					isResizing = false;
				}, 500);
			}
		}
	});
</script>

<Navbar />
<div style="--js-vh: {vh}px">
	<slot />
</div>
<Footer />
<BackToTop>
	<Icon name="arrow-up" color="#fff" size="32" />
</BackToTop>
<CookieBanner />
<p>Viewheight: {vh}px</p>

<style>
	p {
		position: fixed;
		top: 0;
		right: 0;
		background: var(--color-black);
		color: var(--color-white);
		padding: 1rem;
		z-index: 1000;
	}
</style>
