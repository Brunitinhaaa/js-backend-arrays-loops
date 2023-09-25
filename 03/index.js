const numeros = [];
let verifica = 0;

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] === 10) {
        verifica++;
        console.log(i);
    }
}

if (verifica === 0) {
    console.log(-1);
}