const koira_lista = []

for (let i = 0; i < 6; i++) {
    x = prompt("Anna koiran nimi: ")
    koira_lista.push(x)
}

let teksti = ""
for (let x in koira_lista) {
    koira_lista.sort()
    koira_lista.reverse()
    teksti += "<li>" + koira_lista[x] + "</li>";

}

document.querySelector("#lista").innerHTML = teksti




