const progressions = [
 { apprenant: "Hamza", exercice: "05", points: 12 },
 { apprenant: "Darkaoui", exercice: "05", points: 10 },
 { apprenant: "Hamza", exercice: "06", points: 8 },
 { apprenant: "Abdi", exercice: "05", points: 7 },
 { apprenant: "Darkaoui", exercice: "06", points: 11 },
 { apprenant: "Abdi", exercice: "06", points: 9 }
];
console.log("=== BILAN DE PROGRESSION ===");
function calculeTotaParClasse(){
return progressions.reduce((acc , rec) => {
     acc += rec.points;
     return acc;
},0)
}
function Lemeilleur(){
    let Tabpoints = []
    Tabpoints = progressions.map((item)=> {
       return item.points;
    })
    let maximum = Math.max(...Tabpoints);

    return progressions.filter((e)=>{
       return e.points == maximum
    })
}
console.log(Lemeilleur());






function creeBilan(){

}
