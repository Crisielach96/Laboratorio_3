/// <reference path="./empleado.ts" />


if(localStorage.getItem("emplaedo")==null){
localStorage.setItem("empleado","Juan-123,Carlos-666,Carla-456");
}

function Loguear(){
    let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value;
    let legajo : string = (<HTMLInputElement> document.getElementById("legajo")).value;

    var i=0;
    var otroString= null;
    var ls=localStorage.getItem("empleado");

    if(ls!=null){
        var stringPartido = ls.split(",");
        for(i;i<3;i++)
        {
            otroString= stringPartido[i].split("-");
            if(otroString[0]==nombre && otroString[1]==legajo){
                alert("LOGUEO EXITOSO");
                window.location.href="paginaPrincipal.html";
                break;
            }
            else{
                alert("Error, datos incorrectos");
                break;
            }
        }
    }
}

