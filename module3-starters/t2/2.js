const container = document.querySelector("#target")

const createElement = document.createElement("p")

createElement.innerHTML = "<li>First Task</li> <li>Second Task</li> <li>Third Task</li>"

container.appendChild(createElement)