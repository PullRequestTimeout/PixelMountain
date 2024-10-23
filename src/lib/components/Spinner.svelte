<div class="pixel-container">
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
	<div class="logo-pixel"></div>
</div>

<style>
	div.pixel-container {
		position: relative;
		width: 50px;
	}

	.logo-pixel {
		width: 10px;
		height: 10px;
		background-color: #fff;
		border-radius: 2px;
		position: absolute;
	}

	.logo-pixel:nth-child(1) {
		translate: -1rem 0;
		animation: fadeInOut 2s ease-out 0s infinite forwards;
	}

	.logo-pixel:nth-child(2) {
		translate: -8px -11px;
		animation: fadeInOut 2s ease-out 0.17s infinite forwards;
	}

	.logo-pixel:nth-child(3) {
		translate: 0px -22px;
		animation: fadeInOut 2s ease-out 0.34s infinite forwards;
	}

	.logo-pixel:nth-child(4) {
		translate: 7px -33px;
		animation: fadeInOut 2s ease-out 0.51s infinite forwards;
	}

	.logo-pixel:nth-child(5) {
		translate: 14px -22px;
		animation: fadeInOut 2s ease-out 0.68s infinite forwards;
	}

	.logo-pixel:nth-child(6) {
		translate: 21px -11px;
		animation: fadeInOut 2s ease-out 0.85s infinite forwards;
	}

	.logo-pixel:nth-child(7) {
		translate: 14px 22px;
		animation: fadeInOut 2s ease-out 1.02s infinite forwards;
	}

	.logo-pixel:nth-child(8) {
		translate: 21px 11px;
		animation: fadeInOut 2s ease-out 1.19s infinite forwards;
	}

	.logo-pixel:nth-child(9) {
		translate: 28px 0;
		animation: fadeInOut 2s ease-out 1.36s infinite forwards;
	}

	.logo-pixel:nth-child(10) {
		translate: 35px -11px;
		animation: fadeInOut 2s ease-out 1.53s infinite forwards;
	}

	.logo-pixel:nth-child(11) {
		translate: 43px 0;
		animation: fadeInOut 2s ease-out 1.7s infinite forwards;
	}

	.logo-pixel:nth-child(12) {
		translate: 50px 11px;
		animation: fadeInOut 2s ease-out 1.87s infinite forwards;
	}

	/* Animate one pixel in at a time */
	@keyframes fadeInOut {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
