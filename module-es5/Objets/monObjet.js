var monObjet = {
    e: function(){
      alert(this.t);
    },
    r: true,
    t: "Ceci est un texte dans un objet"
};

var monAutreObjet = {
    e: [function(){
        alert("Vous êtes ici !");
    }, true],
    r: false,
    t: function(){
        this.y = {
            e:function(){
                alert("Ou suis je ? Qui suis je ?");
            }
        };
        alert("Desormais ma propriété y contient un objet");
    }
};