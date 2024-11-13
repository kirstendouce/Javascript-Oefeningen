let namen = ["Elise", "Kirsten", "Tyrese", "Antonius", "Natan", "Sybren", "Yatho"];
let n = 7;
let eerste = vindNaamMetLengte(namen, n);
console.log(eerste);

function vindNaamMetLengte(namen, n){
    let gevonden = namen.find(function (naam) {return naam.length == n });
    return gevonden;
    /*
    function hierBenJe(naam){ 
        return naam.length == n;
    }
    */
}