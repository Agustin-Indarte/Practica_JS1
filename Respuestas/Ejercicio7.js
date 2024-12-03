function Res_Ejerc7 (){
    let numeroA = parseInt(prompt("Por favor, ingrese un número: "));
    let numeroB = parseInt(prompt("Por favor, ingrese otro número: "));
    let numeroC = parseInt(prompt("Por favor, ingrese otro número más: "));

    if (numeroA>numeroB && numeroA>numeroC) {
        document.write ("El número más grande es: " + numeroA)
        
    } else if (numeroB>numeroA && numeroB>numeroC){
        document.write ("El número más grande es: " + numeroB)
    
    } else if (numeroC>numeroA && numeroC>numeroB){
        document.write ("El número más grande es: " + numeroC)
    } else
        document.write ("Todos los números son iguales")
}

document.getElementById("btn7").addEventListener ("click",Res_Ejerc7)


