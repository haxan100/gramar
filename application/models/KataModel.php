<?php
defined('BASEPATH') or exit('No direct script access allowed');

class KataModel extends CI_Model

{
  public function getAllKataDasar()

    {
				$this->db->select('katadasar');
				
        
        return $this->db->get('tb_katadasar')->result();
		}
	public function data_AllTipe()

	{
		$this->db->select('tipe_katadasar');
		$this->db->group_by('tipe_katadasar');


		return $this->db->get('tb_katadasar')->result();
	}
	public function data_AllKataDasar($post)

	{
		// var_dump($_POST);
		$columns = array(
			'katadasar',
		);
		// untuk search
		$columnsSearch = array(
			'katadasar',
		);
		$from = 'tb_katadasar k';
		// custom SQL

		$sql = "SELECT *  FROM {$from} 	";
		$where = "";
		$whereTemp = "";

		if (isset($post['tipe_katadasar']) && $post['tipe_katadasar'] != 'default') {
			if ($where != ""
			) $where .= "AND";
			$where .= " (tipe_katadasar='" . $post['tipe_katadasar'] . "')";
		}

		if ($whereTemp != '' && $where != '') $where .= " AND (" . $whereTemp . ")";

		else if ($whereTemp != '') $where .= $whereTemp;

		if (isset($post['search']['value']) && $post['search']['value'] != '') {
			$search = $post['search']['value'];
			$whereTemp = "";

			for ($i = 0; $i < count($columnsSearch); $i++) {

				$whereTemp .= $columnsSearch[$i] . ' LIKE "%' . $search . '%"';

				if ($i < count($columnsSearch) - 1) {

					$whereTemp .= ' OR ';
				}
			}
			if ($where != '') $where .= " AND (" . $whereTemp . ")";
			else $where .= $whereTemp;
		}

		if ($where != '') $sql .= ' WHERE (' . $where . ')';
		$sortColumn = isset($post['order'][0]['column']) ? $post['order'][0]['column'] : 1;

		$sortDir    = isset($post['order'][0]['dir']) ? $post['order'][0]['dir'] : 'asc';
		$sortColumn = $columns[$sortColumn - 1];
		$sql .= " ORDER BY {$sortColumn} {$sortDir}";

		$count = $this->db->query($sql);
		$totaldata = $count->num_rows();
		$start  = isset($post['start']) ? $post['start'] : 0;
		$length = isset($post['length']) ? $post['length'] : 10;
		$sql .= " LIMIT {$start}, {$length}";
		// var_dump($sql);
		$data  = $this->db->query($sql);
		return array(

			'totalData' => $totaldata,

			'data' => $data,

		);
	}
	public function tambahKata($in)
	{

		return $this->db->insert('tb_katadasar', $in);
	}
	public function getKataById($id_produk)

	{

		$this->db->where('id_katadasar', $id_produk);

		return $this->db->get('tb_katadasar')->result();
	}
	public function hapusKata($id_katadasar)

	{

		$this->db->where('id_katadasar', $id_katadasar);

		return $this->db->delete('tb_katadasar');
	}
	public function edit_kata($in, $id)
	{
		$this->db->where('id_katadasar', $id);
		return $this->db->update('tb_katadasar', $in);
	}
	public function getKamusByAwal($id_produk)
	{
		$this->db->like('nama_kamus', $id_produk);
		// $this->db->where('id_katadasar', $id_produk);

		return $this->db->get('kamus')->result();
	}
	public function getKamusById($id_produk)
	{
		// $this->db->like('nama_kamus', $id_produk);
		$this->db->where('id_kamus', $id_produk);

		return $this->db->get('kamus')->result();
	}
	public function data_AllKamus($post)

	{
		// var_dump($_POST);
		$columns = array(
			'nama_kamus',
			'deskripsi',
			'deskripsi_wiki',
		);
		// untuk search
		$columnsSearch = array(
			'nama_kamus',
			'deskripsi',
			'deskripsi_wiki',
		);
		$from = 'kamus k';
		// custom SQL

		$sql = "SELECT *  FROM {$from} 	";
		$where = "";
		$whereTemp = "";
		if ($whereTemp != '' && $where != '') $where .= " AND (" . $whereTemp . ")";

		else if ($whereTemp != '') $where .= $whereTemp;

		if (isset($post['search']['value']) && $post['search']['value'] != '') {
			$search = $post['search']['value'];
			$whereTemp = "";

			for ($i = 0; $i < count($columnsSearch); $i++) {

				$whereTemp .= $columnsSearch[$i] . ' LIKE "%' . $search . '%"';

				if ($i < count($columnsSearch) - 1) {

					$whereTemp .= ' OR ';
				}
			}
			if ($where != '') $where .= " AND (" . $whereTemp . ")";
			else $where .= $whereTemp;
		}

		if ($where != '') $sql .= ' WHERE (' . $where . ')';
		$sortColumn = isset($post['order'][0]['column']) ? $post['order'][0]['column'] : 1;

		$sortDir    = isset($post['order'][0]['dir']) ? $post['order'][0]['dir'] : 'asc';
		$sortColumn = $columns[$sortColumn - 1];
		$sql .= " ORDER BY {$sortColumn} {$sortDir}";

		$count = $this->db->query($sql);
		$totaldata = $count->num_rows();
		$start  = isset($post['start']) ? $post['start'] : 0;
		$length = isset($post['length']) ? $post['length'] : 10;
		$sql .= " LIMIT {$start}, {$length}";
		// var_dump($sql);
		$data  = $this->db->query($sql);
		return array(

			'totalData' => $totaldata,

			'data' => $data,

		);
	}
	public function tambahKamus($in)
	{

		return $this->db->insert('kamus', $in);
	}
	public function hapusKamus($id_kamus)

	{

		$this->db->where('id_kamus', $id_kamus);

		return $this->db->delete('kamus');
	}
	public function edit_kamus($in, $id)
	{
		$this->db->where('id_kamus', $id);
		return $this->db->update('kamus', $in);
	}


}
