<?php 

defined('BASEPATH') OR exit('No direct script access allowed');
                        
class LoginModel extends CI_Model {
                        
public function login(){
                        
                                
}
	public function getAdminByEmailPass($email, $password)
	{
		// var_dump($password);
		$this->db->select('*');
		$this->db->where('username', $email);
		$this->db->where('password', $password);
		$query = $this->db->get('admin');
		return $query->result();
		// var_dump( $this->db->last_query());die;
		# code...
	}                   
                            
                        
}
                        
/* End of file LoginModel.php */
    
                        