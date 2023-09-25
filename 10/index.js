const numeros = [8, 11, 4, 1];
let maior = 0, menor = 0, i = 0;

while (i < numeros.length) {
    if (i === 0) {
        menor = numeros[i];
    }
    if ((numeros[i]) > maior) {
        maior = numeros[i];
    }
    if ((numeros[i]) < menor) {
        menor = numeros[i];
    }
    i++;
}

console.log(maior - menor);
