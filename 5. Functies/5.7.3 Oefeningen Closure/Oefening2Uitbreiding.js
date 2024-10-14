function maakTeller() {
    let count = 0;

    return {
        verhoog: function (n) {
            count += n;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        }
    };
}

let teller = maakTeller();
console.log(teller.verhoog(5));
console.log(teller.verhoog(9));
console.log(teller.verhoog(21));
console.log(teller.reset());
console.log(teller.verhoog(12));
console.log(teller.verhoog(36));