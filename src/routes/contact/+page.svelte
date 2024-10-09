<script>
	import Icon from "$lib/components/Icon.svelte";
	import Map from "$lib/components/Map.svelte";
</script>

<svelte:head>
	<title
		>Contact | Pixel Mountain Creative - Boutique digital agency nestled in the mountains of
		Beautiful British Columbia</title
	>
</svelte:head>

<section class="hero">
	<h2>Let's Talk</h2>
	<video autoplay muted loop playsinline>
		<source
			src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4"
			type="video/mp4"
		/>
	</video>
</section>
<section class="contact">
	<div class="contact__text">
		<h2>We'd love to hear from you!</h2>
		<div class="contact__links">
			<div><Icon name="phone" color="#fff" /><a href="tel:+2505129769">+1 (250) 512-9769</a></div>
			<div>
				<Icon name="mail" color="#fff" /><a href="mailto:hello@pixelmountain.ca"
					>hello@pixelmountain.ca</a
				>
			</div>
			<div>
				<Icon name="insta" color="#fff" /><a href="https://www.instagram.com/pixelmountaincreative/"
					>@pixelmountaincreative</a
				>
			</div>
			<div>
				<Icon name="location" color="#fff" />
				<a href="#map">Rossland, British Columbia</a>
			</div>
		</div>
	</div>
	<form action="https://www.formbackend.com/f/9529c04929f3acd1" method="post">
		<div class="contact__name-container">
			<div class="contact__input-container">
				<label for="name-input">Name:<span class="required">*</span></label>
				<input
					class="text-input"
					type="text"
					name="name"
					id="name-input"
					placeholder="John Doe"
					required
				/>
			</div>
			<div class="contact__input-container">
				<label for="email-input">Email:<span class="required">*</span></label>
				<input
					class="text-input"
					type="email"
					name="email"
					id="email-input"
					placeholder="johndoe@email.com"
					required
				/>
			</div>
		</div>
		<label for="subject-input">Subject:<span class="required">*</span></label>
		<input
			class="text-input"
			type="text"
			name="subject"
			id="subject-input"
			placeholder="Project inquiry..."
			required
		/>
		<label for="message-input">Message:<span class="required">*</span></label>
		<textarea
			class="text-input"
			id="message-input"
			name="message"
			placeholder="Your message here..."
			required
		></textarea>
		<button type="submit" class="button button-secondary"
			>Get In Touch<Icon name="arrow-right" color="#fff" /></button
		>
	</form>
	<img class="contact__wireframe" src="/assets/vectors/wireframe-4.svg" alt="wireframe vector" />
</section>
<section id="map" class="map">
	<Map />
</section>

<style>
	.hero {
		position: relative;
		height: 80svh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-white);
	}

	.hero video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		rotate: 180deg;
		filter: grayscale(100%);
	}

	.hero h2 {
		position: relative;
		z-index: 1;
		text-align: center;
		text-transform: uppercase;
		mix-blend-mode: difference;
		font-size: calc(var(--font-heading-l) * 2);
	}

	.contact {
		position: relative;
		background: linear-gradient(
			180deg,
			rgb(6, 6, 7) 0%,
			rgba(21, 21, 21, 0.5) 50%,
			rgba(21, 21, 21, 0) 100%
		);
		overflow: hidden;
	}

	.contact,
	.contact__text {
		color: var(--color-white);
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.contact__text,
	.contact form {
		z-index: 1;
	}

	.contact__text h2 {
		text-align: center;
		font-size: var(--font-heading-l);
	}

	.contact__links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact__links div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.contact__links a {
		transition: 0.2s;
	}

	@media (hover: hover) {
		.contact__links a:hover {
			color: var(--color-primary);
		}
	}

	.contact__links a {
		font-size: var(--font-body-m);
		font-weight: bold;
	}

	.contact form,
	.contact__name-container,
	.contact__input-container {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.contact .text-input {
		margin-bottom: 0.75rem;
		font-size: var(--font-body-s);
	}

	.contact form .button-secondary {
		color: var(--color-white);
	}

	.contact__wireframe {
		position: absolute;
		top: -20rem;
		left: -40rem;
		width: 80rem;
		opacity: 0.35;
	}

	.map {
		padding: 0;
		height: 25rem;
	}

	@media screen and (min-width: 640px) {
		.contact__links {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 0 3rem;
			gap: 1rem 2rem;
		}

		.contact__name-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.contact {
			flex-direction: row;
			gap: 2rem;
		}

		.contact__text {
			max-width: 50%;
			justify-content: space-between;
		}

		.contact__text h2 {
			text-align: left;
		}

		.contact__links {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 0;
		}

		.contact__name-container {
			display: flex;
			flex-direction: column;
			gap: 0;
		}

		.contact form {
			width: 50%;
		}

		.map {
			height: 30rem;
		}
	}

	@media screen and (min-width: 1440px) {
		.contact {
			gap: 6rem;
		}

		.map {
			height: 35rem;
		}
	}
</style>
