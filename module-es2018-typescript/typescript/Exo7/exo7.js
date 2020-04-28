var monObjet = {
    premierString: 'Hello!',
    secondString: 'ça roule?',
    leNombre: 666,
    premierArray: ['enfer', 'paradis', 'belzebuth'],
    secondArray: []
};
monObjet.premierArray.forEach(function (element) {
    console.log(element);
});
monObjet.secondArray.push(66, 8, 54, 2);
console.log(monObjet.secondArray);
var sommeSecondArray = monObjet.secondArray.reduce(function (acc, current) { return acc + current; });
console.log(sommeSecondArray);
var result = monObjet.leNombre + sommeSecondArray;
console.log(result);
