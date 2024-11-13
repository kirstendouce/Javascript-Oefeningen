class Temperature {
    static convertToFahrenheit(celsius) {
        return celsius * 1.8 + 32;
    }
}

let fahrenheit = Temperature.convertToFahrenheit(25);
console.log(fahrenheit);