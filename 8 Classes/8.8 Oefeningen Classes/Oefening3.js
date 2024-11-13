class Person {
    #nrn 
    constructor(name, nrn){
        this._name = name;
        this.#nrn = nrn;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set nrn(nrn) {
        this.#nrn = nrn;
    }

    get nrn() {
        return this.#nrn;
    }

    showNrn() {
        console.log(`The nrn: ${this.#nrn}`);
    }
}

const persoon = new Person("naam", "000000.00.00");
persoon.showNrn();