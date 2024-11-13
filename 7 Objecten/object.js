let persoon = {
    voornaam: "Frank",
    achternaam: "De Tank",
    leeftijd: 30,
    beroep: "programmeur",
    adres: {
        straat: "Kerkstraat",
        huisnummer: 12,
        postcode: "3650",
        stad: "Dilsen-Stokkem"
    },

    verjaar: function() {
        this.leeftijd++;
    },

    stelVoor: function() {
        return `Hallo, ik ben ${this.voornaam} de ${this.beroep}.`;
    }
};

persoon.beroep = "vuilnisman";

let {voornaam, ...overig} = persoon;
console.log(voornaam);
console.log(overig);

/*let kopiePersoon = {...persoon, geslacht: "man"};
persoon.leeftijd = 50;
console.log(kopiePersoon.geslacht);

let {voornaam, leeftijd} = persoon;
console.log(voornaam);
console.log(leeftijd);

console.log(persoon.voornaam);
console.log(persoon.achternaam);
console.log(persoon.leeftijd);
console.log(persoon.beroep);

console.log(persoon.adres.straat);
console.log(persoon.adres.huisnummer);
console.log(persoon.adres.postcode);
console.log(persoon.adres.stad);

persoon.verjaar();
console.log(persoon.leeftijd);
console.log(persoon.stelVoor());*/