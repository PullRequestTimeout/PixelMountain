import type { Action } from "svelte/action";

// Dispatches an "outclick" event on the node when a click lands outside it (listen with onoutclick)
export const clickOutside: Action<
	HTMLElement,
	undefined,
	{ onoutclick: (e: CustomEvent) => void }
> = (node) => {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
};
