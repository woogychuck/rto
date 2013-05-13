<?php

class Planet {
	public $name;
	public $type;
	
	public function __construct(){
		$this->name = "Earth";
		$this->type = "Blue";
	}
}


$earth = new Planet();


echo json_encode($earth);
?>
