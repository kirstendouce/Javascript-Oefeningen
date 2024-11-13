class BankAccount {
    constructor(startingBudget) {
        this.startingBudget = startingBudget;
    }
    deposit(amount) {
        this.startingBudget += amount;
    }
    withdraw(amount) {
        if(this.startingBudget >= amount) {
            this.startingBudget -= amount;
        } else {
            console.log("Insufficient balance.");
        }
    }
    checkBalance() {
        console.log(this.startingBudget);
    }
}

let balance = new BankAccount(1500);

balance.checkBalance();
balance.deposit(200);
balance.checkBalance();
balance.withdraw(500);
balance.checkBalance();
balance.withdraw(2000);