let zin = "Hallokes ik ben blabla. En ik zit nu op een stoel. Ik doe blabla. Dada groetjes blabla.";
let woord = "En";

console.log(haalSubzin(zin, woord));

function haalSubzin(zin, woord) {
    let zinnetje = zin.split(". ");
    let resultaat = zinnetje.find(zin => {
        return zin.indexOf(woord) == 0; 
    });
    return resultaat;
}