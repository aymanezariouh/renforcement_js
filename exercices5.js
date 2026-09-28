const apprenant = {
 prenom: "Hamza",
 niveau: "debutant",
 exercicesTermines: 8,
 exercicesTotal: 10
};
const apprenant = {
 prenom: "Hamza2",
 niveau: "debutant",
 exercicesTermines: 6,
 exercicesTotal: 10
};
const apprenant = {
 prenom: "Hamza3",
 niveau: "debutant",
 exercicesTermines: 3,
 exercicesTotal: 10
};
function phraseRecapulatif(){
    let phrase = ` ${apprenant.prenom} - niveau ${apprenant.niveau} - ${apprenant.exercicesTermines}/${apprenant.exercicesTotal}`
    console.log(phrase);
}
function pourcentage(){
let pourc =  (apprenant.exercicesTermines/apprenant.exercicesTotal) * 100;
return pourc;
console.log("Progression : "+pourc + "%");
}
function aBesoin(){
if(apprenant.exercicesTermines > 7 ) {apprenant.aBesoinAide = false }else{ apprenant.aBesoinAide = true}  ;
}
function affichage(){
    for (let properties in apprenant){
        console.log(`${properties} : ${apprenant[properties]}\n`);
    }
}
function peutPasser(){
    if(apprenant.exercicesTermines >= 8 && apprenant.aBesoinAide == false){
        console.log(true);
         return;
    }
    console.log(false);
    return;
}
function ontBesoin(){
    let aide = apprenant.filter((note)=>{
        apprenant.aBesoin == true
    });
    console.log(apprenant);
}
phraseRecapulatif();
pourcentage();
aBesoin();
affichage();
peutPasser();
