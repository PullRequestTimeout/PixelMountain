<div class="logo">
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
	<h1>PixelMountain<span>.</span></h1>
</div>

<style>
	.logo {
		display: flex;
		align-items: center;
		scale: 1;
	}

	@media (min-width: 768px) {
		.logo {
			scale: 2;
		}
	}

	div.pixel-container {
		position: relative;
		translate: 0 -0.3rem;
		scale: 0.75;
	}

	.logo-pixel {
		width: 13px;
		height: 13px;
		background-color: #fff;
		border-radius: 2px;
		position: absolute;
		left: 1.25rem;
		scale: 0.75;
	}

	.logo-pixel:nth-child(1) {
		translate: -1rem 0;
	}

	.logo-pixel:nth-child(2) {
		translate: -8px -11px;
	}

	.logo-pixel:nth-child(3) {
		translate: 0px -22px;
	}

	.logo-pixel:nth-child(4) {
		translate: 7px -33px;
	}

	.logo-pixel:nth-child(5) {
		translate: 14px -22px;
	}

	.logo-pixel:nth-child(6) {
		translate: 21px -11px;
	}

	.logo-pixel:nth-child(7) {
		translate: 14px 22px;
	}

	.logo-pixel:nth-child(8) {
		translate: 21px 11px;
	}

	.logo-pixel:nth-child(9) {
		translate: 28px 0;
	}

	.logo-pixel:nth-child(10) {
		translate: 35px -11px;
	}

	.logo-pixel:nth-child(11) {
		translate: 43px 0;
	}

	.logo-pixel:nth-child(12) {
		translate: 50px 11px;
	}

	h1 {
		font-family: "Josefin Sans";
		font-weight: bold;
		letter-spacing: -5px;
		font-size: 3rem;
		margin-left: 3.7rem;
	}

	.logo {
		color: #fff;
		mix-blend-mode: difference;
	}

	span {
		margin-left: 2px;
	}
</style>
