function Res_Ejerc9 (){
    let frase = (prompt("Por favor, ingrese una frase: "));
    vocales ="AEIOUÁÉÍÓÚaeiouáéíóú"
    let FraseSinVocales=""

    for (let letra of frase){
        if (vocales.includes(letra)){
            FraseSinVocales+=letra
        }
    } 
    document.write(`Tu frase sin vocales es: ${FraseSinVocales}`)

}           

document.getElementById("btn9").addEventListener ("click",Res_Ejerc9)


/* function Res_Ejerc9 (){
    let frase = (prompt("Por favor, ingrese una frase: ").trim());

    frase = frase.toLowerCase();
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase.charAt(i);

        if (caracter==="a" ||
            caracter==="e" ||
            caracter==="i" ||
            caracter==="o" ||
            caracter==="u" 
        ){
            vocalesEncontradas += caracter
        }
    }
    document.write(`Tu frase sin vocales es: ${FraseSinVocales}`)

}

document.getElementById("btn9").addEventListener ("click",Res_Ejerc9) */



