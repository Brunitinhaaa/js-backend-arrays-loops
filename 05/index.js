const original = [];
const nova = [];

for (let i = 0; i <= original.length; i++) {
    if (original[i] % 2 === 0) {
        nova[nova.length] = original[i];
    }
}

console.log(nova);
