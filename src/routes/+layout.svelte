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
	// let isScrolling = false;
	// let scrollTimeout: ReturnType<typeof setTimeout>;
	// let isResizing = false;
	// let resizeTimeout: ReturnType<typeof setTimeout>;

	onMount(() => {
		vh = window.innerHeight;

		// window.addEventListener("scroll", () => {
		// 	isScrolling = true;

		// 	// Clear the timeout if the user is still scrolling
		// 	clearTimeout(scrollTimeout);

		// 	// Set a timeout to reset the scrolling state after 100ms of inactivity
		// 	scrollTimeout = setTimeout(() => {
		// 		isScrolling = false;
		// 	}, 200);
		// });

		// window.addEventListener("resize", () => {
		// 	isResizing = true;

		// 	if (isResizing && !isScrolling) vh = window.innerHeight;

		// 	// Clear the timeout if the user is still resizing
		// 	clearTimeout(resizeTimeout);

		// 	// Set a timeout to reset the resizing state after 100ms of inactivity
		// 	resizeTimeout = setTimeout(() => {
		// 		isResizing = false;
		// 	}, 200);
		// });
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
