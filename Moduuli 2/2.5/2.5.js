numero_lista = []

while (true) {
    numero_kysymys = parseInt(prompt("Anna luku: "))

    if (numero_lista.includes(numero_kysymys)) {
        numero_lista.sort(function(a, b){return a - b});
        console.log(numero_lista)
        break
    }

    numero_lista.push(numero_kysymys)

}