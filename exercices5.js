const apprenant = {
 prenom: "Hamza",
 niveau: "debutant",
 exercicesTermines: 6,
 exercicesTotal: 10
};
function phraseRecapulatif(apprenant){
    let phrase = ` ${apprenant.prenom} - niveau ${apprenant.niveau} - ${apprenant.exercicesTermines}/${apprenant.exercicesTotal}`
    console.log(phrase);
}
phraseRecapulatif(apprenant);
