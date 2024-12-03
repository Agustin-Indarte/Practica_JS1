function Res_Ejerc11() {
    let numero = +(prompt("Por favor, ingrese un número:")); 
    let divisores = []; 
    let posiblesdivisores = [2,3,5,7];


    for (let divisor of posiblesdivisores){
        if (numero%divisor===0){
            divisores.push(divisor)
        }
    }

    if (divisores.length > 0) {
        document.write(`El número ${numero} es divisible por: ${divisores.join(", ")}`);
    } else {
        document.write(`El número ${numero} NO es divisible por 2, 3, 5 ni 7`);
    }
}


document.getElementById("btn11").addEventListener("click", Res_Ejerc11);


