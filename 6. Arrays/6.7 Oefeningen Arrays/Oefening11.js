let arr1 = [50, 0, 25];
let arr2 = [2, 266, 8, 54];
let begin = 21;
let eind = 15;
console.log(combineerEnManipuleer(arr1, arr2, begin, eind));

function combineerEnManipuleer(arr1, arr2, begin, eind){
    let arr = [begin,...arr1, ...arr2, eind];
    arr.sort(function(a, b) {return a-b});
    return arr;
}