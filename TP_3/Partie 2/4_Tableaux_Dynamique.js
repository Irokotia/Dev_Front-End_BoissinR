
var pays = {
    France : ['Paris','Tours','Bordeaux','Chambery'],
    Italie : ['Rome','Venise','Milan','Florence'],
    Espagne : ['Madrid','Séville','Barcelone','Bilbao'],
    Russie : ['Moscou','Kazan','Sotchi','Saint-Pétersbourg']
};



document.getElementsByTagName("form").item(0).addEventListener("submit", event => {
    event.preventDefault();
    choisir_destination();
});

function choisir_destination(){
        var msg = "Veuiller Choisir une destination pour vos vacances";
        saisie = prompt(msg);
    for (const [key, value] of Object.entries(pays)) {
        value.forEach(function(element) {
            if (document.getElementById("buttomPrompt").value === "Ajouter" && element.toLowerCase() === saisie.toLowerCase()) {
                confirm("Etes-vous sûre de vouloir ajouter cette ville ? ");
                document.getElementById("listVilles").innerHTML += "Bienvenue en " + key + " Vous pouvez également visiter ces lieux :" ;
                pays[key].forEach(function (elementB) {
                        document.getElementById("listVilles").innerHTML += '<li>' + elementB + '</li>';
                });
            }
            else if(element.toLowerCase() === saisie.toLowerCase()) {
                paysTarget = key;
                alert("Bienvenue en " + key);
                document.getElementById("listVilles").innerHTML = "Bienvenue en " + key + " Vous pouvez également visiter ces lieux :" ;
                pays[key].forEach(function (elementB) {
                    document.getElementById("listVilles").innerHTML += '<li>' + elementB + '</li>';
                });
                // Changement de la valeur du bouton
                document.getElementById("buttomPrompt").value = "Ajouter";

                // / Changement du text du bouton
                document.getElementById("buttomPrompt").innerHTML = "Ajouter une destination";
            }
        });
    }
}