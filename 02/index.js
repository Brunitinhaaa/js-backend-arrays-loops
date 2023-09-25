const letras = [];
let somador = 0;

for (let i = 0; i < letras.length; i++) {
    if (letras[i] === "E" || letras[i] === "e") {
        somador += 1;
    }
}

if (somador >= 1) {
    console.log(`Foram encontradas ${somador} letras "E" ou "e".`);
} else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}