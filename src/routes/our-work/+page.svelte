<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import GetInTouch from "$lib/components/GetInTouch.svelte";
	import blogs from "$lib/data/blogs.json";
	import ScrollProps from "$lib/components/ScrollProps.svelte";

	// Return the first 100 characters of the first "text" content item from a blog post to use as an excerpt
	type ContentItem = {
		type: string;
		content: string;
	};

	type ProjectData = {
		content: ContentItem[];
	};

	function getExcerpt(data: ProjectData): string | null {
		// Find the first object where "type" is "text"
		const textContent = data.content.find((item) => item.type === "text");

		// If found, return the first 100 characters of the "content" string
		if (textContent && textContent.content) {
			return textContent.content.substring(0, 100) + (textContent.content.length > 40 ? "..." : "");
		}

		// Return null if no suitable content is found
		return null;
	}
</script>

<svelte:head>
	<title
		>Our Work | Pixel Mountain Creative - Boutique digital agency nestled in the mountains of
		Beautiful British Columbia</title
	>
</svelte:head>

<main>
	<section class="hero hero--top-pad">
		<h2>
			We take pride in every one of our creations being a <span class="highlight"
				>polished product</span
			>
		</h2>
	</section>
	<section class="featured-work">
		<div class="featured-work__text">
			<div>
				<em>Featured Work</em>
				<h2>Secret Spots PWA</h2>
			</div>
			<p>
				Secrets Spots was build by the team to showcase some more advanced features available to
				Pixel Mountain clients. These include an auth system (login, user management), progressive
				web app native-like features, and database integration for dynamic content.
			</p>
			<p>Optimized design for both mobile and desktop use.</p>
			<a href="/blog/secret-spots" class="button button-secondary"
				>See More<Icon name="arrow-right" color="#fff" /></a
			>
		</div>
		<div class="featured-work__image">
			<img
				src="/assets/images/blogs/secret-spots-mockup.png"
				alt="Secret spots mockup"
				width="958"
				height="758"
			/>
		</div>
	</section>
	<section class="recent-work">
		<ScrollProps let:props className="show" threshold={1} once={true}>
			<div class="accent-title {props.class}">
				<img src="/assets/vectors/arrow-1.svg" width="40px" alt="arrow right" />
				<h2>Some More Of Our Work</h2>
			</div>
		</ScrollProps>
		<div class="recent-work__card-container">
			{#each blogs as blog}
				<div class="recent-work__card">
					<img src={blog.heroImage} alt={blog.title + " hero image"} />
					<div class="recent-work__card-text">
						<em>{blog.type} — {blog.date}</em>
						<h3>{blog.title}</h3>
						<p>{getExcerpt(blog)}</p>
						<a href="/blog/{blog.slug}" class="button button-secondary"
							>See More<Icon name="arrow-right" color="#fff" /></a
						>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<GetInTouch />
</main>

<style>
	* {
		color: var(--color-white);
	}

	.hero {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero--top-pad {
		padding-top: 30svh;
	}

	.hero h2 {
		font-size: var(--font-heading-l);
		text-align: center;
	}

	.featured-work {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 0 var(--padding-inline);
	}

	.featured-work__text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.featured-work__text p,
	.featured-work__text em {
		font-size: var(--font-body-m);
	}

	.featured-work__text h2 {
		font-size: var(--font-heading-l);
	}

	.featured-work__image {
		display: flex;
		justify-content: center;
	}

	.featured-work__image img {
		width: auto;
		height: auto;
		max-width: 18rem;
	}

	@media screen and (min-width: 640px) {
		.featured-work__text {
			gap: 2rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.hero h2 {
			max-width: 60%;
		}

		.featured-work {
			flex-direction: row;
			width: 100%;
		}

		.featured-work__text {
			width: 50%;
		}

		.featured-work__image {
			justify-content: flex-end;
			align-items: center;
			width: 50%;
		}

		.featured-work__image img {
			width: auto;
			height: auto;
			max-width: 25rem;
			max-height: 20rem;
		}
	}

	@media screen and (min-width: 1440px) {
		.featured-work__image img {
			width: auto;
			height: auto;
			max-width: 35rem;
			max-height: 40rem;
		}
	}

	/* Recent Work ----------------------------------- */

	.recent-work {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.recent-work__card-container {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.recent-work__card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 20rem;
	}

	.recent-work__card img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
	}

	.recent-work__card-text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.recent-work__card-text .button {
		margin-top: 0.25rem;
	}

	.recent-work__card-text em,
	.recent-work__card-text h3 {
		text-transform: capitalize;
	}
</style>
