function maakTeller() {
    let count = 0;

    return {
        verhoog: function () {
            count++;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        }
    };
}

let teller = maakTeller();
console.log(teller.verhoog());
console.log(teller.verhoog());
console.log(teller.verhoog());
console.log(teller.reset());
console.log(teller.verhoog());
console.log(teller.verhoog());