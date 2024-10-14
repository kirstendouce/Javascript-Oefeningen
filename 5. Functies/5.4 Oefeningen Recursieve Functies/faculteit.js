function faculteit(n) {
    //basisgeval
    if(n === 1) {
        return 1;
    } else { //recursieve aanroep
        return n * faculteit(n-1);
    }
}
console.log(faculteit(21));