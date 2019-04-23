function Personne(nom, prenom, pseudo, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }

}

//objet jules
var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
console.log(jules);

//objet Paul
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');
console.log(paul);

//function afficher personne
function afficherPersonne(Personne) {
    console.log(Personne);
}

//Modifier un objet
jules.pseudo = 'jules44';
afficherPersonne(jules.getNomComplet());


//Ajouter une propriété à Personne

jules.age = undefined;
console.log(jules);
jules.age = 30;
console.log(jules);
Personne.prototype.age = 'NON RENSIGNE';

//Ajouter une méthode à Personne
Personne.prototype.getInitials = function () {
    var first = this.nom;
    var second = this.prenom;
    return first.charAt(0) + ' ' + second.charAt(0);

}
console.log(jules.getInitials());

//objet sans function
var robert = {
    nom: 'LEPREFET',
    prenom: 'Robert',
    pseudo: 'robert77',
    getNomComplet: function () {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
};
afficherPersonne(robert.getNomComplet());

function Client(nom,prenom,pseudo,numeroClient){
    Personne.call(this,nom,prenom,pseudo);
    this.numeroClient=numeroClient;
    this.getInfo=function(){
        return this.numeroClient+ ' ' + this.getNomComplet();
    }
}

var steve= new Client('Steve','LUCAS','steve44','A01');
afficherPersonne(steve.getInfo());


