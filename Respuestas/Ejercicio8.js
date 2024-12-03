function Res_Ejerc8 (){
    let numero = parseInt(prompt("Por favor, ingrese un número: "));

    if (numero%2==0) {
        document.write ("El número " + numero + " es divisible entre 2.")
        
    } else
        document.write ("El número " + numero + " NO es divisible entre 2.")
}

document.getElementById("btn8").addEventListener ("click",Res_Ejerc8)


