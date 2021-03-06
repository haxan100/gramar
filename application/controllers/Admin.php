<?php 
        
defined('BASEPATH') OR exit('No direct script access allowed');
        
class Admin extends CI_Controller {
	public function __construct()

	{
		parent::__construct();
		$this->load->model('KataModel');
		$this->load->model('LoginModel');
	}
	public function isLoggedInAdmin()
	{
		// Cek apakah terdapat session "admin_session"
		// var_dump($this->session->userdata('login_admin'));die;
		if ($this->session->userdata('login_admin'))
			return true; // sudah login
		else
			return false; // belum login
	}
	function cekLoginAdmin()

	{

		if (!$this->isLoggedInAdmin()) {

			$this->session->set_flashdata(

				'notifikasi',

				array(

					'alert' => 'alert-danger',

					'message' => 'Silahkan Login terlebih dahulu.',

				)

			);

			redirect('admin/login');
		}
	}

	public function login()
	{

		$this->load->view('templates/login');
	}
	public function IsLogin()
	{
		// var_dump($_SESSION['login_admin']);
		if(!$_SESSION['login_admin']){
			// alert("Harap Login");
			redirect('admin/login');
		}

		# code...
	}
	public function index()
	{
		$this->cekLoginAdmin();

		$data['listTipe'] =
		$this->KataModel->data_AllTipe($_POST);
		$data['title']= "Admin";

		$this->load->view('templates/header', $data);
		$this->load->view('templates/navbar_admin');
		$this->load->view('admin',$data);
		$this->load->view('templates/footer');
	}
	public function getAllKata()
	{
		// var_dump($_POST);die;
		$dt = $this->KataModel->data_AllKataDasar($_POST);
		$bu = base_url();
		$datatable['draw']      = isset($_POST['draw']) ? $_POST['draw'] : 1;
		$datatable['recordsTotal']    = $dt['totalData'];
		$datatable['recordsFiltered'] = $dt['totalData'];
		$datatable['data']            = array();
		$start  = isset($_POST['start']) ? $_POST['start'] : 0;
		// var_dump($dt['data']->result());die();
		$no = $start + 1;
		$subtotal = 0;
		$status = "";
		foreach ($dt['data']->result() as $row) {
		
			$fields = array($no++);
			$fields[] = $row->katadasar . '<br>';
			$fields[] = $row->tipe_katadasar . '<br>';

			$fields[] = '
			<button class="btn btn-round btn-warning btnUbah" data-id_katadasar="' . $row->id_katadasar . '"	 data-katadasar="' . $row->katadasar . '"
			data-tipe_katadasar="' . $row->tipe_katadasar . '"
				>Edit</button>        || 

			<button class="btn btn-round btn-danger btnHapus" data-id_katadasar="' . $row->id_katadasar . '"	 data-katadasar="' . $row->katadasar . '"
			data-tipe_katadasar="' . $row->tipe_katadasar . '"
       		 >  Hapus  </button>         

        ';
			$datatable['data'][] = $fields;
		}



		echo json_encode($datatable);

		exit();
	}
	public function tambahKata()
	{
		// var_dump($_POST);die;
		$katadasar = $this->input->post('katadasar', TRUE);
		$tipe_katadasar = $this->input->post('tipe_katadasar', TRUE);

		$message = 'Gagal menambah data !<br>Silahkan lengkapi data yang diperlukan.';
		$errorInputs = array();
		$status = true;
		// var_dump($in);die();
		if (empty($katadasar)) {
			$status = false;
			$errorInputs[] = array('#nama', 'Silahkan Isi Nama');
		} else {
			$in = array(
				'katadasar' => $katadasar,
				'tipe_katadasar' => $tipe_katadasar,
			);
			$this->KataModel->tambahKata($in);

			$message = "Berhasil Menambah Data #1";
		}
		echo json_encode(array(
			'status' => $status,
			'message' => $message,
			'errorInputs' => $errorInputs
		));
	}

	public function hapusKata()

