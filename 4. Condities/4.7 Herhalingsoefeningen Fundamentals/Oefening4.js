let lengte = 8;
let breedte = 8;
let afdruk = "";
for(let i = 1; i <= lengte; i++){
    if(i % 2 == 0){
        for(let a = 0; a < breedte; a = a+2){
                afdruk += " #";
        }
        afdruk += "\n";
    } else {
        for(let b = 0; b < breedte; b = b+2){
            afdruk += "# ";
        }
        afdruk += "\n";
    }
}
console.log(afdruk);