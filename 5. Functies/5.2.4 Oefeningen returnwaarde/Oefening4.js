const prompt = require("prompt-sync")();
const n = prompt("Voer een getal in. ");
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}
console.log(isPrime(n));

const limiet = prompt("Voor een limiet in. ");
function grootstePriem(limiet) {
    for (let k = limiet - 1; k > 1; k--) {
        if (isPrime(k) == true) {
            return k;
        }
    }
    return null;
}
console.log(grootstePriem(limiet));