	{
	
		$id_katadasar = $this->input->post('id_katadasar', true);
		$data = $this->KataModel->getKataById($id_katadasar);
		// var_dump($data);die();
		$status = false;
		$message = 'Gagal menghapus Kata!';
		if (count($data) == 0) {
			$message .= '<br>Tidak terdapat Kata yang dimaksud.';
		} else {

			$hasil = $this->KataModel->hapusKata($id_katadasar);

			if ($hasil) {
				
				$status = true;
				$message = 'Berhasil menghapus Kata: <b>' . $data[0]->katadasar . '</b>';
			} else {

				$message .= 'Terjadi kesalahan. #ADM01';
			}
		}

		echo json_encode(array(
			'status' => $status,
			'message' => $message,
		));
	}
	public function EditKata()
	{
		$katadasar = $this->input->post('katadasar', TRUE);
		$id_katadasar = $this->input->post('id_katadasar', TRUE);
		$tipe_katadasar = $this->input->post('tipe_katadasar', TRUE);

		$message = 'Gagal mengedit Kata!<br>Silahkan lengkapi data yang diperlukan.';

		$errorInputs = array();
		$status = true;
		$in = array(
			'katadasar' => $katadasar,
			'tipe_katadasar' => $tipe_katadasar,
		);

		if (empty($katadasar)) {
			$status = false;
			$errorInputs[] = array('#nama', 'Silahkan Isi Nama');
		}

		if ($status) {

			if ($this->KataModel->edit_kata($in, $id_katadasar)) {
				$message = "Berhasil Mengubah Kata #1";
			}
		} else {
			$message = "Gagal Mengubah Kata #1";
		}

		echo json_encode(array(
			'status' => $status,
			'message' => $message,
			'errorInputs' => $errorInputs
		));
	}
	public function kamus()
	{

		$this->cekLoginAdmin();
		$data['listTipe'] =
			$this->KataModel->data_AllTipe($_POST);

		$data['title'] = "Admin";

		$this->load->view('templates/header', $data);
		// $this->load->view('templates/navbar');

		$this->load->view('templates/navbar_admin');
		$this->load->view('admin_kamus', $data);
		$this->load->view('templates/footer');
	}
		public function getAllKamus()
	{
		// var_dump($_POST);die;
		$dt = $this->KataModel->data_AllKamus($_POST);
		$bu = base_url();
		$datatable['draw']      = isset($_POST['draw']) ? $_POST['draw'] : 1;
		$datatable['recordsTotal']    = $dt['totalData'];
		$datatable['recordsFiltered'] = $dt['totalData'];
		$datatable['data']            = array();
		$start  = isset($_POST['start']) ? $_POST['start'] : 0;
		// var_dump($dt['data']->result());die();
		$no = $start + 1;
		$subtotal = 0;
		$status = "";
		$desk = "";
		$desk_wiki = "";

		foreach ($dt['data']->result() as $row) {

			if(strlen($row->pengertian)>500){
				$pengertian= substr($row->pengertian, 0, -500);
			} else if (strlen($row->pengertian) > 400) {
				$pengertian = substr($row->pengertian, 0, -400);
			} else if (strlen($row->pengertian) > 300) {
				$pengertian = substr($row->pengertian, 0, -300);
			} else if (strlen($row->pengertian) > 200) {
				$pengertian = substr($row->pengertian, 0, -100);
			} else{
				$pengertian = $row->pengertian;
			}

			if (strlen($row->contoh) > 500) {
				$contoh = substr($row->contoh, 0, -500);
			} else if (strlen($row->contoh) > 400) {
				$contoh = substr($row->contoh, 0, -400);
			} else if (strlen($row->contoh) > 300) {
				$contoh = substr($row->contoh, 0, -300);
			} else if (strlen($row->contoh) > 200) {
				$contoh = substr($row->contoh, 0, -100);
			} else{

				$contoh = $row->contoh;
			}
			
			$fields = array($no++);
			$fields[] = $row->nama_kamus . '<br>';
			$fields[] = $row->jenis . '<br>';
			$fields[] = $pengertian . '<br>';
			$fields[] = $contoh . '<br>';

			$fields[] = '
			<button class="btn btn-round btn-warning btnUbah" data-id_kamus="' . $row->id_kamus . '"	 
			data-nama_kamus="' . $row->nama_kamus . '"
			data-jenis="' . $row->jenis . '"
			data-pengertian="' . $row->pengertian . '"
			data-contoh="' . $row->contoh . '"

			data-deskripsi="' . $row->deskripsi . '"
			data-deskripsi_wiki="' . $row->deskripsi_wiki . '"
				>Edit</button>        || 

			<button class="btn btn-round btn-danger btnHapus" data-id_kamus="' . $row->id_kamus . '"	 data-nama_kamus="' . $row->nama_kamus . '"
			data-deskripsi="' . $row->deskripsi . '"
			data-deskripsi_wiki="' . $row->deskripsi_wiki . '"
       		 >  Hapus  </button>         

        ';
			$datatable['data'][] = $fields;
		}



		echo json_encode($datatable);

		exit();
	}
	public function tambahKamus()
	{
		// var_dump($_POST);die;
		$kamus = $this->input->post('kamus', TRUE);
		$pengertian = $this->input->post('pengertian', TRUE);
		$jenis = $this->input->post('jenis', TRUE);
		$contoh = $this->input->post('contoh', TRUE);

		$message = 'Gagal menambah data !<br>Silahkan lengkapi data yang diperlukan.';
		$errorInputs = array();
		$status = true;
		// var_dump($in);die();
		if (empty($kamus)) {
			$status = false;
			$errorInputs[] = array('#kamus', 'Silahkan Isi Nama Kamus');
		} else {
			$in = array(
				'nama_kamus' => $kamus,
				'jenis' => $jenis,
				'contoh' => $contoh,
				'pengertian' => $pengertian,
				
			);
			$this->KataModel->tambahKamus($in);

			$message = "Berhasil Menambah Data #1";
		}
		echo json_encode(array(
			'status' => $status,
			'message' => $message,
			'errorInputs' => $errorInputs
		));
	}
	public function
	CekLogin()
	{
		$email = $this->input->post('nama');
		$password = $this->input->post('pass');
		$cekUser  = $this->LoginModel->getAdminByEmailPass($email, $password);

		// var_dump($cekUser, $cekUser>0);
		if (count($cekUser) > 0) {

			$user = $cekUser[0];
			// var_dump($cekUser);
			// $cekStatus = $user->status;
			// if ($cekStatus == 0) {
			// 	$error = true;
			// 	$msg = "User Belum Aktif, Mohon Tunggu Sesaat";
			// } else if ($cekStatus == 2) {

			// 	$error = true;
			// 	$msg = "User Telah Di Banned!";
			// } else 
			 {
				$error = false;
				$msg = "Berhasil Login";

				$newdata = array(
					'username'  => $user->username,
					'nama'  => $user->nama,
					// 'email'     => $user->email,
					'id_admin'     => $user->id_admin,
					// 'no_phone'     => $user->no_phone,

					'login_admin' => TRUE
				);
				$this->session->set_userdata($newdata);
			}
		} else {
			$error = true;
			$msg = "Email Dan Password salah ";
		}


		$json = array(
			'error' => $error,
			'message' => $msg,
		);

		echo json_encode($json);
		exit();
	}
	public function hapusKamus()

