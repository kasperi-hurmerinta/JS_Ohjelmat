function sorted_house() {
    const sorting_hat = prompt("Anna nimesi: ")

    let numero = Math.floor(Math.random() * 4) + 1

    if (numero == 1) {
        document.querySelector("#teksti").innerHTML = sorting_hat + " sinä olet" + " Gryffindor"
    }

    else if (numero == 2) {
        document.querySelector("#teksti").innerHTML = sorting_hat + " sinä olet" + " Slytherin"
    }

    else if  (numero == 3) {
        document.querySelector("#teksti").innerHTML = sorting_hat + " sinä olet" + " Hufflepuff"
    }

    else if (numero == 4) {
        document.querySelector("#teksti").innerHTML = sorting_hat + " sinä olet" + " Ravenclaw"
    }
    else {
        document.querySelector("#teksti").innerHTML = "Sinulle ei löytynyt huo"
    }

}

sorted_house()