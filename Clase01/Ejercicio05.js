var nombre = "cristian";
var apellido = "sielach";
function MostrarNombreApellido(nombre, apellido) {
    return apellido.toUpperCase() + "," + nombre.charAt(0).toUpperCase() + nombre.slice(1);
}
console.log(MostrarNombreApellido("cristian", "sielach"));
