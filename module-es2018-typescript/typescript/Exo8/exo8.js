var doubler = function (valeur) {
    return valeur * 2;
};
console.log(doubler(5));
var direBonjour = function (nom) {
    if (nom === undefined) {
        nom = 'Bart Simpson';
    }
    console.log("Bonjour " + nom);
};
direBonjour('Marc');
direBonjour(undefined);
