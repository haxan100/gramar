<?php 
        
defined('BASEPATH') OR exit('No direct script access allowed');
        
class Gramar extends CI_Controller {
	 public function __construct()

  {
    parent::__construct();
    $this->load->model('KataModel');
  }

public function index()
{
	$data['title']= "TypoGrap - Typing For Your Future";
		$this->load->view('templates/header',$data);
		$this->load->view('templates/navbar');
		$this->load->view('templates/menu');
		$this->load->view('templates/footer');                
}
 public function typo()
{

		$data['title'] = "Kata Dasar";
		$this->load->view('templates/header', $data);

		$this->load->view('templates/header');
		$this->load->view('templates/navbar');
		$this->load->view('typo');
		$this->load->view('templates/footer');    
	
}
public function multiexplode ($delimiters,$string) {
	    $ready = str_replace($delimiters, $delimiters[0], $string);
	    $launch = explode($delimiters[0], $ready);
	    return  $launch;
}
	public function punctuationRemovalandstopwardRemoval($string){	
		// var_dump($_POST);
		// $string = $_POST['input'];
        $delimiter = array(' ','.',',','"',"'",'-
                             ','/','{','}','+','_','!','@','#','$','%','^','&','*','(',')','
                             ?','>','<','[',']','|','`','~',';',':','=','\n','\r','\t','\\');
        $value = str_replace($delimiter,"",$string);
		return $value;
	}
	public function type()
	{
		$arr = $this->KataModel->getAllKataDasar();
		$ob = json_decode(json_encode($arr), TRUE);
			// var_dump($ob);die;

		foreach ($ob as $key => $value) {
			# code...
			// var_dump($value['katadasar']);die;
			
		}

		
			$output = '';
			$flag   = 0;
			$input  = $_POST['input'];
			$token  = $this->multiexplode(array(" ","\n"),$input);
			// $arr =$this->arr(); 
			// var_dump($arr);die;

			$Finalinput = $token;
			foreach ($Finalinput as $key => $v) {
				$casefolding = strtolower($v);
				$prs    = $this->punctuationRemovalandstopwardRemoval($casefolding);
				
				if (preg_match('~[0-9]+~', $prs)) {
					$flag = 1;
				}else{

	     foreach ($ob as $key => $value) {
			# code...
		
					foreach ($value as $word) {
						$lev = levenshtein($prs, $word);
						if ($lev == 0) {
							$flag = 1;
							break;
						}
						$data[$word] = $lev; 
					}	
						// var_dump($value['katadasar']);die;
		         }


				}
				
				if($flag == 1){
					$output .= '<span>'.$v.'</span> ';		
				}else{
					asort($data);
					$short = reset($data);
					$str = '';
					foreach ($data as $key => $value) {
						if($value== $short){
							$str.= $key.", ";
						}
					}	
					$output .= '<span style="color:red;" data-toggle="tooltip" title="'.$str.'">'.$v.'</span> ';		
				}
				$flag = 0;
			}
			echo $output;
	}
	 public function kamus()
	{
		$data['title'] = "Kamus  ";
		$this->load->view('templates/header', $data);
		$this->load->view('templates/navbar');
		$this->load->view('kamus');
		$this->load->view('templates/footer');    
	
}
	public function kamusby()
	{
		$url = $this->uri->segment(3);

		// var_dump($url);
		$data['data'] = $this->KataModel->getKamusByAwal($url);

		// var_dump($data);

		$data['title'] = "Kamus  ".$url;
		$this->load->view('templates/header', $data);

		$this->load->view('templates/navbar');
		$this->load->view('kamus',$data);
		$this->load->view('templates/footer');
	}
public function kamusDetail($id)
{
	$data['data'] = $this->KataModel->getKamusById($id)[0];

	// var_dump($data);

	$data['title'] = "Kamus Detail - ".$this->KataModel->getKamusById($id)[0]->nama_kamus;
	$this->load->view('templates/header', $data);

	// $this->load->view('templates/header');
	$this->load->view('templates/navbar');
	$this->load->view('kamus_detail', $data);
	$this->load->view('templates/footer');
}


}
        
    /* End of file  gramar.php */
        
                            