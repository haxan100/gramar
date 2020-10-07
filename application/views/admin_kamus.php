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
							<!-- <select name="produk" id="dt_filter_produk" class="btn btn-primary m-t-20 btn-info waves-effect waves-light ">
								<option value="default" desable>Pilih Tipe Kata</option>
								<?php
								foreach ($listTipe as $r) {
									echo '
								<option value="' . $r->tipe_katadasar . '">' . $r->tipe_katadasar . '</option>
								';
								}
								?>
							</select> -->

							<p id="alertNotif" class="mt-2"></p>
							<div class="container">

								<div class="table-responsive">
									<table id="tableProduk" class="table table-striped table-bordered">
										<thead>
											<tr>
												<th>No.</th>
												<th style="max-width: 260px;">Nama Kamus </th>

												<th> Deskrispi Umum</th>
												<th> Deskrispi WikiPedia</th>
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
			</div>
			<div class="rightcol sBarN">

				<div class="col-xs-12 text-center clear noP pps-spr pps-spr-choras-daba pps-spr-sidebar" style="margin:10px 0;">
				</div>
			</div>
		</div>
		<!-- <script src="<?= base_url(); ?>assets\js\jQuery-3.3.1\jquery-3.3.1.js"></script> -->

		<div class="modal fade" id="purchaseModal" tabindex="-1" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
			<div class="modal-dialog" style="
    			width: 50%;		">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="purchaseLabel">Kamus</h4>
					</div>
					<div class="modal-body">
						<form id="form">
							<div class="modal-body">
								<p id="alertNotifModal" class="mt-2"></p>
								<input id="idkamus" name="idkamus" value="" type="hidden">
								<div class="row ">
									<div class="col p-4">
										<div class="col form-group">
											<label for="idTipeProduk">Nama Kamus</label>

											<input id="kamus" name="kamus" type="text" class="form-control">

											<small></small>
										</div>
										<div class="form-group">
											<label for="Deskripsi">Pengertian</label>
											<textarea id="pengertian" class="form-control" name="" rows="5"></textarea>
										</div>
										<div class="form-group">
											<label for="jenis">Jenis</label>
											<textarea id="jenis" class="form-control" name="" rows="3"></textarea>
										</div>
										<div class="form-group">
											<label for="deskripsi_wiki">Contoh</label>
											<textarea id="contoh" class="form-control" name="" rows="3"></textarea>
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
	<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>


	<div id='floorad-wrapper'>
		<a id='close-floorad-btn' style="display: none;">&#10006;</a>
		<div id='sticky-ad-background'></div>
		<div id='snhb-prepostseo_footer_sticky-0' style="margin: 0 auto !important;position:fixed;bottom:0;left:0;right:0;"></div>
	</div>

	<script type="text/javascript">
		document.addEventListener("DOMContentLoaded", function(event) {

			$('#pengertian').summernote({
				addclass: {
					debug: false,
					classTags: [{
						title: "Button",
						value: "btn btn-success"
					}, "jumbotron", "lead", "img-rounded", "img-circle", "img-responsive", "btn", "btn btn-success", "btn btn-danger", "text-muted", "text-primary", "text-warning", "text-danger", "text-success", "table-bordered", "table-responsive", "alert", "alert alert-success", "alert alert-info", "alert alert-warning", "alert alert-danger", "visible-sm", "hidden-xs", "hidden-md", "hidden-lg", "hidden-print"]
				},
				height: 300,
			});
			$('#jenis').summernote({
				addclass: {
					debug: false,
					classTags: [{
						title: "Button",
						value: "btn btn-success"
					}, "jumbotron", "lead", "img-rounded", "img-circle", "img-responsive", "btn", "btn btn-success", "btn btn-danger", "text-muted", "text-primary", "text-warning", "text-danger", "text-success", "table-bordered", "table-responsive", "alert", "alert alert-success", "alert alert-info", "alert alert-warning", "alert alert-danger", "visible-sm", "hidden-xs", "hidden-md", "hidden-lg", "hidden-print"]
				},
				height: 100,
			});
			$('#contoh').summernote({
				addclass: {
					debug: false,
					classTags: [{
						title: "Button",
						value: "btn btn-success"
					}, "jumbotron", "lead", "img-rounded", "img-circle", "img-responsive", "btn", "btn btn-success", "btn btn-danger", "text-muted", "text-primary", "text-warning", "text-danger", "text-success", "table-bordered", "table-responsive", "alert", "alert alert-success", "alert alert-info", "alert alert-warning", "alert alert-danger", "visible-sm", "hidden-xs", "hidden-md", "hidden-lg", "hidden-print"]
				},
				height: 100,
			});


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
					{
						"targets": 3,
						"className": "dt-head-center"
					},
				],

				"order": [
					[1, "desc"]
				],
				'ajax': {
					url: bu + 'Admin/getAllKamus',
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
				var kamus = $('#kamus').val();
				var Deskripsi = $('#Deskripsi').val();
				var deskripsi_wiki = $('#deskripsi_wiki').val();
			})

			$('#btnTambah').on('click', function() {
				$('#btnEdit').hide();
				var kamus = $('#kamus').val();
				var pengertian = $('#pengertian').val();
				var jenis = $('#jenis').val();
				var contoh = $('#contoh').val();


				if (pengertian != "" && kamus != "" && jenis != "" && contoh != "") {
					$.ajax({
						url: bu + "Admin/tambahKamus",
						type: "POST",
						data: {
							kamus: kamus,
							pengertian: pengertian,
							jenis: jenis,
							contoh: contoh,
						},
						cache: false,
						success: function(data) {

							if (data.status = true) {
								$('#purchaseModal').modal('hide');
								datatable.ajax.reload();

								// alert("Error wffwf !");
								Swal.fire(
									'Berhasil!',
									data.message,
									'success'
								)

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
				var id_kamus = $(this).data('id_kamus');
				var nama_kamus = $(this).data('nama_kamus');
				var c = confirm('Apakah anda yakin akan menghapus : "' + nama_kamus + '" ?');
				if (c == true) {
					$.ajax({
						url: bu + 'admin/hapusKamus',
						dataType: 'json',
						method: 'POST',
						data: {
							id_kamus: id_kamus
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
				var id_kamus = $(this).data('id_kamus');
				var nama_kamus = $(this).data('nama_kamus');
				var deskripsi_wiki = $(this).data('deskripsi_wiki');
				var deskripsi = $(this).data('deskripsi');
				console.log(id_kamus, nama_kamus, deskripsi_wiki, deskripsi);

				$('#btnTambah').hide();

				$('#idkamus').val(id_kamus);
				$('#deskripsi_wiki').val(deskripsi_wiki);
				$('#kamus').val(nama_kamus);
				$('#Deskripsi').val(deskripsi);

				$('#purchaseModal').modal('show');

			});
			$('#btnEdit').on('click', function() {


				var idkamus = $('#idkamus').val();
				var deskripsi_wiki = $('#deskripsi_wiki').val();
				var Deskripsi = $('#Deskripsi').val();
				var nama_kamus = $('#kamus').val();

				console.log(idkamus, Deskripsi, deskripsi_wiki, nama_kamus)
				// return false;
				if (idkamus == "" || nama_kamus == "" || deskripsi_wiki == "") {
					Swal.fire(
						'Eror!',
						"Mohon Di Isi Semua!",
						'error'
					)
					// alert("Mohon Di Isi Semua!")

				} else {
					$.ajax({
						url: bu + 'Admin/EditKamus',
						dataType: 'json',
						method: 'POST',
						data: {
							nama_kamus: nama_kamus,
							idkamus: idkamus,
							Deskripsi: Deskripsi,
							deskripsi_wiki: deskripsi_wiki,
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
