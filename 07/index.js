const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let indice = 0, nome = nomes[indice], nomescomA = [];

while (indice < nomes.length) {
    for (let letra of nome) {
        if (letra === "A" || letra === "a") {
            nomescomA.push(nomes[indice]);
            break;
        }
    }
    indice++;
}

console.log(nomescomA);
