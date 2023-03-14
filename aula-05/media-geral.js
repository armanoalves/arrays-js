const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedias(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedias(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedias(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedias(salaPython)}`);