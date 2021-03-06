/* form */
let cadastrar_btn = document.querySelector(".submit-btn");
let name = document.getElementById("nome");
let email = document.getElementById("email");

var counter = 0;
let people = getPeople();




cadastrar_btn.addEventListener("click", function(){
    people[counter] = new Object();
    people[counter].name = name.value;
    people[counter].email = email.value;

    console.log(people[counter]);
    localStorage.setItem( name.value, email.value );
    counter++;
});


/* carousel */
let left_btn = document.getElementById("carousel-lftbtn")
let right_btn = document.getElementById("carousel-rgtbtn")
let cards = document.querySelectorAll(".card");

const carouselLen = cards.length;
let carouselPos = 0;

left_btn.addEventListener("click", function(){
    cards[carouselPos].classList.remove("card-focus1");
    cards[carouselPos + 1].classList.remove("card-focus2");
    
    if (carouselPos == 0)
        carouselPos = carouselLen - 2;
    else
        carouselPos -= 1;

    cards[carouselPos].classList.add("card-focus1");
    cards[carouselPos + 1].classList.add("card-focus2");
});

right_btn.addEventListener("click", function(){
    cards[carouselPos].classList.remove("card-focus1");
    cards[carouselPos + 1].classList.remove("card-focus2");
    
    if (carouselPos == carouselLen - 2)
        carouselPos = 0;
    else
        carouselPos += 1;

    cards[carouselPos].classList.add("card-focus1");
    cards[carouselPos + 1].classList.add("card-focus2"); 
});










/* others */
function getPeople() {
    let arr = [];

    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue; // skip keys like "setItem", "getItem" etc
        }
        arr.push({name: key, email: localStorage.getItem(key)});
        counter++;
      }

    return arr;
}