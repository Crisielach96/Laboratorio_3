function Datos(){
    let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value;
    let edad : string = (<HTMLInputElement> document.getElementById("edad")).value;
    alert(nombre+" "+edad);
    console.log(nombre + " " +edad);
    (<HTMLDivElement> document.getElementById("div")).innerHTML=nombre + " " + edad;
}
