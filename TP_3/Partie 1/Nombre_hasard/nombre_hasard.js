// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
function getRandomArbitrary(min, max) {
    var nb = min + (max-min+1)*Math.random();
    return Math.floor(nb);
}


function initGamePlusouMoins() {
    var nb = getRandomArbitrary(1, 10);  // nb a deviner
    console.log(nb);
    var cpt = 0;    // nb de coups
    var saisie;
    var trouve = false;
    var msg = 'Le nombre à deviner est compris entre 1 et 10.';

    do {
        saisie = prompt(msg);
        cpt++;
        // message a afficher au prochain tour :
        if (saisie > nb)
            msg = "C'est moins";
        else if(saisie < nb)
            msg = "C'est plus";
        else
            trouve = true;

        if(cpt === 3)
            break
    }
    while (saisie != nb && cpt <= 3);
    // Messages d'alertes en fonction de la réussite ou de l'échec de l'utilisateur
    if (trouve === true && cpt === 1 ) { // Si il a gagné en 1 seul essai
        alert("Bravo ! Tu as gagné en un seul essai");
    } else if (trouve === true && cpt <= 3) { // S'il a gagné en 2 ou 3 essais
        alert("Bravo ! Tu as gagné en " + cpt + " essais !");
    } else if (trouve === false) {
        alert("Perdu ! Tu n'as le droit qu'à 3 essais !");
    }
}