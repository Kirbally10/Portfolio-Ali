function calcul_moyenne() {
    var n1 = prompt("Donner la première note : ");
    var n2 = prompt("Donner la deuxième note : ");
    var n3 = prompt("Donner la troisième note : ");

    var somme= Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme: " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne: " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    }
    else if (moyenne < 12) {
        document.write("Admis - Passable");
    }
    else if (moyenne < 14) {
        document.write("Admis - Bien");
    }
    else {
        document.write("Admis - Très Bien");
    }

    document.write("<br><br><a href='Index.html'>Retour</a>");
}

function test_temperature() {
    var température = prompt("Donner la température : ");

    if (température < 10) {
        document.write("Froid");
        document.bgColor="blue"
    }

    else if (température < 25) {
        document.write("Normal");
        document.bgColor="green"
    }

    else {
        document.write("Chaud");
        document.bgColor="red"
    }

    document.write("<br><br><a href='Index.html'>Retour</a>");
}

function comparaison_nombres() {
var n1 = prompt("Donner un premier nombre : ");
var n2 = prompt("Donner un deuxième nombre : ");

if (n1 > n2) {
    document.write("Le plus grand nombre est : " + n1 + "<br>");
    document.write("Le plus petit nombre est : " + n2 + "<br>");
}

else {
    document.write("Le plus grand nombre est : " + n2 + "<br>");
    document.write("Le plus petit nombre est : " + n1 + "<br>");
}

document.write("<br><br><a href='Index.html'>Retour</a>");
}