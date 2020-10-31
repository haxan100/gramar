<style>
	#header {
		top: 0px;
		left: 50%;
		transform: translateX(-50%);
		position: fixed;
		background-color: grey;
		width: 100%;
		max-width: 640px;
		z-index: 1;
		text-align: center;
		display: block;
	}

	/* .textatas {
		margin-top: -42px;
		padding: 0;
	} */

	@media (min-width:320px) {
		/* .textatas {
			margin-top: -12%;
			padding: 0;
		} */

		/* smartphones, iPhone, portrait 480x320 phones */
	}

	@media (min-width:481px) {
		/* .textatas {
			margin-top: -12%;
			padding: 0;
		} */

		/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	}

	@media (min-width:641px) {
		/* .textatas {
			margin-top: -12%;
			padding: 0;
		} */

		/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	}

	@media (min-width:961px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
	}
</style>

<div class="fw">
	<div class="model-bg"></div>
	<link href="<?= base_url(); ?>assets\style\style.css" rel="stylesheet">
	<script src="<?= base_url(); ?>assets\js\javascript.js"></script>
	<header>


		<div class="container-fluid noP" style="position:relative;">
			<div class="container top-bar noP clear">
				<div class="col-sm-9 noP">
					<nav class="navbar nav navbar-default" role="navigation" style="margin-bottom:0;">
						<!-- Brand and toggle get grouped for better mobile display -->
						<div class="navbar-header">
							<a href="<?= base_url(); ?>Gramar"><img src="<?= base_url(); ?>assets\images\logo.jpeg" alt="PrePost SEO" height="36" class="pull-left logo"></a>

						</div>

					</nav>
				</div>

				<div class="textatas" style="padding:0;" id="searchSec">

					<a href=" <?= base_url(); ?>Gramar/kamusby/a" class="logregBtn">Kamus Arti</a>
					<a href=" <?= base_url(); ?>Gramar/typo" class="logregBtn">Kata Dasar</a>


					<i class="fa fa-search textatas topsearch"></i>
				</div>
			</div>

			<div class="sbNew">
				<div class="container">
					<div class="col-md-12 noP">
						<div class="col-md-8 col-md-offset-2 noP sbNewinner" id="header_search">
							<input class="inputSN" id="inputSN" type="search">
							<span class="cross" id="crossNS">X</span>
							<div class="search-results" style="display:none;">
								<div class="withlangSearch"></div>
								<div class="withoutlangSearch"></div>
								<div class="noresult"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
