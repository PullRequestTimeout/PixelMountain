<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import ScrollProgress from "$lib/components/ScrollProgress.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	// function to calculate reading time
	type ContentItem = {
		type: string;
		content: string;
	};

	function readingTime(content: ContentItem[]): number {
		const wordsPerMinute = 200;
		const text = content
			.filter((item) => item.type === "paragraph")
			.map((item) => item.content)
			.join(" ");
		const wordCount = text.split(/\s+/).length;
		return Math.ceil(wordCount / wordsPerMinute);
	}
</script>

<svelte:head>
	<title>{data.blog.title} | Pixel Mountain Creative Blog</title>
</svelte:head>

<ScrollProgress />
<main>
	<header>
		<h1>{data.blog.title}</h1>
		{#if data.blog.type === "project"}
			<em>A Pixel Mountain Creative project</em>
		{:else if data.blog.type === "blog post"}
			<em>{data.blog.subtitle}</em>
		{/if}
		<img src={data.blog.heroImage} alt={`${data.blog.title} hero image`} />
	</header>
	<section class="blog-content">
		<p>{data.blog.date} — {readingTime(data.blog.content) + " min read"}</p>
		{#each data.blog.content as content}
			{#if content.type === "image"}
				<div class="blog-content__image-container">
					<img
						class="blog-content__image"
						sizes="(min-width: 50em) 50em, 100vw"
						srcset="https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_640/{content.content} 256w,
						https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_768/{content.content} 640w,
						https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_1024/{content.content} 768w,
						https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_1280/{content.content} 1024w"
						src="https://res.cloudinary.com/dvdwz9dpc/image/upload/f_auto/q_auto/c_scale,w_512/{content.content}"
						alt=""
					/>
				</div>
			{:else if content.type === "paragraph"}
				<p>{content.content}</p>
			{/if}
		{/each}
		{#if data.blog.linkBool && data.blog.link}
			<a href={data.blog.link} class="button button-primary" target="_blank"
				><span>See the project</span><Icon name="arrow-right" color="#fff" />
			</a>
		{/if}

		<div class="blog-footer__divider"></div>
		<div class="blog-footer">
			<div class="blog-footer__attribution">
				<img src={data.blog.authorImage} alt={data.blog.authorImage} />
				<div>
					<p>By {data.blog.author}</p>
					<em>{data.blog.authorTitle}</em>
				</div>
			</div>
			<a href="/blog" class="button button-secondary"><span>Back to Blog</span></a>
		</div>
	</section>
</main>

<style>
	* {
		color: var(--color-white);
	}

	header {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: calc(var(--vh, 100svh) * 0.3) var(--padding-inline);
		width: 100%;
	}

	header h1 {
		font-size: var(--font-heading-l);
	}
	header h1,
	header em {
		text-align: center;
	}

	header em {
		font-size: var(--font-body-m);
	}

	header img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		filter: brightness(0.5);
	}

	.blog-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-inline: var(--padding-inline);
	}

	.blog-content p {
		font-size: var(--font-body-s);
		line-height: 1.6;
	}

	.blog-content img.blog-content__image {
		width: 100%;
		height: auto;
		margin: 1rem 0;
		max-width: 45rem;
	}

	.blog-content__image-container {
		display: flex;
		justify-content: center;
	}

	a.button-primary {
		margin: 1rem 0;
	}

	.blog-footer__divider {
		width: 100%;
		border-bottom: 2px solid var(--color-white);
	}

	.blog-footer {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.blog-footer__attribution {
		display: flex;
		gap: 1rem;
	}

	.blog-footer__attribution img {
		width: 50px;
		height: 50px;
	}

	@media screen and (min-width: 768px) {
		.blog-footer {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
