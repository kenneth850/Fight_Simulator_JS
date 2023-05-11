class Personnage {
    constructor (pseudo, classe, sante, attaque) {
        this.pseudo     = pseudo;
        this.classe     = classe;
        this.sante      = sante;
        this.attaque    = attaque;
        this.niveau     = 1;
    }

    // Création du getter (il permet de récuperer une propriété)

    get informations() {
        return this.pseudo + " " + "(" + this.classe + ")" + " a" + " " + this.sante + " " + "points de vie et est au niveau" + " " + this.niveau
    } 
}

// Mise en place des méthodes evoluer() et verifierSante() dans la classe

Personnage.prototype.evoluer = function() {
    this.niveau++;
   console.log(this.pseudo + " " + "passe au niveau " + this.niveau);
}
Personnage.prototype.verifierSante = function() {
    if (this.sante <= 0) {
        this.sante == 0;
        console.log(this.pseudo + " a perdu !")
    }
}

// Création de la classe Magicien

class Magicien extends Personnage {
    constructor(pseudo, classe, sante, attaque, niveau) {
        super(pseudo , "magicien", 170, 90);
        this.pseudo = "Gandalf";
    }

// Mise en place de méthodes : attaquer(personnage) et coupSpecial(personnage)

    attaquer(Guerrier) {
        Guerrier.sante -= this.attaque;
        console.log(this.pseudo +  " attaque " + Guerrier.pseudo + " en lançant un sort "  + "(" +  ([this.attaque ] + " dégâts") + ")");

        this.evoluer();
        Guerrier.verifierSante();
    }

    coupSpecial(Guerrier) {
        Guerrier.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + Guerrier.pseudo + " (" + ([this.attaque * 5] + " dégâts") + ")");

        this.evoluer();
        Guerrier.verifierSante();
    } 
}

// Création de la classe Guerrier

class Guerrier extends Personnage {
    constructor(pseudo, classe, sante, attaque, niveau) {
        super(pseudo , "guerrier", 350, 50);
        this.pseudo = "Thor";
    }

    // Mise en place de méthodes : attaquer(personnage) et coupSpecial(personnage)

    attaquer(Magicien) {
        Magicien.sante -= this.attaque;
        console.log(this.pseudo +  " attaque " + Magicien.pseudo + " en lançant un sort "  + "(" +([this.attaque] + " dégâts") + ")");

        this.evoluer();
        Magicien.verifierSante();
    }

    coupSpecial(Magicien) {
        Magicien.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + Magicien.pseudo + " (" + ([this.attaque * 5] + " dégâts") + ")");

        this.evoluer();
        Magicien.verifierSante();
    } 
}

// Initialisation des deux personnages 

var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);

