let button = document.querySelector("#change");
let buttonI = document.querySelector("#change i");
button.addEventListener("click", () => {
    buttonI.classList.toggle("hoverSignUp");
});

let forms = document.querySelector(".forms");
button.addEventListener("click", () => {
    forms.classList.toggle("flip");
});