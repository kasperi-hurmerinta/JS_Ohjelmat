'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const container = document.querySelector("#target")

for (let x in students) {
    const option = document.createElement("option");

    option.value = students[x].id;
    option.textContent = students[x].name;

    container.appendChild(option);

}
