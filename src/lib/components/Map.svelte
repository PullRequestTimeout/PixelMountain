<script lang="ts">
	import { Loader } from "@googlemaps/js-api-loader";
	import { onMount } from "svelte";

	let map: HTMLDivElement;

	onMount(() => {
		const mapOptions = {
			center: { lat: 49.077472, lng: -117.80025 },
			zoom: 14,
			disableDefaultUI: true,
			styles: [
				{
					featureType: "all",
					elementType: "labels.text.fill",
					stylers: [
						{
							saturation: 36
						},
						{
							color: "#dedede"
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
							visibility: "off"
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
						}
					]
				},
				{
					featureType: "poi",
					elementType: "geometry.stroke",
					stylers: [
						{
							visibility: "on"
						},
						{
							color: "#000000"
						}
					]
				},
				{
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [
						{
							weight: "10.00"
						},
						{
							invert_lightness: true
						},
						{
							gamma: "7.24"
						},
						{
							lightness: "60"
						},
						{
							saturation: "66"
						}
					]
				},
				{
					featureType: "poi",
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#ffffff"
						},
						{
							invert_lightness: true
						}
					]
				},
				{
					featureType: "poi",
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "on"
						}
					]
				},
				{
					featureType: "poi.attraction",
					elementType: "all",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi.business",
					elementType: "all",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi.government",
					elementType: "all",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi.medical",
					elementType: "all",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi.park",
					elementType: "all",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi.place_of_worship",
					elementType: "all",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi.school",
					elementType: "all",
					stylers: [
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi.sports_complex",
					elementType: "geometry.stroke",
					stylers: [
						{
							visibility: "on"
						},
						{
							color: "#ffffff"
						}
					]
				},
				{
					featureType: "poi.sports_complex",
					elementType: "labels.text",
					stylers: [
						{
							visibility: "simplified"
						}
					]
				},
				{
					featureType: "poi.sports_complex",
					elementType: "labels.text.fill",
					stylers: [
						{
							visibility: "off"
						},
						{
							color: "#ff0000"
						}
					]
				},
				{
					featureType: "poi.sports_complex",
					elementType: "labels.text.stroke",
					stylers: [
						{
							gamma: "10.00"
						},
						{
							invert_lightness: true
						},
						{
							weight: "10.00"
						},
						{
							color: "#ffffff"
						},
						{
							visibility: "off"
						}
					]
				},
				{
					featureType: "poi.sports_complex",
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off"
						},
						{
							weight: "5.10"
						},
						{
							gamma: "0.00"
						},
						{
							hue: "#ff0000"
						}
					]
				},
				{
					featureType: "road.highway",
					elementType: "geometry.fill",
					stylers: [
						{
							color: "#393939"
						},
						{
							lightness: 17
						}
					]
				},
				{
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#000000"
						},
						{
							lightness: 29
						},
						{
							weight: 0.2
						}
					]
				},
				{
					featureType: "road.arterial",
					elementType: "geometry",
					stylers: [
						{
							color: "#1c1c1c"
						},
						{
							lightness: 18
						}
					]
				},
				{
					featureType: "road.local",
					elementType: "geometry",
					stylers: [
						{
							color: "#343434"
						},
						{
							lightness: 16
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
			]
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
