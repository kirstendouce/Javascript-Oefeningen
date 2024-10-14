function maakTeller() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    } ;
}

let teller1 = maakTeller();
teller1();
teller1();
teller1();
teller1();
teller1();