const profil = {
  pseudo: "hb",
  email: "hamza.github.com",
  depot: "github.com/hamza/warmup",
  commits: "5",
};
let result = {};
const ereurs = [];
let valide = true;
function validerProfil() {
  if (profil.pseudo.length < 3) {
    ereurs.push("Le pseudo doit contenir au moins 3 caracteres.");
  }
  if (!profil.email.includes("@") || !profil.eamil.includes(".")) {
    ereurs.push("L'email n'est pas valide.");
  }
  if (!profil.depot.startsWith("https://github.com")) {
    ereurs.push("L'URL du depot GitHub n'est pas valide.");
  }
  if (!typeof profil.commits == "number" || profil.commits < 6) {
    ereurs.push(
      "Le nombre de commits doit etre un nombre superieur ou egal a 6.",
    );
  }
  if (ereurs.length != 0) valide = false;
  return (result = {
    valide,
    ereurs,
  });
}
let resultat = validerProfil();
console.log(resultat);
