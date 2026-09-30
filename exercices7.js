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
function getInitials(){
    let ini = []
    let names = nomComplet.split(" ");
    for(let i = 0 ;  i <= names.length - 1 ;i++){
    a = names[i]
        ini.push(a[0]);
    }
    let initials = ini.join(".").toUpperCase();
    return initials;
}
console.log(getInitials()); 