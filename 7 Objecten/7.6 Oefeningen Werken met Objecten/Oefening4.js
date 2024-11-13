let student = {
    naam: "Kirsten Doucé",
    leeftijd: 17,
    studie: "Informatica en communicatiewetenschappen",
    bericht: function() {
        console.log(`Hallo, ik ben ${this.naam} en doe ${this.studie}`);
    }
};
function verwelkomStudent(naam, studie) {
    console.log(`Hallo, ik ben ${naam} en doe ${studie}`);
};
let {naam, studie} = student;
verwelkomStudent(naam, studie);