/*
console.log(document.body);

document.title = "Changed title";
document.body.innerHTML = "<button> Good job! </button>";
*/

/*
let eersteParagraaf = document.querySelector('p');
eersteParagraaf.innerHTML = "Dit is de vernieuwde eerste paragraaf.";
*/

/*
let tweedeParagraaf = document.querySelector('#tweede-paragraaf');
tweedeParagraaf.innerHTML = "Dit is de vernieuwde tweede paragraaf.";
*/

/*
let alleParagrafen = document.querySelectorAll('p');
alleParagrafen.forEach(function(p) {
    p.style.background = 'lightgrey';
})

let jsButton = document.getElementById('js-button');

const nieuweParagraaf = document.createElement('p');
nieuweParagraaf.innerHTML = 'Deze paragraaf is gemaakt in JS';

document.body.appendChild(nieuweParagraaf);

let section = document.querySelector('section');

section.appendChild(nieuweParagraaf);

let verwijder = document.querySelector('#js-verwijder');

verwijder.remove();
*/

/*
let vervang = document.querySelector('#js-vervang');

let nieuweParagraaf = document.createElement('p');
nieuweParagraaf.innerHTML = 'Vervangen!';

vervang.replaceWith(nieuweParagraaf);
*/

let aanpassen = document.querySelector('#js-style');
aanpassen.style.margin = "10px";
aanpassen.style.color = "#FE1256";
aanpassen.style.fontSize = "30pt";

let link = document.querySelector('a');
link.setAttribute('href', 'https://en.wikipedia.org')
link.setAttribute('target', '_blank');

if(link.getAttribute('target') == '_blank') {
    console.log("Test.");
}
