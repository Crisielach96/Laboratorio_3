var nombre : string = "cristian";
var apellido : string = "sielach";

function MostrarNombreApellido(nombre:string, apellido:string) : string
{   
    return apellido.toUpperCase()+","+nombre.charAt(0).toUpperCase()+nombre.slice(1);
}

console.log(MostrarNombreApellido("cristian","sielach"));