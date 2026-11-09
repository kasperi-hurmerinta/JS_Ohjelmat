const nopanheitto_lukumaara = parseInt(prompt("Kuinka monta noppa heitetään: "))

let summa = 0

for (let i = 0; i < nopanheitto_lukumaara; i++) {
    let number = Math.floor(Math.random() * 6) + 1
    summa += number
    console.log(summa)
}

document.querySelector("#teksti").innerHTML = "Summa: " + summa