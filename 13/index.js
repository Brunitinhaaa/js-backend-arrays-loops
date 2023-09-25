const disjuntores = [false, false, true, false, false, true, false, false];
let i = 0;

while (i < disjuntores.length) {
    if (disjuntores[i] === true) {
        console.log(i);
    }
    i++;
}