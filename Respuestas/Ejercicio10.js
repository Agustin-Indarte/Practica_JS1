function Res_Ejerc10 (){
    let numero = +(prompt("Por favor, ingrese un número: "));
   
    switch (true){
        case (numero%2==0):
        document.write(`El número ${numero} es divisible por 2`)
        break
        case (numero%3==0):
        document.write(`El número ${numero} es divisible por 3`)
        break
        case (numero%5==0):
        document.write(`El número ${numero} es divisible por 5`)
        break
        case (numero%7==0):
        document.write(`El número ${numero} es divisible por 7`)
        break
        default: 
        document.write(`El número ${numero} NO es divisble por 2,3,5 ni 7`)
    }
}

document.getElementById("btn10").addEventListener ("click",Res_Ejerc10)


