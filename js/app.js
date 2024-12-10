function sumar() {
    const forma = document.getElementById('forma');

    let operandoA = forma.elements.operandoA; 
    let operandoB = forma.elements.operandoB; 

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if (isNaN(resultado)) {
        resultado = 'La operación no incluye números';
    }


    document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}`; 

    console.log("Aplicación calculadora");
}


const botonSumar = document.getElementById('sumar');
botonSumar.addEventListener('click', sumar);
