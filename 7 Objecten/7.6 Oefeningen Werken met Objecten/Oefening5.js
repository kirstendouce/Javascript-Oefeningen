let auto = {
    merk: "Porsche",
    model: "911 carrera",
    bouwjaar: "2021"
};
function upgradeAuto(bouwjaar) {
    let nieuweBouwjaar = "2025";
    bouwjaar = nieuweBouwjaar;
};
let upgradeAuto = {...auto, bouwjaar};
upgradeAuto(bouwjaar);