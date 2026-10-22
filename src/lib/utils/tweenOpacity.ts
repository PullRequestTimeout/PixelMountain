import type { EmblaCarouselType } from "embla-carousel";

const TWEEN_FACTOR = 2.5;

const numberWithinRange = (number: number, min: number, max: number) =>
	Math.min(Math.max(number, min), max);

const calculateTweenValuesOpacity = (emblaApi: EmblaCarouselType): number[] => {
	const engine = emblaApi.internalEngine();
	const scrollProgress = emblaApi.scrollProgress();

	return emblaApi.scrollSnapList().map((scrollSnap, index) => {
		if (!emblaApi.slidesInView().includes(index)) return 0;
		let diffToTarget = scrollSnap - scrollProgress;

		if (engine.options.loop) {
			engine.slideLooper.loopPoints.forEach((loopItem) => {
				const target = loopItem.target();
				if (index === loopItem.index && target !== 0) {
					const sign = Math.sign(target);
					if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
					if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
				}
			});
		}
		const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
		return numberWithinRange(tweenValue, 0, 1);
	});
};

export const setupTweenOpacity = (emblaApi: EmblaCarouselType) => {
	const tweenNodes = emblaApi.slideNodes();

	const applyTweenOpacity = () => {
		const tweenValues = calculateTweenValuesOpacity(emblaApi);
		tweenValues.forEach((tweenValue, index) => {
			tweenNodes[index].style.opacity = tweenValue.toString();
		});
	};

	const removeTweenOpacity = () => {
		tweenNodes.forEach((slide) => slide.removeAttribute("style"));
	};

	return {
		applyTweenOpacity,
		removeTweenOpacity
	};
};
