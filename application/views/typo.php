<!-- HEADER -->

<link href="<?= base_url(); ?>assets\style\stylekamus.css" rel="stylesheet">
<style>
	.bege {
		background: linear-gradient(-145deg, #3ACD99, #0796B6) !important;
	}

	.keyword__containers {
		padding: 1000px;
		margin-bottom: 3%;
		position: relative;
		padding: 32px 24px;
		background-color: #FFFFFF;
		border-radius: 8px;
		box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
		z-index: 1;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: large;
		font-size: x-large;
		font-weight: 600;
		margin: 0;
		text-align: center;

		PADDING-BOTTOM: 2% !important;
		padding-top: 2% !important;
	}

	.keyword__container {
		padding: 9px 3px;
		margin-bottom: 3%;
	}

	#foto_wrapper {
		max-width: 20%;
		margin-top: -33%;
		max-height: 23%;
	}

	@media only screen and (max-width: 600px) {
		#foto_wrapper {
			max-width: 20%;
			margin-top: -52%;
			max-height: 23%;
			z-index: 2;
		}
	}

	/* @media only screen and (min-width: 1024px) */
	/* .garistengah {
		border-left: 5px solid black;
		height: 100%;
		position: fixed;
		left: 50%;
		margin-left: -3px;
		top: 0;
	} */
	.form-control {
		background-color: #e4e4e4;
	}

	.container {
		width: 970px;
		padding-top: 10px;
	}

	.char__containerss {
		position: relative;
		/* margin-bottom: 32px; */
		/* padding: 32px 24px 24px; */
		background-color: #FFFFFF;
		border-radius: 8px;
		box-shadow: 1 4px 10px 0 rgba(0, 0, 0, 0.1);
		z-index: 2;
	}
</style>
<div class="loadeng">
	<p>
		<img class="img-fluid" id="foto_wrapper" src="https://cdn.dribbble.com/users/1252202/screenshots/6271180/loading_02.gif " />
	</p>
	<div>

		<!-- <link href="<?= base_url(); ?>assets\style\style.css" rel="stylesheet"> -->
		<div class="bege" style="
			background: linear-gradient(-145deg,#3ACD99, #0796B6)!important;">
			<div class="container">
				<div class="garistengah"></div>
				<div class="row" style="
					margin-bottom: 10%;	">
					<div class="container">


						<div class="char__containerss">
							<div class="ft-recharge-unify__chip">
								<h1 class="title text-center">Cek Typo Online</h1>
							</div>



						</div>


						<div class="col-md-12">

							<h3>INPUT</h3>
							<div class="keyword__container">
								<textarea id="input" name="input" class="form-control vertical" rows="15"></textarea>
								<br>

							</div>



							<button id="btnproses" type="button" class="btn btn-primary btn-block">PROSES</button>
						</div>
						<div class="col-md-12">
							<h3>OUTPUT</h3>
							<div class="keyword__containers">

								<div id="output">

								</div>

							</div>



							<!-- <textarea id="output" name="output" class="form-control vertical" rows="5"></textarea> -->
						</div>


					</div>



				</div>

			</div>
		</div>



		<script>
			$(document).ready(function() {
				$("#output").keydown(false);
				$('[data-toggle="tooltip"]').tooltip();
			});
			foto_wrapper();

			function foto_wrapper() {
				$("#foto_wrapper").hide();

			}

			$('#btnproses').on('click', function() {
				var btn = $(this);

				url = "type";
				var data = new FormData();
				var input = document.getElementById("input").value;
				data.append('input', input);
				$("#foto_wrapper").show()
				setTimeout(
					function() {
						$("#foto_wrapper").hide()

						$.ajax({
							url: url,
							type: "POST",
							data: data,
							processData: false,
							contentType: false,
							success: function(data) {
								$("#output").html(data).text();

								$('html, body').animate({
									scrollTop: $('#output').offset().top
								}, 'slow');

								// $("#output").append("<b>Appended text</b>");
							},
							error: function() {
								$("#output").html('Something Error !');
							}
						});

					}, 1000);



				return false;
			});
		</script>

		</body>

		</html>
