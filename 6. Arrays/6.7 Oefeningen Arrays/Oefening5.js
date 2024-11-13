let arr = [1, 2, 3, 4, 5];
console.log(eersteEnLaatste(arr));

function eersteEnLaatste(arr) {
    let newArr = [arr.shift() , arr.pop()];
    return newArr;
}