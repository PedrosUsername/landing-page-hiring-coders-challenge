/* form */
let cadastrar_btn = document.querySelector(".submit-btn");
let name = document.getElementById("nome");
let email = document.getElementById("email");

cadastrar_btn.addEventListener("click", function(){
    alert("nome:" + name.value + ", email: " + email.value);
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