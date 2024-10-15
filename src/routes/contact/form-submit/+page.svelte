<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
</script>

<main>
	<h1>Form Submitted Successfully</h1>
	<p>Thanks for reaching out to Pixel Mountain Creative! We will get back to you soon.</p>
	<a href="/" class="button button-secondary"
		><span>Home</span><Icon name="arrow-right" color="#fff" /></a
	>
</main>

<style>
	* {
		color: var(--color-white);
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		height: var(--vh, 100vh);
		text-align: center;
		padding: 1rem;
	}

	h1 {
		font-size: var(--font-heading-l);
	}

	p {
		font-size: var(--font-body-m);
	}

	@media screen and (min-width: 768px) {
		main {
			gap: 2rem;
			padding: 2rem;
		}
	}
</style>
