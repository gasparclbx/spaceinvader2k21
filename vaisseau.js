// Création d'une fonction créant nos entités
function Sprite(filename, left, top, height) {
    this.ship = document.createElement("img");
    this.ship.src = filename;
    this.ship.style.position = "fixed";
    document.body.appendChild(this.ship);
// Ajout d'un argument pour la position sur la verticale
    Object.defineProperty(this, "left", {
        get: function() {
            return this._left;
        },
        set: function(value) {
            this._left = value;
            this.ship.style.left = value + "px";
        }
    });
// Ajout d'un argument pour la position sur l'horizontale
    Object.defineProperty(this, "top", {
        get: function() {
            return this._top;
        },
        set: function(value) {
            this._top = value;
            this.ship.style.top = value + "px";
        }
    });

// Ajout d'un argument pour l'apparition
    Object.defineProperty(this, "display", {
        get: function() {
            return this.ship.style.display;
        },
        set: function(value) {
            this.ship.style.display = value;
        }
    });
// Ajout d'un argument pour la taille
    Object.defineProperty(this, "height", {
        get: function() {
            return this._height;
        },
        set: function(value) {
            this._height = value;
            this.ship.style.height = value + "px";
        }
    });
    this.height = height 
    this.left = left;
    this.top = top;
}

//mise en place d'une clock pour faire les animations
Sprite.prototype.startAnimation = function (fct, interval){
    if (this._clock) window.clearInterval(this._clock);
    var _this = this;
    this._clock = window.setInterval( function()  {
        fct( _this);
    }, interval );
};

Sprite.prototype.stopAnimation = function() {
    window.clearInterval (this._clock);
};


// Vérification si il y a collision ou non
Sprite.prototype.checkCollision = function(other) {
    return  !  ((this.top + this.ship.height < other.top) ||
                this.top > (other.top + other.ship.height) ||
                (this.left + this.ship.width < other.left ) ||
                this.left > (other.left + other.ship.width) );
}
