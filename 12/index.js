const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
let i = 0;

while (i < filaDeDentro.length) {
    if ((filaDeFora !== "") && (filaDeDentro.length < 5)) {
        filaDeFora.shift(filaDeFora[i]);
        filaDeDentro.push(filaDeFora[i]);
    }
    i++;
}

console.log(filaDeDentro);
console.log(filaDeFora);
