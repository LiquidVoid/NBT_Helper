<?php
	$sql = mysqli_connect("localhost", "lordzeel_php", "Redstone1", "lordzeel_mcNBT");
	
	mysqli_query($sql, 
		"INSERT INTO template_Entity  VALUES (" . 
			$_GET["name"] . ", " . 
			$_GET["description"] . ", " . 
			$_GET["type"] . ", " . 
			$_GET["def"] . ", " . 
			$_GET["expected"] . ", " . 
			$_GET["nest"] . 
		")"
	);

?>