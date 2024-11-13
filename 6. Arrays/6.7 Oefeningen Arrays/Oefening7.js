let arr = [1, 2, 3, 4, 5];
let getal = 3;
console.log(splitsArray(arr, getal));

function splitsArray(arr, getal){
    let arr1 = arr.slice(0, getal); 
    let arr2 = arr.slice(getal, arr.length);
    return arr1 +"  "+ arr2;
}