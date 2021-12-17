// Création des Invader qui tirent
var tourelle1 = new Sprite("images/tourelle.png",200, 150, 35);
var tourelle2 = new Sprite("images/tourelle.png",500, 150, 35);
var tourelle3 = new Sprite("images/tourelle.png",900, 150, 35);
var tourelle4 = new Sprite("images/tourelle.png",1200, 150, 35);

tourelle1.left = window.innerWidth/4.5;
tourelle2.left = window.innerWidth/2.5;
tourelle3.left = window.innerWidth/1.7;
tourelle4.left = window.innerWidth/1.3;

var shoot1 = new Sprite("../images/missile.png", 650, 550);
        shoot1.top = tourelle1.top;
        shoot1.height = "15";
        shoot1.display = "none";
        var shoot2 = new Sprite("../images/missile.png", 650, 550);
        shoot2.height = "15";
        shoot2.display = "none";
        var shoot3 = new Sprite("../images/missile.png", 650, 550);
        shoot3.height = "15";
        shoot3.display = "none";
        var shoot4 = new Sprite("../images/missile.png", 650, 550);
        shoot4.height = "15";
        shoot4.display = "none";

// Tir des invader
function moveShoot(shoot1){
    if(shoot1.top >= window.innerHeight -100){
        shoot1.display = "none";
    }
if (shoot1.display == "none") {
    shoot1.display = "block";
    shoot1.left = tourelle1.left + (tourelle1.ship.width - shoot1.ship.width) / 2;
    shoot1.top = shoot1.top + 30;
    shoot1.startAnimation(moveShoot, 100);
}
for (i = 1; i <= 89; i++) {
    var mur = window["new_wall" + i];
    if (mur.display == "none") continue;
    if (shoot1.checkCollision(mur)) {
        shoot1.stopAnimation();
        shoot1.display = "none";
        shoot1.top = tourelle1.top +30;
        mur.display = "none";
    };
};
if (shoot1.checkCollision(vaisseau)) {
    kill.play();
    shoot1.stopAnimation();
    shoot1.display = "none";
    if (nbvie = 3 ){
        life1.display = 'block';
        life2.display = 'block';
        life3.display = 'block';
        nbvie -=1;
    }else if (nbvie = 2) {
        life1.display = 'block';
        life2.display = 'block';
        life3.display = 'none';
        nbvie -= 1;
    }else if (nbvie = 1) {
        life1.display = 'block';
        life2.display = 'none';
        life3.display = 'none';
        nbvie -= 1;
    }else if (nbvie = 0) {
        life1.display = 'none';
        life2.display = 'none';
        life3.display = 'none';
    }
        
};
if (nbvie == 0) {
    life1.display = 'none';
    life2.display = 'none';
    life3.display = 'none';
}
};
var interval = setInterval(function(){moveShoot(shoot1)},2000);
// depacement des tourelle vers la droite
function movetourelleright(tourelle){
    tourelle.left = tourelle.left + 3;
    for (i=1; i<=4;i++){
        if (window["tourelle"+i].left>=document.body.clientWidth - tourelle.ship.width){
            tourelle.startAnimation(movetourelleleft, 40);
        }
    }
}
// deplacement tourelle vers la gauche
function movetourelleleft(tourelle){
    tourelle.left = tourelle.left - 3;
    for (i=1; i<=4;i++){
        if (window["tourelle"+i].left<=0){
            tourelle.startAnimation(movetourelleright, 40);
        }

    }
}