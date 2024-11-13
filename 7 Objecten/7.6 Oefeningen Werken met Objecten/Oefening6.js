let boek = {
    titel: "Rapunzel is losing it",
    auteur: "Dilan Dyer",
    jaar: 2024,
    genre: "SMUT"
}
let {titel, auteur, ...details} = boek; 
function toenBoekInfo(titel, auteur, details) {
    console.log(`${titel} is geschreven door ${auteur}.`);
    console.log("Details: ", details);
}
toenBoekInfo(titel, auteur, details);