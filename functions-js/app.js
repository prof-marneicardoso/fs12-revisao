// Functions em JS


// Hoisting (eleva a Function e espera que ela exista)
const soma = somar(10, 11);
console.log(soma);



// Function Nomeada
function somar(valor1, valor2) {
    // const valor1 = 5;
    // const valor2 = 4;

    // const resultado = valor1 + valor2;
    // console.log(resultado);

    return valor1 + valor2;
}

// const resultado = somar(15, 11);
// console.log(resultado);
// console.log(somar(15, 14));

// Function Anônima
const calcular = function(valor1, valor2) {
    return valor1 + valor2;
}

// console.log(calcular(5, 10));


// Arrow Function
const arrow = (pi = 3.14 /* valor default */, valor2 = 7) => pi + valor2;
// const arrow = (valor1 = 4, valor2 = 4) => valor1 + valor2;

// console.log(arrow(undefined, 7));

const arrow2 = () => {
    const n1 = 9;
    const n2 = 8;

    return n1 + n2;
}

// console.log(arrow2());
