'use strict';
const names = ['John', 'Paul', 'Jones'];

let teksti = ""
for (let x in names) {
    teksti += "<li>" + names[x] + "</li>";

}

document.querySelector("#target").innerHTML = teksti