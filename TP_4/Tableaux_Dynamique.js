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
    "destination":"img/Madrid.jpg",
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
        document.getElementById(property).innerHTML += '<td><button type="button" name="button">' + 'Decouvrir'+ '</button></td>';
        document.getElementById(property).innerHTML += '<td><button type="button" name="button" onclick="removeDestination(\''+ property +'\')">' + 'Supprimer'+ '</button>' + '<button type="button" name="button" id="Editer' + property + '" onclick="editDestination(\'' + property + '\')">' + 'Editer'+ '</button></td>';
        document.getElementById("destinations").innerHTML += '</tr>';
        index ++;
    }
}


function removeDestination(img){
    // on se sert de l'image pour récuper la destination car la ligne porte comme id "Destination" + nom de l'img
    if(document.getElementById("destinations").hasChildNodes()){
        var children = document.getElementById("destinations").childNodes;
        for(var i = 1; i < children.length;i++){
            var nameDestination = children[i]['id'];
            if(nameDestination.search(img) != -1){
            document.getElementById("destinations").removeChild(children[i]);
            }
        }
    }
}

function editDestination(id) {
    var button = "Editer" + id;
    var pays = id + "Pays";
    var circuit = id + "Circuit";
    var prix = id + "Prix";
    if (document.getElementById(button).innerText == "Editer") {
        document.getElementById(button).innerText = "Finir";
        document.getElementById(pays).setAttribute("contenteditable", true);
        document.getElementById(pays).setAttribute("color")
        document.getElementById(circuit).setAttribute("contenteditable", true);
        document.getElementById(prix).setAttribute("contenteditable", true);
    } else {
        document.getElementById(button).innerText = "Editer";
        document.getElementById(pays).setAttribute("contenteditable", false);
        document.getElementById(circuit).setAttribute("contenteditable", false);
        document.getElementById(prix).setAttribute("contenteditable", false);
    }
}

document.getElementsByTagName("form").item(0).addEventListener("submit", event => {
    event.preventDefault();

    var img = document.forms[0]['image'].value;
    img = img.replace('.jpg','');
    img = img.replace('C:\\fakepath\\','');
    var inputimg = document.forms[0]['image'];
    var pays = document.forms[0]['pays'].value;
    var circuit = document.forms[0]['circuit'].value;
    var prix = document.forms[0]['prix'].value;
    prix = prix.replace('E','');
    prix = prix + '€';

    addNewDestination(img,inputimg,pays,circuit,prix);
});

function addNewDestination(img,input,pays,circuit,prix) {

    // Cela aurait pu être fait en un boucle , ça serait plus simple mais j'ai préféré faire comme cela
    console.log(img);
    destination = document.getElementById('destinations');
    var namediv = pays + circuit + prix + img;
    var boolean = false;
    if(document.getElementById("destinations").hasChildNodes()){
        var children = document.getElementById("destinations").childNodes;
        for(var i = 1; i < children.length;i++){
            var nameDestination = children[i]['id'];
            if(nameDestination.search(namediv) != -1){
                boolean = true;
            }
        }
    }
    if(boolean == false) {
        // créer une nouvelle ligne correspondant à la destination
        var tr = document.createElement('tr');
        tr.setAttribute('id', 'Destination' + namediv);
        destination.appendChild(tr);

        // créer un nouveau td dans cette ligne correspond à l'image de la destination
        var td = document.createElement('td');
        tr.appendChild(td);
        // créer un nouveau img dans ce td
        var timg = document.createElement('img');
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                timg.setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
        td.appendChild(timg);

        // créer un nouveau td dans cette ligne correspondant au pays
        var td2 = document.createElement('td');
        tr.appendChild(td2);
        var td2Text = document.createTextNode(pays);
        td2.appendChild(td2Text);

        // créer un nouveau td dans cette ligne correspondant au circuit
        var td3 = document.createElement('td');
        tr.appendChild(td3);
        var td3Text = document.createTextNode(circuit);
        td3.appendChild(td3Text);

        // créer un nouveau td dans cette ligne correspondant au prix
        var td4 = document.createElement('td');
        tr.appendChild(td4);
        var td4Text = document.createTextNode(prix);
        td4.appendChild(td4Text);

        // créer un nouveau td dans cette ligne correspondant à découvrir
        var td5 = document.createElement('td');
        tr.appendChild(td5);
        var td5btn = document.createElement('button');
        td5btn.setAttribute('name', 'button');
        td5btn.setAttribute('type', 'button');
        var td5textbtn = document.createTextNode('Decouvrir');
        td5btn.appendChild(td5textbtn);
        td5.appendChild(td5btn);

        // créer un nouveau td dans cette ligne correspondant aux actions disponible pour l'admin du site
        var td6 = document.createElement('td');
        tr.appendChild(td6);
        var td6btn = document.createElement('button');
        td6btn.setAttribute('name', 'button');
        td6btn.setAttribute('type', 'button');
        td6btn.setAttribute('onClick', 'removeDestination(\'' + namediv + '\')');
        var td6textbtn = document.createTextNode('Supprimer');
        td6btn.appendChild(td6textbtn);
        var td6btn2 = document.createElement('button');
        td6btn2.setAttribute('name', 'button');
        td6btn2.setAttribute('type', 'button');
        td6btn2.setAttribute('id','Editer'+namediv);
        td6btn2.setAttribute('onClick', 'editDestination(\'' + namediv + '\')');
        var td6textbtn2 = document.createTextNode('Editer');
        td6btn2.appendChild(td6textbtn2);
        td6.appendChild(td6btn);
        td6.appendChild(td6btn2);
    }else{
        alert('Cette destination est déjà existante');
    }
}









