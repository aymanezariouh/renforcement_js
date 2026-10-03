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
function Totperuser(){
   return progressions.reduce((acc,rec)=>{
      let user = rec.apprenant;
      if(acc[user]){
         acc[user] += rec.points;
      }else{
         acc[user] = rec.points ;
      }
      return acc;
   },{})
}
function aveg(){
   let TnumDapp = progressions.map((name)=>{
   return name.apprenant;
});
let cleanNames = TnumDapp.reduce((acc, rec)=>{
   if(!acc.includes(rec)){
      acc.push(rec);
   }
   return acc
},[])
let lasomme = calculeTotaParClasse()
return lasomme/cleanNames.length

}
function audessousdeavg(){
  let totals = Totperuser();   // { Hamza: 20, Darkaoui: 21, Abdi: 16 }
  let moyenne = aveg();        // 19
  let result = [];
   let nom;
  for ( nom in totals) {
    if (totals[nom] > moyenne) {
      result.push(nom); // or push({ nom: nom, points: totals[nom] })
    }
  }

  return result;
}

function creeBilan() {
   let total = calculeTotaParClasse();
  let totalsUser = Totperuser();
  let moyenne = aveg();
  let audessus = audessousdeavg();
  
  console.log(`Total de points : ${total}`);
  console.log(Lemeilleur());
  
  console.log("Points par apprenant ");
  for (let nom in totalsUser) {
    console.log(` ${nom} : ${totalsUser[nom]} points`);
  }

  console.log(`Moyenne: ${moyenne}`);
  console.log(` ${audessus.join(", ")}`);
}

creeBilan();
