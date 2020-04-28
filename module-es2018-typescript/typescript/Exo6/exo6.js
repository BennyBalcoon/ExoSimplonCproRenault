var personnes;
(function (personnes) {
    personnes[personnes["Sami"] = 1] = "Sami";
    personnes[personnes["Michel"] = 2] = "Michel";
    personnes[personnes["Robert"] = 3] = "Robert";
    personnes[personnes["Maurice"] = 4] = "Maurice";
    personnes[personnes["John"] = 5] = "John";
    personnes[personnes["Tanguy"] = 6] = "Tanguy";
})(personnes || (personnes = {}));
;
console.log(personnes.Robert);
var Tanguy = personnes[6];
console.log(personnes[5]);
console.log("Je m'appelle " + Tanguy + ".");
