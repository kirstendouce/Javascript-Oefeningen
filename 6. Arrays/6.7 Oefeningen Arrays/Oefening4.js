let arr = [1, 2, 3, 4, 5];
console.log(verdubbel(arr));

function verdubbel(arr){
    let newArr = arr.map(function(arr) { return arr * 2; });
    return newArr;
}