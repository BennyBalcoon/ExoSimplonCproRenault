enum personnes {
    Sami = 1,
    Michel = 2,
    Robert = 3,
    Maurice = 4,
    John = 5,
    Tanguy = 6
  };

  console.log(personnes.Robert);

  const Tanguy = personnes[6];
  console.log(personnes[5]);

  console.log(`Je m'appelle ${Tanguy}.`);