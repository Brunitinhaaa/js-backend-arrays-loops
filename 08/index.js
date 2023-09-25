const numeros = [3, 24, 1, 8, 11, 7, 15];
let i = 0, maior = 0;

while (i < numeros.length) {
    if ((numeros[i]) > maior) {
        maior = numeros[i];
    }
    i++;
}

console.log(maior);