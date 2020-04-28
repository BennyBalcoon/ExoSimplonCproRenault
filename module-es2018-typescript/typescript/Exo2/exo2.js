var monOrdi = "MacBook Air";
console.log(monOrdi);
var taille = 13;
console.log(taille);
var myNewParagraph = document.getElementsByTagName("p")[0];
myNewParagraph.innerHTML = "Mon " + monOrdi + " a un \u00E9cran de " + taille + " pouces";
