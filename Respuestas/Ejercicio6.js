function Res_Ejerc6 (){
    let numeroA = parseInt(prompt("Por favor, ingrese un número: "));
    let numeroB = parseInt(prompt("Por favor, ingrese otro número: "));

    if (numeroA>numeroB){
        document.write ("El número más grande es: " + numeroA)
        
    } else if (numeroB>numeroA){
        document.write ("El número más grande es: " + numeroB)
    } else
        document.write ("ambos numeros son iguales")


       
    
}

document.getElementById("btn6").addEventListener ("click",Res_Ejerc6)


