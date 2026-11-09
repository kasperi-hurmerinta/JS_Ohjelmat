const kysymys = confirm("Should I calculate the square root?")

if (kysymys == true) {
    sqrt_kysymys = parseInt(prompt("Anna luku: "))

    if (sqrt_kysymys < 0)
        document.querySelector("#teksti").innerHTML = "The square root of a negative number is not defined"
    else {
        let lasku = Math.sqrt(sqrt_kysymys);
        document.querySelector("#teksti").innerHTML = lasku.toString()
    }

}