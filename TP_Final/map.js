// Coordonées GPS Grenoble longitude latitude
var mymap = L.map('mapid').setView([45.188529, 5.724524], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11'
}).addTo(mymap);

// création des difféntes icônes
var selectourIcon = L.icon({
    iconUrl : 'img/marqueurmap1.png',
    iconSize :  [38,38],
});
var framIcon = L.icon({
    iconUrl : 'img/marqueurmap2.png',
    iconSize :  [38,38],

});
var havasIcon = L.icon({
    iconUrl : 'img/marqueurmap3.png',
    iconSize :  [38,38],
    // rajout de la classe blinking pour l'animation
    className: 'blinking'
});

// Création des différents marqueurs
var selectourMarker = L.marker([45.190689,5.728987],{icon : selectourIcon}).addTo(mymap);
var framMarker = L.marker([45.18827,5.73036],{icon : framIcon}).addTo(mymap);
var havasMarker = L.marker([45.191536,5.722979],{icon : havasIcon}).addTo(mymap);

// Création des PopUp sur les différents marqueurs
selectourMarker.bindPopup("<b> Agence Selectour </b>").openPopup();
framMarker.bindPopup("<b> Agence de voyages Fram </b>").openPopup();
havasMarker.bindPopup("<b> Agence Havas Voyages </b> <b style='color:red'>(PRINCIPALE)</b>").openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);
