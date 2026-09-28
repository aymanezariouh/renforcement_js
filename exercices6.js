const fournitures = [
 { nom: "Cahier", prix: 18, quantite: 12 },
 { nom: "Stylo", prix: 4, quantite: 30 },
 { nom: "Marqueur", prix: 15, quantite: 4 },
 { nom: "Post-it", prix: 22, quantite: 6 }
];
function onlyNames(){
return fournitures.map((four)=>four.nom);
}
const lesNoms = onlyNames();


console.log(lesNoms);
