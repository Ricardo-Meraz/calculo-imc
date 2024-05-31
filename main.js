var peso=0;
var altura=0;
var imc=0;

function regpeso()
{
    peso=prompt("Ingresa tu peso")
}
function regaltura()
{
     altura=prompt("Ingresa tu Estatura")
}

function calculoimc()
{
    imc=peso/(altura*altura);
    alert("Tu imc es "+imc)
    if(imc<18.5)
    {
        alert("su peso es bajo");
    }
    else if(imc<=24.9)
    {
        alert("su peso es adecuado");

    }
    else if(imc<=29.9)
     {
        alert("su peso es sobrepeso");
    
    }
    else if(imc<=34.9)
     {
        alert("obesidad grado 1");
        
    }
    
}
