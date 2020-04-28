const monOrdi: string = "MacBook Air";
console.log(monOrdi);

const taille: number = 13;
console.log(taille);

let myNewParagraph = document.getElementsByTagName("p")[0];
myNewParagraph.innerHTML = `Mon ${monOrdi} a un écran de ${taille} pouces`;