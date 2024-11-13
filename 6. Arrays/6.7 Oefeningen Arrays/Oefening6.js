let arr =[1, 2, 3];
printAlleMogelijkheden(arr);

function printAlleMogelijkheden(arr) {
    arr.forEach(element1 => {
        arr.forEach(element2 => {
            console.log(element1 +" "+ element2);
        });
    });
}
