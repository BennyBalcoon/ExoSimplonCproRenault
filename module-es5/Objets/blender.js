var blender = {
    mixerDesNombres: function(a, b, c){
        if("number" === typeof a && "number" === typeof b && "number" === typeof c){
            var d = (a * b) + c;
            alert(d);
            return d;
        }else{
            alert("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesChaines: function(i, j){
        if("string" === typeof i && "string" === typeof j){
            var k = "Bonjour " + i + j + "!";
            alert(k);
            return k;
        }else{
            alert("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesBooleens: function(x, y, z){
        if("boolean" === typeof x && "boolean" === typeof y && "boolean" === typeof z){
            var message = "";
            if(x && y && z){
                message = "Tout est vrai !";
            }else{
                message = "Au moins un argument n'est pas vrai !";
            };
            alert(message);
            return message;
        }else{
            alert("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesTableaux: function(g, z){
        if("object" === typeof g && "object" === typeof z){
            var t = g[2] + z[1];
            var u = g[1] + z[2];
            var v = t * u;
            alert("Si ceci : " + v + " est un nombre vous avez réussi !");
            return v;
        }else{
            alert("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesObjets: function(o, t){
        if("object" === typeof o && "object" === typeof t){
            var p = (o.a * o.b) / (t.x * t.y);
            alert("Si ceci : " + p + " est un nombre vous avez réussi !");
            return p;
        }else{
            alert("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesFonctions: function(z, w){
        if("function" === typeof z && "function" === typeof w){
            z();
            w();
            alert("Bravo ! Les types de données fournis sont corrects .");
        }else{
            alert("Les types de données fournis sont incorrects !");
        };
    },
    mixerDeTout: function(k, l, m, n){
        if("string" === typeof k && "object" === typeof l && "function" === typeof m && "number" === typeof n){
            alert("Voici un message : " + k);
            alert("Voici un message trouvé dans un objet : " + l.message);
            m();
            alert("Mais ceci est un nombre : " + n);
            return n;
        }else{
            alert("Les types de données fournis sont incorrects !");
        };
    }
};