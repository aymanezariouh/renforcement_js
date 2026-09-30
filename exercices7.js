const nomDepot = " Exercices JavaScript Warm Up ";
const phrase = "Je progresse avec des petits exercices reguliers";
const nomComplet = "hamza bouhouch";

function normaliserDepot(nom){
    return nomDepot.trim().toLocaleLowerCase().split(" ") .join("-")
}
const first =normaliserDepot(" '"+ nomDepot +"' ")
console.log(first);
function compterMots(phrase ){
    return phrase.trim().toLocaleLowerCase().split(" ").length;
}
console.log(compterMots(phrase));   