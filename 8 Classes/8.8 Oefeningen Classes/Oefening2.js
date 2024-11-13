class Car {
    constructor(brand, mileage){
        this._brand = brand;
        this._mileage = mileage;
    }

    set brand(brand) {
        this._brand = brand;
    }

    get brand() {
        return this._brand;
    }

    set mileage(mileage) {
        if(mileage > this.mileage) {
            this._mileage = mileage;
        } else {
            console.log("Mileage cannot be lowered!!!");
        }
    }

    get mileage() {
        return this._mileage;
    }

    showInfo() {
        console.log(`The brand is ${this.brand}. The mileage is ${this.mileage}`);
    }
}

const carOne = new Car("Toyota", 2000);
carOne.showInfo();