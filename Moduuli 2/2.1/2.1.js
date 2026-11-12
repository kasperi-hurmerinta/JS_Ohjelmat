let kierros = 1
const numero_lista = []

for (let i = 0; i < 5; i++) {
    x = prompt(`${kierros}. numero`)
    kierros += 1
    numero_lista.push(x)
    console.log(numero_lista)
}

for (let i = numero_lista.length; i >= 0; i--) {
    console.log(numero_lista[i])
}

