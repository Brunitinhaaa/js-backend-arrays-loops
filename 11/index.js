const original = [5, 7, 13, 17, 26, 34, 118, 245];
let i = 0, novo = [];

while (i < original.length) {
    if ((original[i] >= 10) && (original[i] <= 20) || (original[i] > 100)) {
        novo.push(original[i]);
    }
    i++;
}

console.log(novo);