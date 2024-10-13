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

	// Fix vh for mobile devices
	let vh: number;
	type Orientation =
		| "portrait-primary"
		| "portrait-secondary"
		| "landscape-primary"
		| "landscape-secondary";
	let currentOrientation: Orientation;
	onMount(() => {
		// Set the initial vh value on page load
		vh = window.innerHeight;
		// Set the initial value of the orientation
		currentOrientation = screen.orientation.type;
		// Set the initial value of the vh css variable
		document.documentElement.style.setProperty("--vh", `${vh}px`);

		// --vh will only be updated when the orientation changes or if the device is in landscape mode. Will probably still be jumpy, but will make the case considerably more niche.
		window.addEventListener("resize", () => {
			if (currentOrientation !== screen.orientation.type) {
				currentOrientation = screen.orientation.type;
				vh = window.innerHeight;
				document.documentElement.style.setProperty("--vh", `${vh}px`);
			} else if (
				currentOrientation === screen.orientation.type &&
				screen.orientation.type.includes("landscape")
			) {
				vh = window.innerWidth;
				document.documentElement.style.setProperty("--vh", `${vh}px`);
			} else {
				console.log("Portrait mode");
			}
		});
	});
</script>

<Navbar />

<slot />
<Footer />
<BackToTop>
	<Icon name="arrow-up" color="#fff" size="32" />
</BackToTop>
<CookieBanner />
