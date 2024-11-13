class Car {
    constructor(name, year) {
        this._name = name;
        this._year = year;
    }
    // setter met als key 'name'
    set name (name) {
        this._name = name;
    }
    // getter met als key 'name'
    get name () {
        return this._name;
    }
}

const carOne = new Car("Twingo", 2005);
carOne.name = "Twingo met spoiler";
console.log(carOne.name);
