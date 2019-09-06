/// <reference path="./empleado.ts" />

let persona1 = new Clases.Empleado("Raul","Gomez",16000000,"M",1,35000);

function Mostrar(p:Clases.Empleado):void{
    console.log(p.ToString());
}

Mostrar(persona1);