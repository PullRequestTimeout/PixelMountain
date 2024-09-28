<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import BackToTop from "$lib/components/BackToTop.svelte";
	import CookieBanner from "$lib/components/CookieBanner.svelte";
	import Icon from "$lib/components/Icon.svelte";
</script>

<Navbar />
<slot />
<Footer />
<BackToTop>
	<Icon name="arrow-up" color="#fff" size="32" />
</BackToTop>
<CookieBanner />
