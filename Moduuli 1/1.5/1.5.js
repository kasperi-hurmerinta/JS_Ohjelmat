function onko_karkausvuosi() {
    let kysymys = parseInt(prompt("Anna luku: "))

    if (kysymys % 400 == 0 || kysymys % 4 == 0 && kysymys % 100 != 0) {
        document.querySelector("#teksti").innerHTML = "Karkausvuosi!"
    }
    else {
        document.querySelector("#teksti").innerHTML = "Ei karkausvuosi!"
    }


}

onko_karkausvuosi()