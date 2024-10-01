<section>
	<h2>We'd love to hear from you!</h2>
	<a href="/contact" class="button button-primary"><span>Get In Touch</span></a>
	<!-- <img src="/assets/vectors/arrow-2.svg" width="70px" alt="curly arrow" /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	h2 {
		text-align: center;
		font-size: var(--font-heading-l);
	}

	h2,
	a {
		color: var(--color-white);
	}

	a {
		position: relative;
	}

	a::before {
		content: "";
		position: absolute;
		width: 70px;
		aspect-ratio: 2/1;
		top: -0.5rem;
		left: -70px;
		background: url("/assets/vectors/arrow-2.svg") no-repeat center;
		background-size: contain;
		display: block;
	}

	@media (min-width: 640px) {
		a::before {
			left: -90px;
		}
	}

	@media (min-width: 1024px) {
		section {
			gap: 2rem;
			padding: 0 var(--padding-inline) 6rem var(--padding-inline);
		}

		a::before {
			width: 100px;
			left: -120px;
			top: -1rem;
		}
	}

	@media (min-width: 1440px) {
		section {
			padding: 0 var(--padding-inline) 8rem var(--padding-inline);
		}
	}
</style>
