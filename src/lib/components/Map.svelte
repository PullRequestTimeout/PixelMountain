<script lang="ts">
	import { Loader } from "@googlemaps/js-api-loader";
	import { onMount } from "svelte";

	let map: HTMLDivElement;

	onMount(() => {
		const position = { lat: 49.077472, lng: -117.80025 };
		let bounds = {
			north: position.lat + 0.1,
			south: position.lat - 0.1,
			east: position.lng + 0.1,
			west: position.lng - 0.1
		};

		const mapOptions = {
			center: position,
			zoom: 14,
			disableDefaultUI: true,
			styles: [
				{
					featureType: "all",
					elementType: "labels",
					stylers: [
						{
							visibility: "on"
						}
					]
				},
				{
					featureType: "all",
					elementType: "labels.text.fill",
					stylers: [
						{
							saturation: 36
						},
						{
							color: "#000000"
						},
						{
							lightness: 40
						}
					]
				},
				{
					featureType: "all",
					elementType: "labels.text.stroke",
					stylers: [
						{
							visibility: "on"
						},
						{
							color: "#000000"
						},
						{
							lightness: 16
						}
					]
				},
				{
					featureType: "all",
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "administrative",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 20
						}
					]
				},
				{
					featureType: "administrative",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 17
						},
						{
							weight: 1.2
						}
					]
				},
				{
					featureType: "administrative.country",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#838383"
						}
					]
				},
				{
					featureType: "administrative.locality",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#c4c4c4"
						}
					]
				},
				{
					featureType: "administrative.neighborhood",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#aaaaaa"
						}
					]
				},
				{
					featureType: "landscape",
					elementType: "geometry",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 20
						}
					]
				},
				{
					featureType: "poi",
					elementType: "geometry",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 21
						},
						{
							visibility: "on"
						}
					]
				},
				{
					featureType: "poi.business",
					elementType: "geometry",
					stylers: [
						{
							visibility: "on"
						}
					]
				},
				{
					featureType: "road.highway",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#6e6e6e"
						},
						{
							lightness: "0"
						}
					]
				},
				{
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "road.highway",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#ffffff"
						}
					]
				},
				{
					featureType: "road.arterial",
					elementType: "geometry",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 18
						}
					]
				},
				{
					featureType: "road.arterial",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#575757"
						}
					]
				},
				{
					featureType: "road.arterial",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#ffffff"
						}
					]
				},
				{
					featureType: "road.arterial",
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#2c2c2c"
						}
					]
				},
				{
					featureType: "road.local",
					elementType: "geometry",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 16
						}
					]
				},
				{
					featureType: "road.local",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#999999"
						}
					]
				},
				{
					featureType: "transit",
					elementType: "geometry",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 19
						}
					]
				},
				{
					featureType: "water",
					elementType: "geometry",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 17
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
