<script lang="ts">
	import blogs from "$lib/data/blogs.json";
	import Icon from "$lib/components/Icon.svelte";

	// Only get the first 3 blog posts
	$: firstThreeBlogs = blogs.slice(0, 3);
</script>

<section class="recent-works">
	<div class="accent-title">
		<img src="/assets/vectors/arrow-1.svg" width="40px" alt="arrow right" />
		<h2>What We've Been Up To</h2>
	</div>
	<div class="recent-works__container">
		{#each firstThreeBlogs as blog, i}
			<a href={`/blog/${blog.slug}`} id={`recent-works__item-${i}`}>
				<div class="recent-works__item">
					<img src={blog.cardImage} alt={`${blog.title} image`} />
					<div class="recent-works__item-tags">
						{#each blog.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
					<div class="recent-works__item-text">
						<h3>{blog.title}</h3>
						{#if blog.subtitle}
							<p>{blog.subtitle}</p>
						{/if}
					</div>
				</div></a
			>
		{/each}
	</div>
	<a href="/our-work" class="button button-secondary"
		>See More <Icon name="arrow-right" color="#fff" /></a
	>
</section>

<style>
	.recent-works {
		color: black;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.recent-works::after {
		content: "";
		background-color: var(--color-white);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 70%;
		z-index: -1;
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}

	.recent-works__container {
		display: flex;
		justify-content: center;
	}

	.recent-works__item {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 15rem;
		height: 20rem;
		border-radius: 1rem;
		padding: 1rem;
		overflow: hidden;
		color: #fff;
		z-index: 1;
	}

	#recent-works__item-2 {
		translate: 0 -2rem;
	}

	#recent-works__item-1,
	#recent-works__item-2 {
		display: none;
	}

	.recent-works__item img {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.3s;
		filter: brightness(0.6);
	}

	@media (hover: hover) {
		.recent-works__item:hover img {
			transform: scale(1.1);
			filter: brightness(0.8);
		}
	}

	.recent-works__item-tags {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	a.button-secondary {
		color: #fff;
		align-self: flex-end;
	}

	@media screen and (min-width: 640px) {
		.recent-works__container {
			justify-content: space-evenly;
		}

		#recent-works__item-0 {
			transform: translate(0, 2rem);
		}

		#recent-works__item-1 {
			display: block;
		}
	}

	@media screen and (min-width: 1024px) {
		.recent-works__container {
			width: 100%;
			justify-content: space-evenly;
		}

		.recent-works__item {
			width: 17.5rem;
			height: 22.5rem;
		}

		#recent-works__item-2 {
			display: block;
		}
	}

	@media screen and (min-width: 1440px) {
		.recent-works__item {
			width: 20rem;
			height: 25rem;
		}
	}
</style>
