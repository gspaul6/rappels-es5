console.log("01 - Fonctions");


//Definition d'une Function
var nombre1 = 10;
var nombre2 = 20;

function addition(nb1,nb2){
  return  nb1+nb2;
}
var resultat1=addition;
console.log(resultat1(nombre1,nombre2));

//Multiplication
function Multiplication(num1,num2){
    return num1*num2;
}
var resultat3=Multiplication;
console.log(resultat3(nombre1,nombre2));
function substraction(num1,num2){
    return num1-num2;
}

//fonction comme element du 1er order
function afficherOperation(nomOperation, operation,nb1,nb2 ){
    return nomOperation + '(' + nb1 + ',' + nb2 + ')'+ '='+operation(nb1,nb2);
}
console.log(afficherOperation('Somme',addition, 20,40));

//for multiplication
function afficherOperation(nomOperation, operation,nb1,nb2 ){
    return nomOperation + '(' + nb1 + ',' + nb2 + ')'+ '='+operation(nb1,nb2);
}
console.log(afficherOperation('Multiplication',Multiplication, 10,20));

//for substraction
function afficherOperation(nomOperation, operation,nb1,nb2 ){
    return nomOperation + '(' + nb1 + ',' + nb2 + ')'+ '='+operation(nb1,nb2);
}
console.log(afficherOperation('Soustraction',substraction, 15,5));