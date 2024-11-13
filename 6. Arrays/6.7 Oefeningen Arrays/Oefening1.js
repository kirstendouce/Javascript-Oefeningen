let numbers = [1, 2, 2, 3, 4, 5, 2, 5, 6, 7];
let uniqueNumbers = removeDoubles(numbers);
console.log(uniqueNumbers);

function removeDoubles(arr) {
    let uniqueArr = [];
    arr.forEach(element => {
        if (uniqueArr.indexOf(element) == -1) {
            uniqueArr.push(element);
        }
    });
    return uniqueArr;
}