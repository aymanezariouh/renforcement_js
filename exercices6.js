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

function total(){
    return fournitures.map((four)=>
    ({ 
        nom : four.nom,
        totalLigne: four.prix * four.quantite
    }))
}
const TOTAL = total()
function plusque5(){
    let mujud = fournitures.filter(four=>{
        return four.quantite >= 5 ;
    })
    console.log(mujud);
    
}
function sommeTotalePrix(){
    return fournitures.reduce((acc,rec)=>{
        return  acc = acc + rec.prix;
    },0);
    return acc;
}


plusque5();
console.log(lesNoms);
console.log(TOTAL);
console.log(sommeTotalePrix())

