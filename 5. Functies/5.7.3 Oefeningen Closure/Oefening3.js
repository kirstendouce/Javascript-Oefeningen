function maakRekening() {
    let saldo = 0;

    return {
        stort: function(bedrag) {
            saldo += bedrag;
            return saldo;
        },
        opnemen: function(bedrag) {
            saldo -= bedrag;
            return saldo;
        },
        bekijkSaldo: function() {
            return saldo;
        }
    }
}; 
let bankrekening = maakRekening();
console.log(bankrekening.stort(1500));
console.log(bankrekening.bekijkSaldo());
console.log(bankrekening.opnemen(200));
console.log(bankrekening.bekijkSaldo());