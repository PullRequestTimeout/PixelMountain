<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import { cookieBanner } from "$lib/stores/uiStore";
</script>

{#if $cookieBanner}
	<div class="cookie-banner">
		<Icon name="cookie" color="var(--color-white)" size="48" />
		<p>This website uses cookies to ensure you get the best experience on our website</p>
		<button class="button button-primary" on:click={() => cookieBanner.set(false)}>Got it!</button>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		z-index: 1000;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1rem var(--padding-inline);
		background-color: #00000080;
		backdrop-filter: blur(2px);
		color: var(--color-white);
		font-size: var(--font-body-s);
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}

	button {
		min-width: fit-content;
	}
</style>
