function miFuncion(numero, cadena) {
    if (cadena != null) {
        for (var i = 0; i < numero; i++) {
            console.log(cadena);
        }
    }
    else {
        console.log("-" + numero);
    }
}
miFuncion(3, "Hola");
miFuncion(5);
