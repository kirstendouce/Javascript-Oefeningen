let arr = [1, 2, 5, 8, 10, 12, 15, 18, 20, 25, 30];
console.log(filterComplex(arr));

function filterComplex(arr) {
    let newArr = [];
    newArr = arr.filter(element => {
        return element > 10;
    });
    newArr = newArr.filter(element => {
        return element % 2 == 0;
    });
    return newArr;
}
