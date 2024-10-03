
for(let i = 1; i <= 100; i++) {
    let getal = String(i);
    if(i % 3 == 0 && i % 5 != 0){
        getal = getal.replace(i, "Fizz");
    } else if(i % 3 != 0 && i % 5 == 0){
        getal = getal.replace(i, "Buzz");
    } else if(i % 3 == 0 && i % 5 == 0){
        getal = getal.replace(i, "FizzBuzz");
    }
    console.log(getal);
}