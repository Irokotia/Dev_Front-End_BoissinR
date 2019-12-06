DestinationNice = {
    "destination":"img/Nice.jpg",
    "Pays":'France',
    "Circuit" : "Circuit plage, hôte 4*, Lorem ipsum dolor sit amet\t",
    "Prix":"800€"
};
DestinationRome = {
    "destination":"img/Rome.jpg",
    "Pays":'Italie',
    "Circuit" : "Circuit ruines, hôte 4*, Lorem ipsum dolor sit amet\t",
    "Prix":"800€"
};

DestinationMadrid = {
    "destination":"img/madrid.jpg",
    "Pays":'Espagne',
    "Circuit" : "Circuit ville, hôte 4*, Lorem ipsum dolor sit amet\t",
    "Prix":"800€"
};

AllDestinations = {
    'DestinationNice' : DestinationNice,
    'DestinationRome' : DestinationRome,
    'DestinationMadrid' : DestinationMadrid
};
 index = 0;

document.addEventListener("onload", event => {
    event.preventDefault();
   addAllDestinations();
});

function addAllDestinations(){

    document.getElementById("headdestinations").innerHTML += '<th>' + 'Actions' +'</th>';



    for (const property in AllDestinations) {
        document.getElementById("destinations").innerHTML += '<tr id='+ property + '>';
        for(const element in AllDestinations[property]){
            document.getElementById(property).innerHTML += '<td id='+ property + element + '>';
            if(!AllDestinations[property][element].search('img/')){
                document.getElementById(property + element).innerHTML += '<img src=' + AllDestinations[property][element] + '>';
            }else{
                document.getElementById(property + element).innerHTML += AllDestinations[property][element];
            }

            document.getElementById(property).innerHTML += '</td>';
        }
        document.getElementById(property).innerHTML += '<td><button type="button" name="button">' + 'Decrouvrir'+ '</button></td>';
        document.getElementById(property).innerHTML += '<td><button type="button" name="button" id="Suppression'+ index +'">' + 'Supprimer'+ '</button>' + '<button type="button" name="button" id="Editer">' + 'Editer'+ '</button></td>';
        document.getElementById("destinations").innerHTML += '</tr>';
        index ++;
    }
}

document.getElementById("Suppression0").addEventListener('click',event => {
    document.getElementById("destinations");
    console.log('test');
    var l2 = document.getElementById("destinations").childNodes;
    console.log(l2);
});









