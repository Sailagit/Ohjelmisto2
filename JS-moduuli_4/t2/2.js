const ul = document.querySelector("#target")

const li= document.createElement("li");
const p=
        `<li>First item</li>
        <li>Second item</li>
        <li>Third item</li>`;
    li.innerHTML = p;
    ul.appendChild(li);

const second = document.getElementsByTagName("li")[2].setAttribute("class", "my-item");

