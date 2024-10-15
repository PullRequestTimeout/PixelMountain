<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import { cookieBanner } from "$lib/stores/uiStore";

	let year = new Date().getFullYear();
	function showCookieBanner() {
		cookieBanner.set(true);
		localStorage.setItem("cookieBannerAccepted", "false");
	}
</script>

<footer>
	<div class="footer__main">
		<div class="heading">
			<a href="/"><div class="logo-container"><Logo /></div></a>
			<p><em>Based in the West Kootenays of Beautiful British Columbia</em></p>
		</div>
		<div class="quick-links">
			<h3>Quick Links</h3>
			<div class="quick-links__links">
				<a href="/services">Services</a>
				<a href="/about-us">About Us</a>
				<a href="/our-work">Our Work</a>
				<a href="/contact">Contact</a>
			</div>
		</div>
		<div class="socials">
			<div class="socials__link">
				<img src="/assets/vectors/mail.svg" alt="email icon" /><a
					href="mailto:hello@pixelmountain.ca">hello@pixelmountain.ca</a
				>
			</div>
			<div class="socials__link">
				<img src="/assets/vectors/insta.svg" alt="insta icon" /><a
					href="https://www.instagram.com/pixelmountaincreative/">@pixelmountaincreative</a
				>
			</div>
		</div>
	</div>
	<div class="divider-line"></div>
	<div class="footer__secondary">
		<div class="legal">
			<a href="/privacy-policy">Privacy Policy</a>
			<button on:click={showCookieBanner}>Cookie Disclaimer</button>
		</div>
		<div class="copy">
			<p>&copy; {year} Pixel Mountain Creative</p>
		</div>
	</div>
</footer>

<style>
	footer {
		color: var(--color-white);
		background: url("/assets/vectors/mountain-wireframe.svg") no-repeat center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	footer p,
	footer a,
	footer button,
	footer em {
		font-size: var(--font-body-m);
	}

	.footer__main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	footer a,
	footer button {
		transition: 0.2s;
	}

	footer a:hover,
	footer button:hover {
		color: var(--color-primary);
	}

	.divider-line {
		width: 100%;
		border-bottom: 2px solid var(--color-white);
	}

	.heading {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.heading p {
		font-size: var(--font-body-m);
		margin-top: -1rem;
	}

	.quick-links h3 {
		font-family: var(--system-font);
	}

	.quick-links__links {
		display: flex;
		gap: 0.5rem;
	}

	.legal {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	.legal button {
		background: none;
		border: none;
		color: var(--color-white);
		cursor: pointer;
	}

	.socials {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.socials__link {
		display: flex;
		gap: 0.5rem;
	}

	.socials__link img {
		width: 1rem;
	}

	.socials__link a {
		font-weight: bold;
	}

	.logo-container {
		scale: 0.75;
		transform-origin: left;
	}

	.copy {
		text-align: center;
	}

	.footer__secondary {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media (min-width: 640px) {
		.heading p {
			margin-top: 0;
		}

		.logo-container {
			scale: 1;
		}

		.quick-links {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.quick-links__links {
			gap: 2rem;
		}

		.socials {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	@media screen and (min-width: 768px) {
		.heading {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			gap: 2rem;
		}

		.footer__secondary {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
		}

		.copy {
			text-align: left;
			min-width: fit-content;
		}

		.legal {
			justify-content: flex-end;
			gap: 1rem;
		}
	}

	@media screen and (min-width: 1024px) {
		footer p,
		footer a,
		footer button,
		footer em {
			font-size: var(--font-body-s);
		}

		.footer__main {
			flex-direction: row;
			justify-content: space-between;
		}

		.heading {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			gap: 0rem;
		}

		.quick-links__links {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem 2rem;
		}

		.socials {
			flex-direction: column;
			justify-content: flex-start;
		}

		.quick-links,
		.socials {
			margin-top: 1rem;
		}
	}
</style>
