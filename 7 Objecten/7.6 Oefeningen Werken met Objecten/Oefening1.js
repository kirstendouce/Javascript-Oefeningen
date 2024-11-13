let auto = {
    merk: "Porsche",
    model: "911 carrera",
    bouwjaar: "2021",
    kilometerStand: 25000,
    updateKilometerStand : function(kilometerStand, getal) {
        return kilometerStand += getal;
    },
    toonAutoInfo : function() {
        console.log(this.merk);
        console.log(this.model);
        console.log(this.bouwjaar);
        console.log(this.kilometerStand);
    }
};
