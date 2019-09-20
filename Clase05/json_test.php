<?php
$producto = $_POST["productos"]?$_POST["productos"]:NULL;

$OBJprod=new StdClass();
$OBJprod = json_decode($producto);

$OBJprod ->precio = 123;
$OBJprod ->nombre = "tomate";

$STRINGprod = json_encode($OBJprod);

echo $STRINGprod;
?>