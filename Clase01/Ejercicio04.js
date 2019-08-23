function parOImpar(numero) {
    var retorno = false;
    if (numero % 2 == 0) {
        retorno = true;
    }
    return retorno;
}
function mensaje(numero) {
    if (parOImpar(numero)) {
        console.log("El numero " + numero + " es par");
    }
    else {
        console.log("El numero " + numero + " es impar");
    }
}
mensaje(4);
mensaje(7);
