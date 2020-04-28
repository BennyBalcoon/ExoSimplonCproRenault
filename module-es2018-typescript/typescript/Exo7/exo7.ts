let monObjet : {premierString: string, secondString: string, leNombre: number, premierArray: string[], secondArray: number[]} = {
    premierString: 'Hello!',
    secondString: 'ça roule?',
    leNombre: 666,
    premierArray: ['enfer', 'paradis', 'belzebuth'],
    secondArray: []
}

monObjet.premierArray.forEach(element => {
    console.log(element);
});

monObjet.secondArray.push(66, 8, 54, 2);
console.log(monObjet.secondArray);

let sommeSecondArray = monObjet.secondArray.reduce((acc, current) => acc + current);
console.log(sommeSecondArray);

let result = monObjet.leNombre + sommeSecondArray;
console.log(result);