const inscriptions = [
    { montant: 250, statut: "standard" },
    { montant: 900, statut: "standard" },
    { montant: 1600, statut: "rattrapage" }
];
let reduction = 0;
let fraisdossier = 40;
function calculerInscription(montant, statut) {

    if (montant >= 1500) {
        reduction = 15;
    }
    if (montant  <= 1499) {
        reduction = 10;
    }
    if (montant <= 799) {
        reduction = 5;
    }
    if (montant < 300) {
        reduction = 0;
    }
    if (statut == "rattrapage") {
        reduction =reduction + 5;
    }
    if (reduction >= 18) {reduction = 18;}
    let totreduction =montant * (reduction / 100)
    let totalapres = montant - (totreduction);
    (totalapres >= 500) ? fraisdossier = 0 : fraisdossier;
    let Total = totalapres + fraisdossier;
    return {
        reduction,
        totaRediut : totreduction,
        totalapres,
        fraisdossier,
        TotalaPayer: Total
    }
}
console.log(calculerInscription(1600, "rattrapage"));
