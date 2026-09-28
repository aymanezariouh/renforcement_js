const apprenant = {
 prenom: "Hamza",
 niveau: "debutant",
 exercicesTermines: 6,
 exercicesTotal: 10
};
function phraseRecapulatif(){
    let phrase = ` ${apprenant.prenom} - niveau ${apprenant.niveau} - ${apprenant.exercicesTermines}/${apprenant.exercicesTotal}`
    console.log(phrase);
}
function pourcentage(){
let pourc =  (apprenant.exercicesTermines/apprenant.exercicesTotal) * 100;
console.log("Progression : "+pourc + "%");
}
phraseRecapulatif();
pourcentage();

