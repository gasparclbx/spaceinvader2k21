var image = document.querySelector(".image");
    s = image.style, // Un petit raccourci
    i = image.offsetLeft, // On récupère la position absolue initiale.
document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;
     
    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
    switch(keyCode){
    case 37:
        if(i>0){
            i=i-15;
            break;
        }
    case 39:
        if(i<window.innerWidth){
            i=i+15;
            break;
        }
    }
    // Et enfin on applique les modifications :
    
    s.left = String(i)+'px';

}