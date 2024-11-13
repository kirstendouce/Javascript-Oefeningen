// console.log(document.body);

//document.title = "Changed title";
//document.body.innerHTML = "<button> Good job! </button>";

/*
let eersteParagraaf = document.querySelector('p');
eersteParagraaf.innerHTML = "Dit is de vernieuwde eerste paragraaf.";

let tweedeParagraaf = document.querySelector('#tweede-paragraaf');
tweedeParagraaf.innerHTML = "Dit is de vernieuwde tweede paragraaf.";
*/

let alleParagrafen = document.querySelectorAll('p');
alleParagrafen.forEach(function(p) {
    p.style.background = 'lightgrey';
})

