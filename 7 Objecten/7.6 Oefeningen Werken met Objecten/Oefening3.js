let persoon = {
    naam: "Kirsten Doucé",
    leetijd: 17,
    adres: {
        straat: "Ketelstraat",
        stad: "Neeroeteren",
        postcode: "3680"
    },
    toonPersoonDetails : function(){
        console.log(this.naam);
        console.log(this.leetijd);
        //console.log(this.adres.straat);
        console.log(this.adres.stad);
        //console.log(this.adres.postcode);
    }, 
    introduceer : function() {
        console.log(`Hallo, ik ben ${this.naam} en woon in ${this.adres.stad}.`);
    }
};