$(document).ready(function() {
    var pays = {
        France : ['Paris','Tours','Bordeaux','Chambery'],
        Italie : ['Rome','Venise','Milan','Florence'],
        Espagne : ['Madrid','Séville','Barcelone','Bilbao'],
        Russie : ['Moscou','Kazan','Sotchi','Saint-Pétersbourg']
    };
    $('#buttonPromtJquery').on('click',function () {
        var buttonPromtJquery = $('#buttonPromtJquery');
        var listVillesJQuery = $('#listVillesJquery');
        var msg = "Veuiller Choisir une destination pour vos vacances";
        saisieJquery = prompt(msg);
        for (const [key, value] of Object.entries(pays)) {
            value.forEach(function(element) {
                if ($('#buttonPromtJquery').val() === "Ajouter" && element.toLowerCase() === saisieJquery.toLowerCase()) {
                    confirm("Etes-vous sûre de vouloir ajouter cette ville ? ");
                    listVillesJQuery.append("Bienvenue en " + key + " Vous pouvez également visiter ces lieux :") ;
                    pays[key].forEach(function (elementB) {
                        listVillesJQuery.append('<li>' + elementB + '</li>');
                    });
                }
                else if(element.toLowerCase() === saisieJquery.toLowerCase()) {
                    paysTarget = key;
                    alert("Bienvenue en " + key);
                    listVillesJQuery.html("Bienvenue en " + key + " Vous pouvez également visiter ces lieux :");
                    pays[key].forEach(function (elementB) {
                        listVillesJQuery.append('<li>' + elementB + '</li>');
                    });
                    // Changement de la valeur du bouton
                    buttonPromtJquery.val = "Ajouter";

                    // / Changement du text du bouton
                    buttonPromtJquery.innerHTML = "Ajouter une destination";
                }
            });
        }
    });

});