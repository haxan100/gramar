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
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>

					</nav>
				</div>

				<div class="pull-right col-sm-3 col-xs-12 text-right" style="padding:0;" id="searchSec">

					<a href=" <?= base_url(); ?>Gramar/kamusby/a" class="logregBtn">Kamus Arti</a>
					<a href=" <?= base_url(); ?>Gramar/typo" class="logregBtn">Kata Dasar</a>


					<i class="fa fa-search pull-right topsearch"></i>
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
