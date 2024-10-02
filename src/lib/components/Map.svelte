<script lang="ts">
	import { Loader } from "@googlemaps/js-api-loader";
	import { onMount } from "svelte";

	let map: HTMLDivElement;

	onMount(() => {
		const position = { lat: 49.077472, lng: -117.80025 };
		let bounds = {
			north: position.lat + 0.04,
			south: position.lat - 0.04,
			east: position.lng + 0.04,
			west: position.lng - 0.04
		};

		const mapOptions = {
			center: position,
			zoom: 14,
			disableDefaultUI: true,
			styles: [
				{
					featureType: "all",
					elementType: "all",
					stylers: [
						{
							invert_lightness: true
						},
						{
							hue: "#00baff"
						}
					]
				},
				{
					featureType: "administrative",
					elementType: "all",
					stylers: [
						{
							hue: "#00acff"
						}
					]
				},
				{
					featureType: "administrative",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#e8e9ea"
						}
					]
				},
				{
					featureType: "landscape",
					elementType: "all",
					stylers: [
						{
							color: "#111111"
						}
					]
				},
				{
					featureType: "landscape.man_made",
					elementType: "geometry",
					stylers: [
						{
							color: "#000000"
						}
					]
				},
				{
					featureType: "poi",
					elementType: "all",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi",
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "road",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#3a3b3c"
						},
						{
							weight: "1.00"
						}
					]
				},
				{
					featureType: "road",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#0070d5"
						}
					]
				},
				{
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [
						{
							weight: "0.01"
						}
					]
				},
				{
					featureType: "road.arterial",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#0070d5"
						}
					]
				},
				{
					featureType: "transit",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#087299"
						}
					]
				},
				{
					featureType: "transit.station",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#262728"
						}
					]
				},
				{
					featureType: "transit.station",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#00a3e0"
						}
					]
				},
				{
					featureType: "transit.station",
					elementType: "labels.text.stroke",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "water",
					elementType: "all",
					stylers: [
						{
							color: "#114459"
						}
					]
				},
				{
					featureType: "water",
					elementType: "labels.text.fill",
					stylers: [
						{
							saturation: "100"
						},
						{
							color: "#087299"
						}
					]
				},
				{
					featureType: "water",
					elementType: "labels.icon",
					stylers: [
						{
							color: "#087299"
						}
					]
				}
			],
			restriction: {
				latLngBounds: bounds,
				strictBounds: false
			}
		};

		const loader = new Loader({
			apiKey: import.meta.env.VITE_MAPS_API_KEY,
			version: "weekly"
		});

		loader
			.importLibrary("maps")
			.then(({ Map }) => {
				new Map(map, mapOptions);
			})
			.catch((e) => {
				alert("Error loading map: " + e);
			});
	});
</script>

<div bind:this={map} class="map"></div>

<style>
	.map {
		height: 100%;
		width: 100%;
	}

	.map:focus,
	.map:active {
		outline: none;
	}
</style>
