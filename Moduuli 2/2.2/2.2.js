kuinka_monta_osallistujaa = parseInt(prompt("Kuinka monta osallistujaa? "))

const osallistujien_nimet = []

while (true) {

    anna_osallistujien_nimet = prompt("Nimi: ")
    osallistujien_nimet.push(anna_osallistujien_nimet)

    if (anna_osallistujien_nimet === kuinka_monta_osallistujaa) {
        break
    }
}

let teksti = ""
for (let x in osallistujien_nimet) {
    osallistujien_nimet.sort()
    teksti += "<li>" + osallistujien_nimet + "</li>";
}

document.querySelector("#lista").innerHTML = teksti