<script lang="ts">
	export let name = "";
	export let color = "--color-white";
	export let size = "24";

	let inputColor;
	switch (color) {
		default:
			inputColor = color;
			break;
	}

	let icons = [
		{
			name: "add",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`
		},
		{
			name: "login",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M481-120v-60h299v-600H481v-60h299q24 0 42 18t18 42v600q0 24-18 42t-42 18H481Zm-55-185-43-43 102-102H120v-60h363L381-612l43-43 176 176-174 174Z"/></svg>`
		},
		{
			name: "logout",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg>`
		},
		{
			name: "mail",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480-522 140-740v55l340 223Z"/></svg>`
		},
		{
			name: "person",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>`
		},
		{
			name: "settings",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"/></svg>`
		},
		{
			name: "dropdown",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M480-360 280-560h400L480-360Z"/></svg>`
		},
		{
			name: "edit",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M772-603 602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Z"/></svg>`
		},
		{
			name: "trash",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  width=${size} fill=${inputColor}><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`
		},
		{
			name: "search",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>`
		},
		{
			name: "visible",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`
		},
		{
			name: "hidden",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`
		},
		{
			name: "close",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>`
		},
		{
			name: "help",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
		},
		{
			name: "arrow-right",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>`
		},
		{
			name: "arrow-up",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>`
		},
		{
			name: "cookie",
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width=${size} fill=${inputColor}><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-75 29-147t81-128.5q52-56.5 125-91T475-881q21 0 43 2t45 7q-9 45 6 85t45 66.5q30 26.5 71.5 36.5t85.5-5q-26 59 7.5 113t99.5 56q1 11 1.5 20.5t.5 20.5q0 82-31.5 154.5t-85.5 127q-54 54.5-127 86T480-80Zm-60-480q25 0 42.5-17.5T480-620q0-25-17.5-42.5T420-680q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Zm-80 200q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360Zm260 40q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320ZM480-160q122 0 216.5-84T800-458q-50-22-78.5-60T683-603q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201-644 180.5-587T160-480q0 133 93.5 226.5T480-160Zm0-324Z"/></svg>`
		}
		// {
		// 	name: "",
		// 	svg: ``
		// }
	];

	let displayIcon = icons.find((e) => e.name === name);
</script>

{#if displayIcon}
	{@html displayIcon.svg}
{/if}
