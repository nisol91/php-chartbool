<?php

include 'data_3.php';

//------------------------

$access_fatturato = $graphs['fatturato']['access'];
$access_fatturato_agent = $graphs['fatturato_by_agent']['access'];
$access_efficienza = $graphs['team_efficiency']['access'];


// var_dump($access_efficienza); die();


//codifica dati per js

$json = json_encode($graphs);



echo $json;




 ?>
