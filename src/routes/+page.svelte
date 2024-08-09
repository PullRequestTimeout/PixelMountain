<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
</script>

<svelte:head>
	<title
		>Pixel Mountain Creative - Boutique digital agency nestled in the mountains of Beautiful British
		Columbia</title
	>
</svelte:head>

<main>
	<p class="coming-soon">COMING SOON</p>
	<div class="logo">
		<Logo />
	</div>
	<p class="blurb">
		Boutique digital agency nestled in the mountains of Beautiful British Columbia.
	</p>
	<form action="https://www.formbackend.com/f/9529c04929f3acd1" method="post">
		<label for="name-input">Name:<span class="required">*</span></label>
		<input type="text" name="name" id="name-input" placeholder="John Doe" required />
		<label for="email-input">Email:<span class="required">*</span></label>
		<input type="email" name="email" id="email-input" placeholder="johndoe@email.com" required />
		<label for="subject-input">Subject:<span class="required">*</span></label>
		<input
			type="text"
			name="subject"
			id="subject-input"
			placeholder="Project inquiry..."
			required
		/>
		<label for="message-input">Message:<span class="required">*</span></label>
		<textarea id="message-input" name="message" placeholder="Your message here..." required
		></textarea>
		<div class="button-container">
			<button type="submit"
				>Get In Touch <svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-arrow-right"
					><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"
					></polyline></svg
				></button
			>
		</div>
	</form>
</main>
<video autoplay muted loop playsinline>
	<source
		src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4"
		type="video/mp4"
	/>
</video>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		font-family: sans-serif;
		overflow: auto;
		gap: 1rem;
	}

	p.coming-soon {
		font-weight: 700;
		margin-bottom: 0rem;
		color: white;
		margin-top: 2rem;
	}

	p.blurb {
		color: white;
		text-align: center;
		font-style: italic;
		max-width: 15rem;
		font-weight: 100;
	}

	video {
		position: fixed;
		top: -10rem;
		left: 0;
		width: 100%;
		height: calc(100vh + 10rem);
		object-fit: cover;
		z-index: -1;
	}

	form {
		display: flex;
		flex-direction: column;
		background-color: #151515c9;
		padding: 1.5rem;
		border-radius: 1rem;
		color: white;
		width: 20rem;
		max-width: calc(100vw - 5rem);
		backdrop-filter: blur(2px);
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		form {
			padding: 2rem;
		}
	}

	form label {
		margin-bottom: 0.25rem;
	}

	form input,
	form textarea {
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		font-family: sans-serif;
		font-size: 0.9rem;
		padding: 0.5rem;
	}

	form input,
	form textarea,
	form button {
		color: white;
		border: 2px solid #fff;
		background-color: transparent;
	}

	form input:hover,
	form textarea:hover,
	form button:hover {
		outline: 1px solid white;
	}
	form input:focus-visible,
	form textarea:focus-visible,
	form button:focus-visible {
		border-color: var(--color-primary);
		outline: none;
	}

	form textarea {
		resize: none;
		height: 4rem;
		margin-bottom: 1rem;
	}

	form .required {
		color: var(--color-primary);
	}

	form .button-container {
		display: flex;
		justify-content: center;
	}

	form button {
		width: fit-content;
		border-radius: 2rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		padding: 0.25rem 1rem;
		font-weight: 700;
	}

	form button svg {
		margin-left: 0.5rem;
		height: 20px;
	}
</style>