	{

		$id_kamus = $this->input->post('id_kamus', true);
		$data = $this->KataModel->getKamusById($id_kamus);
		// var_dump($data);die();
		$status = false;
		$message = 'Gagal menghapus Kamus!';
		if (count($data) == 0) {
			$message .= '<br>Tidak terdapat Kamus yang dimaksud.';
		} else {

			$hasil = $this->KataModel->hapusKamus($id_kamus);

			if ($hasil) {

				$status = true;
				$message = 'Berhasil menghapus Kamus: <b>' . $data[0]->nama_kamus . '</b>';
			} else {

				$message .= 'Terjadi kesalahan. #ADM01';
			}
		}

		echo json_encode(array(
			'status' => $status,
			'message' => $message,
		));
	}
	public function EditKamus()
	{
		$nama_kamus = $this->input->post('nama_kamus', TRUE);
		$id_kamus = $this->input->post('idkamus', TRUE);
		$pengertian = $this->input->post('pengertian', TRUE);
		$jenis = $this->input->post('jenis', TRUE);
		$contoh = $this->input->post('contoh', TRUE);

		$message = 'Gagal mengedit Kamus!<br>Silahkan lengkapi data yang diperlukan.';

		$errorInputs = array();
		$status = true;
		$in = array(
			'nama_kamus' => $nama_kamus,
			'contoh' => $contoh,
			'jenis' => $jenis,
			'pengertian' => $pengertian,
		);

		if (empty($nama_kamus)) {
			$status = false;
			$errorInputs[] = array('#nama', 'Silahkan Isi Nama');
		}

		if ($status) {

			if ($this->KataModel->edit_kamus($in, $id_kamus)) {
				$message = "Berhasil Mengubah Kamus #1";
			}
		} else {
			$message = "Gagal Mengubah Kamus #1";
		}

		echo json_encode(array(
			'status' => $status,
			'message' => $message,
			'errorInputs' => $errorInputs
		));
	}
	public function Setting()
	{

		$this->cekLoginAdmin();
		$data['listTipe'] =
			$this->KataModel->data_AllTipe($_POST);

		$data['title'] = "Admin";

		$this->load->view('templates/header', $data);
		// $this->load->view('templates/navbar');

		$this->load->view('templates/navbar_admin');
		$this->load->view('admin_setting', $data);
		$this->load->view('templates/footer');
	}
        
}
        
                            