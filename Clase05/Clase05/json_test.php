<?php
$producto = $_POST["productos"]?$_POST["productos"]:NULL;
var_dump($producto);

$OBJprod=new StdClass();
$OBJprod = json_decode($producto);
echo $producto->nombre;
?>