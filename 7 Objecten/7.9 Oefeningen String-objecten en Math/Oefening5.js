function genereerWillekeurigGetal(min, max){
    let getal;
    do {
        getal = Math.random() * 100;
    } while (getal > max || getal < min) 
    return getal;
}
genereerWillekeurigGetal(0, 2);