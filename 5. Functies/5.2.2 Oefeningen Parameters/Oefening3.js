let prijs = 0;
let kortingsgroep = "a";
let aantal = 0;
let korting;
berekenKorting(prijs, kortingsgroep, aantal);
function berekenKorting(prijs, kortingsgroep, aantal) {
    if(kortingsgroep == "a"|| kortingsgroep == "b"){
        if(kortingsgroep == "a") {
            korting = 10;
        } else {
            korting = 20;
        }
        console.log(`De totaalprijs na ${korting}% korting is ${aantal * (prijs - (prijs/100*korting)) } euro.`)
    } else {
        console.log("U hebt niet kortingsgroep a of b ingegeven. Gelieve u kortingsgroep aan te passen.");
    }
}