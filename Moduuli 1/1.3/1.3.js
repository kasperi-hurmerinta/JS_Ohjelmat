let ensimmainen_numero = parseFloat(prompt("1. Numero "))
let toinen_numero = parseFloat(prompt("2. Numero "))
let kolmas_numero = parseFloat(prompt("3. Numero "))

let keskiarvo = ((ensimmainen_numero + toinen_numero + kolmas_numero) / 3)
let summa = (ensimmainen_numero + toinen_numero + kolmas_numero)
let kertolasku = (ensimmainen_numero * toinen_numero * kolmas_numero)


document.querySelector("#keskiarvo").innerHTML = keskiarvo.toString()
document.querySelector("#summa").innerHTML = summa.toString()
document.querySelector("#kertolasku").innerHTML = kertolasku.toString()