<!--
	Usage:
	<ScrollProps className="show" threshold={0.5} once={true}>
		{#snippet children(props)}
			<div class={props.class}>CONTENT</div>
		{/snippet}
	</ScrollProps>

	Then style the div and the animation class as needed in the parent component. "Show", the animation class,
    can be any class name allowing for unique animations.
-->

<script lang="ts">
	import { onMount, type Snippet } from "svelte";

	interface Props {
		className?: string;
		threshold?: number;
		once?: boolean;
		children?: Snippet<[{ class: string }]>;
	}

	let { className = "", threshold = 0.1, once = false, children }: Props = $props();

	let slotProps = $state({
		class: ""
	});
	let container: HTMLElement;
	let hasAppliedClass = false;

	function handleIntersection(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (!once || (once && !hasAppliedClass)) {
					slotProps = { ...slotProps, class: className };
					hasAppliedClass = true;
				}
			} else {
				if (!once) {
					slotProps = { ...slotProps, class: "" };
				}
			}
		});
	}

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: threshold
		});
		if (container) {
			observer.observe(container);
		}

		return () => observer.disconnect();
	});
</script>

<div bind:this={container}>
	{@render children?.(slotProps)}
</div>
