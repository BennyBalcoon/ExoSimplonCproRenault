const mots: string[] = ["sel", "poivre", "persil", "ail"];
console.log(mots[1]);

let nombres: number[] = [];
nombres.push(67);
nombres.push(7);
nombres.push(43);
console.log(nombres);

const parfums: string[] = ["pistache", "cassis", "fruit de la passion"];
let newParagraph = document.getElementsByTagName("p")[0];
newParagraph.innerHTML = `Mon parfum préféré c'est ${parfums[1]}`;