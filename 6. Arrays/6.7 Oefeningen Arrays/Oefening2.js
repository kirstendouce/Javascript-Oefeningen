let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let omgekeerd = keerOm(numbers);
console.log(omgekeerd);

function keerOm(arr) {
    let newArr = [];
    arr.forEach(element => {
        newArr.unshift(element);
    });
    return newArr;
}