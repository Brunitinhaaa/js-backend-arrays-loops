const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];
let novo = [], i = 0;

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        novo.push(arrayA[i]);
    } else {
        novo.push(arrayB[i]);
    }
}

console.log(novo);