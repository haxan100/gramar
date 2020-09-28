<div style="clear:both;"></div>
<script>

</script>
</header>

<script src="<?= base_url(); ?>assets/admin\js\kata.js"></script>

<hr style="margin:0px;">
<div class="container-fluid white-section" style="background:linear-gradient(-145deg,#3ACD99, #0796B6);">
	<?php
	defined('BASEPATH') or exit('No direct script access allowed');
	$bu = base_url();
	// $obj['ci'] = $ci;
	$contohDeskripsi = 'DIJUAL ****
	Produk bekas pakai dengan kondisi maksimal 2 titik lecet/penyok/cat terkelupas di body. Contoh seperti di gambar.

	Samsung Galaxy Note 9 Dijamin 100% Fungsi Normal
	Kelengkapan fullset dengan Dus dan Aksesories OEM (bukan bawaan tapi dijamin berfungsi dengan baik)
	Bergaransi selama 90 hari (7 hari pertama ganti unit, diatas 7 hari akan di service)
	Semua produk yang dijual dijamin ASLI bukan replika';
	// $contohDeskripsi = '';

	?>

	<!-- <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
	<link href="cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">
	<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script> -->
	<!-- //cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css -->

	<style>
		@media (min-width: 1200px) {
			.modal-xl {
				max-width: 1140px;
			}
		}

		@media (min-width: 992px) {

			.modal-lg,
			.modal-xl {
				max-width: 800px;
			}
		}

		#foto_wrapper>div>img {
			padding-right: 1%;
			width: 20%;
		}

		#foto_wrapper>div {
			display: inline;
			position: relative;
		}

		.hapusFoto {
			position: absolute;
			right: 10px;
		}
	</style>

	<div class="container-fluid">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="container">

						<div class="card-body">
							<a href="javascript:void(0)" data-toggle="modal" data-target="#purchaseModal" class="btn m-t-20 btn-info waves-effect waves-light btnTambah">
								<i class="ti-plus"></i> Tambah Kata Baru
							</a>
							<select name="produk" id="dt_filter_produk" class="btn btn-primary m-t-20 btn-info waves-effect waves-light ">
								<option value="default" desable>Pilih Tipe Kata</option>
								<?php
								foreach ($listTipe as $r) {
									echo '
								<option value="' . $r->tipe_katadasar . '">' . $r->tipe_katadasar . '</option>
								';
								}
								?>
							</select>

							<p id="alertNotif" class="mt-2"></p>
							<div class="container">

								<div class="table-responsive">
									<table id="tableProduk" class="table table-striped table-bordered">
										<thead>
											<tr>
												<th>No.</th>
												<th style="max-width: 260px;">Kata Dasar </th>

												<th> Tipe Kata Dasar</th>
												<th style="width: 100px;">Aksi</th>
											</tr>
										</thead>
									</table>
								</div>

							</div>

						</div>


					</div>

				</div>
			</div>



		</div>

	</div>
</div>
<div class="col-xs-12 text-center" style="margin-top:10px;">

</div>

