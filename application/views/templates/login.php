<!DOCTYPE html>
<html lang="en">

<head>
	<title>Login V19</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="icon" type="image/png" href="<?= base_url() ?>\assets\Login\images\icons\favicon.ico">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\vendor\bootstrap\css\bootstrap.min.css">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\fonts\font-awesome-4.7.0\css\font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\fonts\Linearicons-Free-v1.0.0\icon-font.min.css">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\vendor\animate\animate.css">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\vendor\css-hamburgers\hamburgers.min.css">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\vendor\animsition\css\animsition.min.css">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\vendor\select2\select2.min.css">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\vendor\daterangepicker\daterangepicker.css">

	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\css\util.css">
	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>\assets\Login\css\main.css">

</head>

<body>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
				<form class="login100-form validate-form" id="formLogin">
					<span class="login100-form-title p-b-33">
						Account Login
					</span>
					<div class="wrap-input100 validate-input" data-validate="Valid UserName is required">
						<input class="input100" type="text" name="nama" placeholder="UserName" id="nama">
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					</div>
					<div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password" id="pw">
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					</div>
					<div class="container-login100-form-btn m-t-20">
						<button class="login100-form-btn">
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<!-- <script src="<?= base_url() ?>\assets\Login\vendor\jquery\jquery-3.2.1.min.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script> -->

	<script src="<?= base_url() ?>\assets\Login\vendor\animsition\js\animsition.min.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script>

	<script src="<?= base_url() ?>\assets\Login\vendor\bootstrap\js\popper.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script>
	<script src="<?= base_url() ?>\assets\Login\vendor\bootstrap\js\bootstrap.min.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script>

	<script src="<?= base_url() ?>\assets\Login\vendor\select2\select2.min.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script>

	<script src="<?= base_url() ?>\assets\Login\vendor\daterangepicker\moment.min.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script>
	<script src="<?= base_url() ?>\assets\Login\vendor\daterangepicker\daterangepicker.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script>

	<script src="<?= base_url() ?>\assets\Login\vendor\countdowntime\countdowntime.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script>

	<script src="<?= base_url() ?>\assets\Login\js\main.js" type="ed5ebf5f8e3425d433acdb1b-text/javascript"></script>

	<script type="ed5ebf5f8e3425d433acdb1b-text/javascript">
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'UA-23581568-13');
	</script>
	<script src="https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js" data-cf-settings="ed5ebf5f8e3425d433acdb1b-|49" defer=""></script>
</body>

</html>


<script>
	$(document).ready(function() {

		var bu = '<?= base_url(); ?>';
		// $(".login100-form-btn").on("click", function(event) {
		$("#formLogin").submit(function(e) {	
			var nama = $('#nama').val();
			var pw = $('#pw').val();

			if (nama.length == "") {
				// Swal.fire({
				// 	type: 'warning',
				// 	title: 'Oops...',
				// 	text: 'Email Wajib Diisi !'
				// });
				alert("User Name Harus Di Isi")

			} else if (pw.length == "") {
				// Swal.fire({
				// 	type: 'warning',
				// 	title: 'Oops...',
				// 	text: 'Password Wajib Diisi !'
				// });
				alert("Password Harus Di Isi")

			}
			$.ajax({
				type: 'POST',
				url: bu + 'Admin/CekLogin',
				dataType: 'json',
				// data: {
				// 	nama: nama,
				// 	pw: pw
				// },
				data: new FormData(this),
				processData: false,
				contentType: false,
				cache: false,
				async: false,
			}).done(function(e) {
				// console.log('berhasil');
				console.log(e);
				if (!e.error) {

					// resetForm();
					// setTimeout(() => {
						window.location = bu + 'admin';
					// }, 4100);
					// Swal.fire({
					// 	type: 'success',
					// 	title: 'Hello',
					// 	text: 'Berhasil Login  !'
					// });
				} else {
					// Swal.fire({
					// 	type: 'warning',
					// 	title: 'Oops...',
					// 	text: e.message,
					// });
				}
			}).fail(function(e) {
				if (e.responseText == false) {
					// Swal.fire({
					// 	type: 'succes',
					// 	title: 'Oops...',
					// 	text: 'Berhasil regis : !'
					// });
				} else {
					console.log(e)
					// Swal.fire({
					// 	type: 'warning',
					// 	title: 'Oops...',
					// 	text: "Coba Beberapa saat",
					// });

				}
			})
			return false;

			console.log(nama, pw)


		});
	});
</script>
