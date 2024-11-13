let arr1 = ["koude koffie", "fuet worsten", "kaas"];
let arr2 = ["tomaat", "mozerella"];
console.log(maakBoodschappenlijst(arr1, arr2));

function maakBoodschappenlijst(arr1, arr2){
    let lijstje = [...arr1, ...arr2];
    let alfabetisch = lijstje.sort();
    return alfabetisch;
}