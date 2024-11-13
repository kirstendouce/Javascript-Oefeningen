let arr = [1, 3, 5, 7, 8, 9, 11, 13, 14, 15, 20];
let evenArr = even(arr);
let [first] = evenArr;
console.log(first);

function even(arr) {
    let newArr = [];
    newArr = arr.filter(element => {
        return element % 2 == 0;
    });
    return newArr;
}