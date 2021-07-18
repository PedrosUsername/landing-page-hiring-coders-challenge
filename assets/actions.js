let form = document.getElementById("form");
let name = document.getElementById("name");
let dream = document.getElementById("dream-descript");

let button = document.getElementById("submit-button");

button.addEventListener("click", register);




function register(){
    let ul = document.createElement('UL');
    ul.innerText = name.value;

    let li = document.createElement('LI');
    li.innerHTML = dream.value;

    ul.appendChild(li);
    document.body.appendChild(ul);
}