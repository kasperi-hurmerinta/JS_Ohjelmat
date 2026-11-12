let kierros = 1
const numero_lista = []

while (true) {
    x = parseInt(prompt("Anna numero: "))
    numero_lista.push(x)

    if (x === 0) {
        numero_lista.sort(function(a, b){return b - a});
        console.log(numero_lista)
        break
    }
}