<div class="container-fluid white-section">
	<div class="container noP">

		<div class="col-md-12 noP">
			<div class="leftcol noP">

				<div class="col-md-12 tln noP clear" id="domainTools">

				</div>

				<div class="col-md-12 tln noP clear" id="webManage">

				</div>
				<div class="col-md-12 tln noP clear" id="webManage">

				</div>
				<div class="col-xs-12 text-center" style="margin:10px 0 20px 0;">
					<!-- <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->

					<script src="<?= base_url(); ?>assets\js\adsbygoogle.js"></script>

					<!-- desktop 300x250 -->
					<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-7155931151667823" data-ad-slot="6131269984"></ins>
					<script>
						(adsbygoogle = window.adsbygoogle || []).push({});
					</script>
				</div>
			</div>
			<div class="rightcol sBarN">

				<div class="col-xs-12 text-center clear noP pps-spr pps-spr-choras-daba pps-spr-sidebar" style="margin:10px 0;">
				</div>
			</div>
		</div>
		<!-- <script src="<?= base_url(); ?>assets\js\jQuery-3.3.1\jquery-3.3.1.js"></script> -->

		<div class="modal fade" id="purchaseModal" tabindex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="purchaseLabel">Kat Dasar</h4>
					</div>
					<div class="modal-body">
						<form id="form">
							<div class="modal-body">
								<p id="alertNotifModal" class="mt-2"></p>
								<input id="idkatadasat" name="idkatadasat" value="" type="hidden">
								<div class="row ">
									<div class="col p-4">
										<div class="row">
											<div class="col form-group">
												<label for="idTipeProduk">Tipe Kata</label>
												<select id="idTipeProduk" name="idTipeProduk" class="form-control">
													<option value="" selected disabled>Pilih Tipe </option>
													<?php
													foreach ($listTipe as $r) {
														echo '
																	<option value="' . $r->tipe_katadasar . '">' . $r->tipe_katadasar . '</option>
																	';
													}
													?>
												</select>
												<small></small>
											</div>

										</div>
										<div class="form-group">
											<label for="judul">Judul</label>
											<input id="judul" name="judul" type="text" class="form-control">
											<small></small>
										</div>
									</div>
								</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" id="btnTambah" class="btn btn-primary">Simpan</button>
						<button type="button" id="btnEdit" class="btn btn-primary">Ubah</button>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div id='floorad-wrapper'>
		<a id='close-floorad-btn' style="display: none;">&#10006;</a>
		<div id='sticky-ad-background'></div>
		<div id='snhb-prepostseo_footer_sticky-0' style="margin: 0 auto !important;position:fixed;bottom:0;left:0;right:0;"></div>
	</div>

	<!--script to draw and close the unit-->
	<script async="" type="text/javascript">
		googletag.cmd.push(function() {
			googletag.pubads().addEventListener('slotRenderEnded', function(event) {
				if (event.slot.getSlotElementId() === 'snhb-prepostseo_footer_sticky-0') {
					var elementId = event.slot.getSlotElementId();
					if (document.getElementById(elementId).offsetHeight > 0 && event.isEmpty === false) {
						var stickyAdHeight = document.getElementById(elementId).offsetHeight;
						var wrapperHeight = stickyAdHeight + 25;
						var innerWrapperHeight = stickyAdHeight + 3;

						document.getElementById("floorad-wrapper").setAttribute("style", "text-align:center;z-index:9999;position:fixed;left:0;right:0;display:block;bottom:0;height:" + wrapperHeight + "px;width:100%");
						document.getElementById("close-floorad-btn").setAttribute("style", "display:inline-block;height:18px;;padding:2px;background:#fff;cursor:pointer;float:right;box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);border-radius: 8px 0 0 0;");
						document.getElementById("sticky-ad-background").setAttribute("style", "background:#f2f7f9;height:" + innerWrapperHeight + "px;width:100%;bottom:0;position:fixed;box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);");

						document.getElementById('close-floorad-btn').onclick = function() {
							document.getElementById("floorad-wrapper").setAttribute("style", "display:none;");
							document.getElementById("close-floorad-btn").setAttribute("style", "display:none;");
							document.getElementById("sticky-ad-background").setAttribute("style", "display:none;");
						};
					} else {
						document.getElementById("floorad-wrapper").setAttribute("style", "display:none;");
						document.getElementById("close-floorad-btn").setAttribute("style", "display:none;");
						document.getElementById("sticky-ad-background").setAttribute("style", "display:none;");
					}
				}
			});
		});
	</script>
	<script type="text/javascript">
		document.addEventListener("DOMContentLoaded", function(event) {
			var bu = "<?= base_url(); ?>";
			console.log("fefrefhf");

			var datatable = $('#tableProduk').DataTable({
				// 'dom': "Bfrltip",
				'pageLength': 10,
				"lengthChange": true,
				"responsive": true,
				"processing": true,
				"bProcessing": true,
				"autoWidth": true,
				"serverSide": true,
				"ordering": false,
				"info": false,
				"deferRender": false,
				// data: dataSet,
				pageLength: 10,
				"deferRender": false,

				"columnDefs": [{
						"targets": 0,
						"className": "dt-body-center dt-head-center",
						"width": "10px",
						"orderable": false
					},
					{
						"targets": 1,
						"className": "dt-head-center tbFoto"
					},
					{
						"targets": 2,
						"className": "dt-head-center"
					},
				],

				"order": [
					[1, "desc"]
				],
				'ajax': {
					url: bu + 'Admin/getAllKata',
					type: 'POST',
					"data": function(d) {

						d.tipe_katadasar = $('#dt_filter_produk').children('option:selected').val();
						return d;
					}
				},

			});
			$('#dt_filter_produk').on('change', function() {
				datatable.ajax.reload();
			});

			$('.btnTambah').on('click', function() {
				$('#btnEdit').hide();
				var _flag = $('#judul').val();
				var _idSpek = $('#idTipeProduk').val();
				console.log(bu)
			})

			$('#btnTambah').on('click', function() {
				$('#btnEdit').hide();
				var _flag = $('#judul').val();
				var _idSpek = $('#idTipeProduk').val();
				console.log(bu)


				if (_flag != "" && _idSpek != "") {
					$.ajax({
						url: bu + "Admin/tambahKata",
						type: "POST",
						data: {
							katadasar: _flag,
							tipe_katadasar: _idSpek,
						},
						cache: false,
						success: function(data) {

							// console.log(data);
							// console.log(status);
							// console.log(data.status);
							// console.log(data.status = true);
							// console.log(data.status = 'true');
							// var dataResult = JSON.parse(dataResult);
							if (data.status = true) {
								$('#purchaseModal').modal('hide');

								// alert("Error wffwf !");
								Swal.fire(
									'Berhasil!',
									data.message,
									'success'
								)

								// 	$("#butsave").removeAttr("disabled");
								// 	$('#fupForm').find('input:text').val('');
								// 	$("#success").show();
								// 	$('#success').html('Data added successfully !');
							} else {
								$('#purchaseModal').modal('hide');

								// alert("Error wffwf !");
								Swal.fire(
									'Error!',
									data.message,
									'error'
								)
							}

						}
					});
				} else {
					alert('Please fill all the field !');
				}


				// var _idSpek = idTipeProduk();
				// console.log(_flag, _idSpek)
				// return false;

			});
			$('body').on('click', '.btnHapus', function() {
				var id_katadasar = $(this).data('id_katadasar');
				var katadasar = $(this).data('katadasar');
				var c = confirm('Apakah anda yakin akan menghapus Produk: "' + katadasar + '" ?');
				if (c == true) {
					$.ajax({
						url: bu + 'admin/hapusKata',
						dataType: 'json',
						method: 'POST',
						data: {
							id_katadasar: id_katadasar
						}
					}).done(function(e) {
						// console.log(e);
						// notifikasi('#alertNotif', e.message, !e.status);
						$('#purchaseModal').modal('hide');

						Swal.fire(
							'Berhasil!',
							e.message,
							'success'
						)
						datatable.ajax.reload();
					}).fail(function(e) {
						// console.log('gagal');
						$('#purchaseModal').modal('hide');

						console.log(e);
						var message = 'Terjadi Kesalahan. #JSMP01';
						Swal.fire(
							'Error!',
							e.message,
							'error'
						)
						// notifikasi('#alertNotif', message, true);
					});
				}
				return false;
			});
			$('body').on('click', '.btnUbah', function() {
				var id_katadasar = $(this).data('id_katadasar');
				var katadasar = $(this).data('katadasar');
				var tipe_katadasar = $(this).data('tipe_katadasar');
				// console.log(id_katadasar, katadasar, tipe_katadasar);
				$('#btnTambah').hide();


				$('#idkatadasat').val(id_katadasar);
				$('#idTipeProduk').val(tipe_katadasar);
				$('#judul').val(katadasar);

				$('#purchaseModal').modal('show');

			});
			$('#btnEdit').on('click', function() {


				var id_katadasar = $('#idkatadasat').val();
				var tipe_katadasar = $('#idTipeProduk').val();
				var katadasar = $('#judul').val();

				// console.log(katadasar, id_katadasar, tipe_katadasar)
				// return false;
				if (id_katadasar == "" || katadasar == "" || katadasar == "") {
					Swal.fire(
						'Eror!',
						"Mohon Di Isi Semua!",
						'error'
					)
					// alert("Mohon Di Isi Semua!")

				} else {
					$.ajax({
						url: bu + 'Admin/EditKata',
						dataType: 'json',
						method: 'POST',
						data: {
							katadasar: katadasar,
							id_katadasar: id_katadasar,
							tipe_katadasar: tipe_katadasar,
						}
					}).done(function(e) {
						// console.log(e);
						Swal.fire(
							'Edit!',
							e.message,
							'success'
						)
						$('#purchaseModal').modal('hide');
						datatable.ajax.reload();
						resetForm();

					}).fail(function(e) {
						console.log('gagal');
						console.log(e);
						var message = 'Terjadi Kesalahan. #JSMP01';
						$('#purchaseModal').modal('hide');


					});

				}
				return false;
			});

		});
	</script>
