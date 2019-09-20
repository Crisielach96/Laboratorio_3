<?php
$archivo=fopen("/json/autos.json","r");

$leido = fread($archivo);
fclose($archivo);
echo $leido;
?>