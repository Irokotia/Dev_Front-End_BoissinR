
var pays = {
    France : ['Paris','Tours','Bordeaux','Chambery'],
    Italie : ['Rome','Venise','Milan','Florence'],
    Espagne : ['Madrid','Séville','Barcelone','Bilbao'],
    Russie : ['Moscou','Kazan','Sotchi','Saint-Pétersbourg']
};



document.getElementsByTagName("form").item(0).addEventListener("submit", event => {
    event.preventDefault();

    for (const [key, value] of Object.entries(pays)) {
        value.forEach(function(element) {
            if(element.toLowerCase() === document.getElementById("ville").value.toLowerCase()) {
                alert("Bienvenue en " + key);
            }
        });
    }
});