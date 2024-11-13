let arr = [1, 2, 3, 4, 5, 6];
console.log(wisselOm(arr));

function wisselOm(arr){
    [arr[0], arr[1]] = [arr[1], arr[0]];
    return arr;
}