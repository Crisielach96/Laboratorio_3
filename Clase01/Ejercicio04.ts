function parOImpar(numero:number) : boolean
{
    var retorno:boolean=false;
    
    if(numero%2==0)
    {
        retorno=true;
    }

    return retorno;
}

function mensaje(numero:number) : void
{
    if(parOImpar(numero))
    {
        console.log("El numero "+numero+" es par");
    }
    else
    {
        console.log("El numero "+numero+" es impar"); 
    }
}
mensaje(4);
mensaje(7);
