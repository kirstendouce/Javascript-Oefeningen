let arr = [1, 10, 15, 20, 25, 30, 35, 40];
let getal = 22;
let definitief = filterGroterDan(arr, getal);
console.log(definitief);

function filterGroterDan(arr, getal) {
    let newArr = []
    newArr = arr.filter(element => {
        return element >= getal;
    });
    return newArr;
}