<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "$lib/components/Icon.svelte";
	import { onMount } from "svelte";

	let count = 5;

	onMount(() => {
		const interval = setInterval(() => {
			count--;
			if (count === 0) {
				clearInterval(interval);
				window.location.href = "/";
			}
		}, 1000);
	});
</script>

<section>
	{#if $page.status === 404}
		<h2>404</h2>
		<p>Page not found</p>
		<p>Redirecting you home in {count}</p>
	{:else if $page.error}
		<h2>{$page.status}</h2>
		<p>{$page.error.message}</p>
		<a href="/" class="button button-secondary">Home<Icon name="arrow-right" /></a>
	{:else}
		<h2>Oops...</h2>
		<p>Something went wrong.</p>
		<a href="/" class="button button-secondary">Home<Icon name="arrow-right" /></a>
	{/if}
</section>

<style>
	* {
		color: var(--color-white);
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100svh;
		text-align: center;
	}

	h2 {
		font-size: calc(var(--font-heading-l) * 2);
	}

	p {
		font-size: var(--font-body-m);
		font-weight: bold;
	}
</style>
