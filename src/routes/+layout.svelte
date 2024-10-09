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
</script>

<Navbar />
<slot />
<Footer />
<BackToTop>
	<Icon name="arrow-up" color="#fff" size="32" />
</BackToTop>
<CookieBanner />
