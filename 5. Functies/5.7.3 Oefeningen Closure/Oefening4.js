const prompt = require("prompt-sync")();

function maakGroet() {
    let naam = prompt("Wat is je naam? ");
    return {
        wijzigNaam: function () {
            naam = prompt("Wat is je nieuwe naam? ");
        },
        groet: function () {
            return "Hallo, " + naam;
        }
    }
}

let persoonlijkeGroet = maakGroet();
console.log(persoonlijkeGroet.groet());
console.log(persoonlijkeGroet.wijzigNaam());
console.log(persoonlijkeGroet.groet());