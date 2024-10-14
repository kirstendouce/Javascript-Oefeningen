function isEven(n) {
    if(n % 2 == 0){
        console.log(true);
    } else {
        console.log(false);
    }
}
for(let n = 1; n <= 10; n++) {
    isEven(n);
}