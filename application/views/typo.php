<!-- HEADER -->
<style>
	.bege {
		background: linear-gradient(-145deg, #3ACD99, #0796B6) !important;
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

						<div class="col-md-12">
							<h3>INPUT</h3>
							<textarea id="input" name="input" class="form-control vertical" rows="15"></textarea><br>
							<button id="btnproses" type="button" class="btn btn-primary btn-block">PROSES</button>
						</div>
						<div class="col-md-12">
							<h3>OUTPUT</h3>
							<div id="output"></div>
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
