const doubler = (valeur: number): number => {
    return valeur * 2;
}

console.log(doubler(5));

const direBonjour = (nom: any): void => {
    if (nom === undefined) {
        nom = 'Bart Simpson';
    }
    console.log(`Bonjour ${nom}`);
}
direBonjour('Marc');
direBonjour(undefined);