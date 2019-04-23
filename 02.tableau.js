var ville=['nantes','paris','saint-nazaire','angers','le mans'];


function afficher(text){
    console.log(text);
}

ville.forEach(function(a){
  afficher(a)
});

//every function
var lettreADansToutesLesVilles=ville.every(function(element){
return element.includes('a');
});
console.log(lettreADansToutesLesVilles);

//some
var auMoinsUneVilleAvecUnTiret=ville.some(function(elementTiret){
     return elementTiret.includes('-');
     });

    console.log(auMoinsUneVilleAvecUnTiret);
    
//filter
    var villesSansTiretSansEspace=ville.filter(function(elementFilter){
        return !elementFilter.includes('-')&&!elementFilter.includes(' ');
        });
        console.log(villesSansTiretSansEspace);

//Chainer les Fonctions
var villesMajusculeSeTerminantParS=ville.map(function(element){
    return element.toUpperCase();
}).filter(function(elementFilter){
   return elementFilter.endsWith('S');

});
    console.log(villesMajusculeSeTerminantParS);

