let nimi = prompt("Type your name");
const oikea_nimi = "Frank";

if (nimi == oikea_nimi) {
    document.querySelector('#kohde').innerHTML = 'Good morning, ' + oikea_nimi + '!';
}