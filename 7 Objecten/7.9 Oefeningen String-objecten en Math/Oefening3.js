function verwijderWoord(tekst, woord) {
    let woorden = tekst.split(woord);
    tekst = woorden.join(" ");
    return tekst;
}
console.log(verwijderWoord("hoihoi, hoe gaat het?", "hoe"));